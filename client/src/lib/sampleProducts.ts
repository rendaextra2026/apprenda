/**
 * Sample Products Data
 * This is mock data for demonstration purposes
 * In production, this would come from an API or database
 */

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  badge?: string;
  shopeeUrl: string;
}

export const sampleProducts: Product[] = [
  {
    id: "1",
    title: "Fone de Ouvido Bluetooth Premium com Cancelamento de Ruído",
    image: "/images/product-placeholder.jpg",
    price: 89.9,
    originalPrice: 299.9,
    discount: 70,
    badge: "🔥 Viral",
    shopeeUrl: "https://shopee.com.br/produto-fone-bluetooth-i.123456.789012",
  },
  {
    id: "2",
    title: "Smartwatch Elegante com Monitor de Saúde",
    image: "/images/product-placeholder.jpg",
    price: 149.9,
    originalPrice: 499.9,
    discount: 70,
    badge: "⭐ Bestseller",
    shopeeUrl: "https://shopee.com.br/produto-smartwatch-i.123456.789013",
  },
  {
    id: "3",
    title: "Câmera Instantânea Retro com Filme",
    image: "/images/product-placeholder.jpg",
    price: 199.9,
    originalPrice: 599.9,
    discount: 67,
    badge: "✨ Novidade",
    shopeeUrl: "https://shopee.com.br/produto-camera-i.123456.789014",
  },
  {
    id: "4",
    title: "Mochila de Viagem com Carregamento USB",
    image: "/images/product-placeholder.jpg",
    price: 79.9,
    originalPrice: 249.9,
    discount: 68,
    shopeeUrl: "https://shopee.com.br/produto-mochila-i.123456.789015",
  },
  {
    id: "5",
    title: "Teclado Mecânico RGB para Gamers",
    image: "/images/product-placeholder.jpg",
    price: 129.9,
    originalPrice: 399.9,
    discount: 68,
    badge: "🎮 Gaming",
    shopeeUrl: "https://shopee.com.br/produto-teclado-i.123456.789016",
  },
  {
    id: "6",
    title: "Luminária LED Inteligente com Controle por Voz",
    image: "/images/product-placeholder.jpg",
    price: 59.9,
    originalPrice: 199.9,
    discount: 70,
    shopeeUrl: "https://shopee.com.br/produto-luminaria-i.123456.789017",
  },
  {
    id: "7",
    title: "Carregador Rápido 65W com 3 Portas USB-C",
    image: "/images/product-placeholder.jpg",
    price: 69.9,
    originalPrice: 229.9,
    discount: 70,
    badge: "⚡ Rápido",
    shopeeUrl: "https://shopee.com.br/produto-carregador-i.123456.789018",
  },
  {
    id: "8",
    title: "Espelho de Maquiagem com Luz LED Ajustável",
    image: "/images/product-placeholder.jpg",
    price: 49.9,
    originalPrice: 159.9,
    discount: 69,
    shopeeUrl: "https://shopee.com.br/produto-espelho-i.123456.789019",
  },
  {
    id: "9",
    title: "Difusor de Aroma Ultrassônico Premium",
    image: "/images/product-placeholder.jpg",
    price: 89.9,
    originalPrice: 299.9,
    discount: 70,
    badge: "🌿 Bem-estar",
    shopeeUrl: "https://shopee.com.br/produto-difusor-i.123456.789020",
  },
];
