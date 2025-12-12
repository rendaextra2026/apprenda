import { pgTable, serial, text, varchar, integer, decimal, timestamp, boolean, json } from 'drizzle-orm/pg-core';

// Tabela de categorias
export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  slug: varchar('slug', { length: 100 }).notNull().unique(),
  description: text('description'),
  icon: varchar('icon', { length: 50 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Tabela de produtos
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  shopeeId: varchar('shopee_id', { length: 100 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  categoryId: integer('category_id').references(() => categories.id),
  originalPrice: decimal('original_price', { precision: 10, scale: 2 }).notNull(),
  currentPrice: decimal('current_price', { precision: 10, scale: 2 }).notNull(),
  discountPercentage: integer('discount_percentage'),
  imageUrl: text('image_url'),
  shopeeUrl: text('shopee_url').notNull(),
  affiliateUrl: text('affiliate_url').notNull(),
  rating: decimal('rating', { precision: 3, scale: 1 }),
  soldCount: integer('sold_count'),
  allowsAffiliation: boolean('allows_affiliation').default(true),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  lastScrapedAt: timestamp('last_scraped_at'),
});

// Tabela de vídeos
export const videos = pgTable('videos', {
  id: serial('id').primaryKey(),
  productId: integer('product_id').references(() => products.id),
  videoUrl: text('video_url').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  title: varchar('title', { length: 255 }),
  duration: integer('duration'), // em segundos
  viewCount: integer('view_count'),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Tabela de favoritos/wishlist
export const wishlists = pgTable('wishlists', {
  id: serial('id').primaryKey(),
  productId: integer('product_id').references(() => products.id),
  sessionId: varchar('session_id', { length: 255 }), // para usuários não autenticados
  createdAt: timestamp('created_at').defaultNow(),
});

// Tabela de trending (produtos mais vistos/vendidos)
export const trending = pgTable('trending', {
  id: serial('id').primaryKey(),
  productId: integer('product_id').references(() => products.id),
  viewCount: integer('view_count').default(0),
  clickCount: integer('click_count').default(0),
  rank: integer('rank'),
  period: varchar('period', { length: 20 }), // 'daily', 'weekly', 'monthly'
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Tabela de logs de scraping
export const scrapingLogs = pgTable('scraping_logs', {
  id: serial('id').primaryKey(),
  category: varchar('category', { length: 100 }),
  productsFound: integer('products_found'),
  productsAdded: integer('products_added'),
  productsUpdated: integer('products_updated'),
  status: varchar('status', { length: 20 }), // 'success', 'failed', 'partial'
  error: text('error'),
  startedAt: timestamp('started_at'),
  completedAt: timestamp('completed_at'),
});
