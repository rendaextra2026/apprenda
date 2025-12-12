'use client';

import { useState } from 'react';
import { Heart, Search, Menu, X } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  badge: string;
  shopeeUrl: string;
}

const sampleProducts: Product[] = [
  {
    id: '1',
    title: 'Fone de Ouvido Bluetooth Premium com Cancelamento de Ruído',
    image: 'https://via.placeholder.com/300x300?text=Fone+Bluetooth',
    price: 89.9,
    originalPrice: 299.9,
    discount: 70,
    badge: '🔥 Viral',
    shopeeUrl: 'https://shopee.com.br/produto-fone-bluetooth-i.123456.789012',
  },
  {
    id: '2',
    title: 'Smartwatch com Monitor Cardíaco e GPS',
    image: 'https://via.placeholder.com/300x300?text=Smartwatch',
    price: 129.9,
    originalPrice: 399.9,
    discount: 68,
    badge: '⭐ Bestseller',
    shopeeUrl: 'https://shopee.com.br/produto-smartwatch-i.234567.890123',
  },
  {
    id: '3',
    title: 'Webcam Full HD 1080p com Microfone Integrado',
    image: 'https://via.placeholder.com/300x300?text=Webcam',
    price: 79.9,
    originalPrice: 249.9,
    discount: 68,
    badge: '✨ Novidade',
    shopeeUrl: 'https://shopee.com.br/produto-webcam-i.345678.901234',
  },
  {
    id: '4',
    title: 'Mouse Gamer RGB com 12000 DPI Ajustável',
    image: 'https://via.placeholder.com/300x300?text=Mouse+Gamer',
    price: 59.9,
    originalPrice: 189.9,
    discount: 68,
    badge: '🎮 Gaming',
    shopeeUrl: 'https://shopee.com.br/produto-mouse-gamer-i.456789.012345',
  },
  {
    id: '5',
    title: 'Teclado Mecânico RGB com Switches Azuis',
    image: 'https://via.placeholder.com/300x300?text=Teclado+Mecânico',
    price: 149.9,
    originalPrice: 499.9,
    discount: 70,
    badge: '🔥 Viral',
    shopeeUrl: 'https://shopee.com.br/produto-teclado-i.567890.123456',
  },
  {
    id: '6',
    title: 'Carregador Rápido 65W USB-C para Notebook',
    image: 'https://via.placeholder.com/300x300?text=Carregador',
    price: 49.9,
    originalPrice: 159.9,
    discount: 69,
    badge: '⭐ Bestseller',
    shopeeUrl: 'https://shopee.com.br/produto-carregador-i.678901.234567',
  },
];

