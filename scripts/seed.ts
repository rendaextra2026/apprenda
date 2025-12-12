import { db } from '../lib/db';
import { categories } from '../lib/db/schema';
import { generateSlug } from '../lib/utils/helpers';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const INITIAL_CATEGORIES = [
  {
    name: 'Eletrônicos',
    description: 'Smartphones, computadores, acessórios e gadgets',
    icon: '📱',
  },
  {
    name: 'Roupas e Moda',
    description: 'Camisetas, calças, vestidos e acessórios de moda',
    icon: '👕',
  },
  {
    name: 'Casa e Jardim',
    description: 'Móveis, decoração e itens para casa',
    icon: '🏠',
  },
  {
    name: 'Beleza e Cuidados',
    description: 'Cosméticos, skincare e produtos de higiene',
    icon: '💄',
  },
  {
    name: 'Esportes e Fitness',
    description: 'Equipamentos de exercício e roupas esportivas',
    icon: '⚽',
  },
  {
    name: 'Livros e Educação',
    description: 'Livros, cursos e materiais educacionais',
    icon: '📚',
  },
  {
    name: 'Alimentos e Bebidas',
    description: 'Alimentos, bebidas e suplementos',
    icon: '🍔',
  },
  {
    name: 'Brinquedos e Jogos',
    description: 'Brinquedos, jogos de mesa e videogames',
    icon: '🎮',
  },
];

async function seed() {
  try {
    console.log('🌱 Starting database seed...');

    // Limpar categorias existentes
    await db.delete(categories);
    console.log('🗑️  Cleared existing categories');

    // Inserir novas categorias
    for (const cat of INITIAL_CATEGORIES) {
      await db.insert(categories).values({
        name: cat.name,
        slug: generateSlug(cat.name),
        description: cat.description,
        icon: cat.icon,
      });
    }

    console.log(`✅ Seeded ${INITIAL_CATEGORIES.length} categories`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }
}

seed();
