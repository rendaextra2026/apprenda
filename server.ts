import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { db, testConnection } from './lib/db';
import { categories, products, videos } from './lib/db/schema';
import { eq, ilike, and, gte, lte } from 'drizzle-orm';
import { generateAffiliateLink } from './lib/scraper/shopee';
import { formatPrice } from './lib/utils/helpers';

dotenv.config({ path: '.env.local' });

const app: Express = express();
const PORT = process.env.API_PORT || 3001;
const AFFILIATE_ID = process.env.SHOPEE_AFFILIATE_ID || '18337350889';

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// GET /api/categorias - Listar todas as categorias
app.get('/api/categorias', async (req: Request, res: Response) => {
  try {
    const cats = await db.select().from(categories);
    res.json(cats);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// GET /api/produtos - Listar produtos com filtros
app.get('/api/produtos', async (req: Request, res: Response) => {
  try {
    const { 
      categoria, 
      busca, 
      precoMin, 
      precoMax, 
      ordenar = 'recente',
      pagina = '1',
      limite = '20'
    } = req.query;

    let query = db.select().from(products).where(eq(products.isActive, true));

    // Filtro por categoria
    if (categoria) {
      const cat = await db.select().from(categories).where(eq(categories.slug, categoria as string));
      if (cat.length > 0) {
        query = query.where(eq(products.categoryId, cat[0].id));
      }
    }

    // Filtro por busca
    if (busca) {
      query = query.where(ilike(products.name, `%${busca}%`));
    }

    // Filtro por preço
    if (precoMin) {
      query = query.where(gte(products.currentPrice, parseFloat(precoMin as string)));
    }
    if (precoMax) {
      query = query.where(lte(products.currentPrice, parseFloat(precoMax as string)));
    }

    // Ordenação
    switch (ordenar) {
      case 'preco-asc':
        query = query.orderBy(products.currentPrice);
        break;
      case 'preco-desc':
        query = query.orderBy(products.currentPrice);
        break;
      case 'desconto':
        query = query.orderBy(products.discountPercentage);
        break;
      case 'avaliacao':
        query = query.orderBy(products.rating);
        break;
      default:
        query = query.orderBy(products.createdAt);
    }

    const prods = await query.limit(parseInt(limite as string)).offset((parseInt(pagina as string) - 1) * parseInt(limite as string));
    
    // Adicionar link de afiliação
    const prodsWithAffiliateLink = prods.map(p => ({
      ...p,
      affiliateUrl: generateAffiliateLink(p.shopeeUrl, AFFILIATE_ID),
    }));

    res.json(prodsWithAffiliateLink);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// GET /api/produtos/:id - Detalhes do produto
app.get('/api/produtos/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const prod = await db.select().from(products).where(eq(products.id, parseInt(id)));
    
    if (prod.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const vids = await db.select().from(videos).where(eq(videos.productId, parseInt(id)));
    
    const product = {
      ...prod[0],
      affiliateUrl: generateAffiliateLink(prod[0].shopeeUrl, AFFILIATE_ID),
      videos: vids,
    };

    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// GET /api/busca - Buscar produtos
app.get('/api/busca', async (req: Request, res: Response) => {
  try {
    const { q, limite = '10' } = req.query;
    
    if (!q) {
      return res.status(400).json({ error: 'Query parameter "q" is required' });
    }

    const prods = await db
      .select()
      .from(products)
      .where(
        and(
          ilike(products.name, `%${q}%`),
          eq(products.isActive, true)
        )
      )
      .limit(parseInt(limite as string));

    const prodsWithAffiliateLink = prods.map(p => ({
      ...p,
      affiliateUrl: generateAffiliateLink(p.shopeeUrl, AFFILIATE_ID),
    }));

    res.json(prodsWithAffiliateLink);
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({ error: 'Failed to search products' });
  }
});

// GET /api/trending - Produtos em alta
app.get('/api/trending', async (req: Request, res: Response) => {
  try {
    const prods = await db
      .select()
      .from(products)
      .where(eq(products.isActive, true))
      .orderBy(products.soldCount)
      .limit(10);

    const prodsWithAffiliateLink = prods.map(p => ({
      ...p,
      affiliateUrl: generateAffiliateLink(p.shopeeUrl, AFFILIATE_ID),
    }));

    res.json(prodsWithAffiliateLink);
  } catch (error) {
    console.error('Error fetching trending products:', error);
    res.status(500).json({ error: 'Failed to fetch trending products' });
  }
});

// Iniciar servidor
async function startServer() {
  // Testar conexão com banco de dados
  const connected = await testConnection();
  
  if (!connected) {
    console.error('❌ Cannot start server without database connection');
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`✅ API Server running on http://localhost:${PORT}`);
    console.log(`📚 API Documentation:`);
    console.log(`   GET /api/health - Health check`);
    console.log(`   GET /api/categorias - List categories`);
    console.log(`   GET /api/produtos - List products with filters`);
    console.log(`   GET /api/produtos/:id - Product details`);
    console.log(`   GET /api/busca?q=termo - Search products`);
    console.log(`   GET /api/trending - Trending products`);
  });
}

startServer().catch(console.error);

export default app;
