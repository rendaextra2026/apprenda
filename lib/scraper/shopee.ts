import axios from 'axios';
import * as cheerio from 'cheerio';

interface ScrapedProduct {
  shopeeId: string;
  name: string;
  originalPrice: number;
  currentPrice: number;
  discountPercentage: number;
  imageUrl: string;
  shopeeUrl: string;
  rating: number;
  soldCount: number;
}

// Mapeamento de categorias para URLs da Shopee
const CATEGORY_URLS: Record<string, string> = {
  roupas: 'https://shopee.com.br/search?keyword=roupas&page=0',
  eletronicos: 'https://shopee.com.br/search?keyword=eletrônicos&page=0',
  casa: 'https://shopee.com.br/search?keyword=casa+e+jardim&page=0',
  beleza: 'https://shopee.com.br/search?keyword=beleza&page=0',
  esportes: 'https://shopee.com.br/search?keyword=esportes&page=0',
  livros: 'https://shopee.com.br/search?keyword=livros&page=0',
};

export async function scrapeShopeeProducts(category: string): Promise<ScrapedProduct[]> {
  const products: ScrapedProduct[] = [];

  try {
    const url = CATEGORY_URLS[category.toLowerCase()] || CATEGORY_URLS.eletronicos;
    
    console.log(`🔍 Scraping ${category} from Shopee...`);
    
    // Nota: Shopee usa JavaScript para renderizar produtos
    // Uma solução real precisaria de Puppeteer ou Playwright
    // Por enquanto, retornamos dados de exemplo
    
    // Em produção, você usaria:
    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto(url);
    // const html = await page.content();
    
    console.log(`✅ Found ${products.length} products in ${category}`);
    
    return products;
  } catch (error) {
    console.error(`❌ Error scraping ${category}:`, error);
    return [];
  }
}

// Função para gerar link de afiliação
export function generateAffiliateLink(shopeeUrl: string, affiliateId: string): string {
  try {
    const url = new URL(shopeeUrl);
    const params = new URLSearchParams(url.search);
    
    // Adicionar ID de afiliado
    params.set('af_id', affiliateId);
    
    return `${url.origin}${url.pathname}?${params.toString()}`;
  } catch {
    // Se não conseguir parsear, adicionar como parâmetro
    const separator = shopeeUrl.includes('?') ? '&' : '?';
    return `${shopeeUrl}${separator}af_id=${affiliateId}`;
  }
}

// Função para extrair dados de um produto (exemplo)
export function extractProductData(element: cheerio.Element, $: cheerio.CheerioAPI): Partial<ScrapedProduct> | null {
  try {
    const name = $(element).find('[data-sqe="name"]').text().trim();
    const priceText = $(element).find('[data-sqe="price"]').text().trim();
    const originalPriceText = $(element).find('[data-sqe="original_price"]').text().trim();
    const imageUrl = $(element).find('img').attr('src') || '';
    const shopeeUrl = $(element).find('a').attr('href') || '';

    if (!name || !priceText || !shopeeUrl) return null;

    const currentPrice = parseFloat(priceText.replace(/[^\d,]/g, '').replace(',', '.'));
    const originalPrice = originalPriceText 
      ? parseFloat(originalPriceText.replace(/[^\d,]/g, '').replace(',', '.'))
      : currentPrice;

    const discountPercentage = originalPrice > 0 
      ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
      : 0;

    return {
      name,
      currentPrice,
      originalPrice,
      discountPercentage,
      imageUrl,
      shopeeUrl: shopeeUrl.startsWith('http') ? shopeeUrl : `https://shopee.com.br${shopeeUrl}`,
      rating: 0,
      soldCount: 0,
    };
  } catch (error) {
    console.error('Error extracting product data:', error);
    return null;
  }
}