function generateAffiliateLink(productUrl: string, affiliateId: string): string {
  const baseUrl = productUrl.split('?')[0];
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}af_id=${affiliateId}`;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const [wishlisted, setWishlisted] = useState<Set<string>>(new Set());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const affiliateId = '18337350889';

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      searchQuery === '';
    const matchesBadge = selectedBadge ? product.badge.includes(selectedBadge) : true;
    return matchesSearch && matchesBadge;
  });

  const toggleWishlist = (productId: string) => {
    const newWishlisted = new Set(wishlisted);
    if (newWishlisted.has(productId)) {
      newWishlisted.delete(productId);
    } else {
      newWishlisted.add(productId);
    }
    setWishlisted(newWishlisted);
  };

  const badges = ['🔥 Viral', '⭐ Bestseller', '✨ Novidade', '🎮 Gaming'];

  return (
    <div className="min-h-screen bg-[#1A252F] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1A252F] border-b border-[#3D4F63]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center font-bold text-[#1A252F]">
              CP
            </div>
            <h1 className="text-2xl font-bold text-[#D4AF37]">Caça Promoção</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-[#95A5A6] hover:text-[#D4AF37] transition">
              Sobre
            </a>
            <a href="#contato" className="text-[#95A5A6] hover:text-[#D4AF37] transition">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#D4AF37]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-[#2C3E50] border-t border-[#3D4F63] p-4 flex flex-col gap-4">
            <a href="#sobre" className="text-[#95A5A6] hover:text-[#D4AF37] transition">
              Sobre
            </a>
            <a href="#contato" className="text-[#95A5A6] hover:text-[#D4AF37] transition">
              Contato
            </a>
          </nav>
        )}
      </header>

      {/* Search Bar */}
      <div className="bg-[#2C3E50] border-b border-[#3D4F63]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-[#95A5A6]" size={20} />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A252F] border border-[#3D4F63] rounded-lg pl-10 pr-4 py-2 text-white placeholder-[#95A5A6] focus:outline-none focus:border-[#D4AF37] transition"
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#2C3E50] to-[#1A252F] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#D4AF37]">
            As Melhores Ofertas da Shopee
          </h2>
          <p className="text-[#95A5A6] text-lg mb-8 max-w-2xl mx-auto">
            Encontramos os produtos virais, os descontos reais e os achadinhos do momento
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#D4AF37] text-[#1A252F] px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
              Ver Ofertas Agora
            </button>
            <button className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-lg font-bold hover:bg-[#D4AF37] hover:text-[#1A252F] transition">
              Como Funciona
            </button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#2C3E50] border-b border-[#3D4F63] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedBadge(null)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedBadge === null
                  ? 'bg-[#D4AF37] text-[#1A252F]'
                  : 'bg-[#1A252F] text-[#95A5A6] border border-[#3D4F63] hover:border-[#D4AF37]'
              }`}
            >
              Todos
            </button>
            {badges.map((badge) => (
              <button
                key={badge}
                onClick={() => setSelectedBadge(badge)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedBadge === badge
                    ? 'bg-[#D4AF37] text-[#1A252F]'
                    : 'bg-[#1A252F] text-[#95A5A6] border border-[#3D4F63] hover:border-[#D4AF37]'
                }`}
              >
                {badge}
              </button>
            ))}
          </div>
          <p className="text-[#95A5A6] text-sm mt-4">
            {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#2C3E50] rounded-lg overflow-hidden border border-[#3D4F63] hover:border-[#D4AF37] transition group"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-[#1A252F] h-48">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#1A252F] px-3 py-1 rounded-lg font-bold text-sm">
                    -{product.discount}%
                  </div>
                  <div className="absolute top-3 left-3 bg-[#1A252F] bg-opacity-80 text-[#D4AF37] px-3 py-1 rounded-lg text-sm font-semibold">
                    {product.badge}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-bold text-white mb-3 line-clamp-2 text-sm">
                    {product.title}
                  </h3>

                  {/* Prices */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#D4AF37]">
                        R$ {product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-[#95A5A6] line-through">
                        R$ {product.originalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`flex-1 py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                        wishlisted.has(product.id)
                          ? 'bg-[#D4AF37] text-[#1A252F]'
                          : 'bg-[#1A252F] text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A252F]'
                      }`}
                    >
                      <Heart
                        size={18}
                        fill={wishlisted.has(product.id) ? 'currentColor' : 'none'}
                      />
                      {wishlisted.has(product.id) ? 'Salvo' : 'Salvar'}
                    </button>
                    <a
                      href={generateAffiliateLink(product.shopeeUrl, affiliateId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#D4AF37] text-[#1A252F] py-2 rounded-lg font-semibold hover:bg-opacity-90 transition text-center"
                    >
                      Ver na Shopee
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="bg-[#2C3E50] py-12 border-t border-[#3D4F63]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-8 text-center">
            Como Funciona o Caça Promoção
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1A252F] p-6 rounded-lg border border-[#3D4F63]">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Sobre Afiliados</h3>
              <p className="text-[#95A5A6] mb-4">
                O Caça Promoção participa do Programa de Afiliados da Shopee.
              </p>
              <p className="text-[#95A5A6] mb-4">
                Quando você clica em um de nossos links e realiza uma compra, recebemos uma pequena comissão.
              </p>
              <p className="text-[#D4AF37] font-semibold">
                ✓ Isso não muda o preço para você!
              </p>
            </div>
            <div className="bg-[#1A252F] p-6 rounded-lg border border-[#3D4F63]">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Transparência</h3>
              <p className="text-[#95A5A6] mb-4">
                Somos 100% transparentes sobre nossa participação no programa de afiliados.
              </p>
              <p className="text-[#95A5A6] mb-4">
                Nosso objetivo é ajudá-lo a encontrar as melhores promoções da Shopee.
              </p>
              <p className="text-[#D4AF37] font-semibold">
                ✓ Confiança acima de tudo!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A252F] border-t border-[#3D4F63] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#95A5A6] mb-2">
            Aviso: O Caça Promoção participa do Programa de Afiliados da Shopee
          </p>
          <p className="text-[#95A5A6] mb-4">
            © 2025 Caça Promoção. Todos os direitos reservados.
          </p>
          <p className="text-[#D4AF37]">
            Desenvolvido com ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
