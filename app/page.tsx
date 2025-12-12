'use client';

import { useState, useEffect } from 'react';
import { Search, Heart, ShoppingCart, Menu, X, Star, Filter } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  currentPrice: number;
  originalPrice: number;
  discountPercentage: number;
  imageUrl: string;
  affiliateUrl: string;
  rating: number;
  soldCount: number;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 10000 });
  const [sortBy, setSortBy] = useState('recente');
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Carregar categorias
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await fetch('/api/categorias');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error loading categories:', error);
        // Usar categorias de exemplo se API falhar
        setCategories([
          { id: 1, name: 'Eletrônicos', slug: 'eletronicos', icon: '📱' },
          { id: 2, name: 'Roupas', slug: 'roupas', icon: '👕' },
          { id: 3, name: 'Casa', slug: 'casa', icon: '🏠' },
          { id: 4, name: 'Beleza', slug: 'beleza', icon: '💄' },
        ]);
      }
    };
    loadCategories();
  }, []);

  // Carregar produtos
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        let url = '/api/produtos?';
        if (selectedCategory) url += `categoria=${selectedCategory}&`;
        if (searchQuery) url += `busca=${encodeURIComponent(searchQuery)}&`;
        if (priceFilter.min > 0) url += `precoMin=${priceFilter.min}&`;
        if (priceFilter.max < 10000) url += `precoMax=${priceFilter.max}&`;
        url += `ordenar=${sortBy}`;

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(loadProducts, 500);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery, priceFilter, sortBy]);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A252F] via-[#1A252F] to-[#0F1620]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1A252F] border-b border-[#D4AF37]/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-lg flex items-center justify-center font-bold text-[#1A252F]">
                CP
              </div>
              <h1 className="text-2xl font-bold text-[#D4AF37]">Caça Promoção</h1>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#D4AF37]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Barra de Busca */}
          <div className="relative">
            <Search className="absolute left-3 top-3 text-[#D4AF37]/60" size={20} />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#2A3A4F] border border-[#D4AF37]/30 rounded-lg text-white placeholder-[#D4AF37]/50 focus:outline-none focus:border-[#D4AF37] transition"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8860B]/10 border-b border-[#D4AF37]/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
              As Melhores Ofertas da Shopee
            </h2>
            <p className="text-[#D4AF37]/80 text-lg mb-8">
              Encontramos os produtos virais, os descontos reais e os achadinhos do momento
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-6 py-2 bg-[#D4AF37] text-[#1A252F] rounded-lg font-bold hover:bg-[#E8C547] transition">
                Ver Ofertas Agora
              </button>
              <button className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-lg font-bold hover:bg-[#D4AF37]/10 transition">
                Como Funciona
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar - Categorias e Filtros */}
          <aside className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block md:col-span-1`}>
            <div className="bg-[#2A3A4F] rounded-lg p-6 border border-[#D4AF37]/20 sticky top-24">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-4 flex items-center gap-2">
                <Filter size={20} />
                Categorias
              </h3>

              <div className="space-y-2 mb-8">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    selectedCategory === ''
                      ? 'bg-[#D4AF37] text-[#1A252F] font-bold'
                      : 'text-[#D4AF37] hover:bg-[#D4AF37]/10'
                  }`}
                >
                  Todos
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
                      selectedCategory === cat.slug
                        ? 'bg-[#D4AF37] text-[#1A252F] font-bold'
                        : 'text-[#D4AF37] hover:bg-[#D4AF37]/10'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Filtro de Preço */}
              <h4 className="text-lg font-bold text-[#D4AF37] mb-4">Preço</h4>
              <div className="space-y-4">
                <div>
                  <label className="text-[#D4AF37]/80 text-sm">Mínimo: R$ {priceFilter.min}</label>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceFilter.min}
                    onChange={(e) => setPriceFilter({ ...priceFilter, min: parseInt(e.target.value) })}
                    className="w-full accent-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="text-[#D4AF37]/80 text-sm">Máximo: R$ {priceFilter.max}</label>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceFilter.max}
                    onChange={(e) => setPriceFilter({ ...priceFilter, max: parseInt(e.target.value) })}
                    className="w-full accent-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Ordenação */}
              <h4 className="text-lg font-bold text-[#D4AF37] mt-8 mb-4">Ordenar por</h4>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 bg-[#1A252F] border border-[#D4AF37]/30 rounded-lg text-[#D4AF37] focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="recente">Mais Recentes</option>
                <option value="preco-asc">Menor Preço</option>
                <option value="preco-desc">Maior Preço</option>
                <option value="desconto">Maior Desconto</option>
                <option value="avaliacao">Melhor Avaliação</option>
              </select>
            </div>
          </aside>

          {/* Grid de Produtos */}
          <main className="md:col-span-3">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
                {selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}` : 'Todos os Produtos'}
              </h3>
              <p className="text-[#D4AF37]/60">{products.length} produtos encontrados</p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-[#2A3A4F] rounded-lg h-80 animate-pulse border border-[#D4AF37]/20" />
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                  <div key={product.id} className="bg-[#2A3A4F] rounded-lg overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition group">
                    {/* Imagem */}
                    <div className="relative h-48 bg-[#1A252F] overflow-hidden">
                      {product.imageUrl ? (
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#D4AF37]/30">
                          <ShoppingCart size={48} />
                        </div>
                      )}

                      {/* Badge de Desconto */}
                      {product.discountPercentage > 0 && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg font-bold text-sm">
                          -{product.discountPercentage}%
                        </div>
                      )}

                      {/* Botão Wishlist */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-2 left-2 p-2 bg-[#1A252F]/80 rounded-lg hover:bg-[#D4AF37] transition"
                      >
                        <Heart
                          size={20}
                          className={wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-[#D4AF37]'}
                        />
                      </button>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-4">
                      <h4 className="text-sm font-semibold text-[#D4AF37] mb-2 line-clamp-2 min-h-10">
                        {product.name}
                      </h4>

                      {/* Avaliação */}
                      {product.rating > 0 && (
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={i < Math.round(product.rating) ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-[#D4AF37]/30'}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-[#D4AF37]/60">({product.rating})</span>
                        </div>
                      )}

                      {/* Preços */}
                      <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-[#D4AF37]">
                            {formatPrice(product.currentPrice)}
                          </span>
                          {product.originalPrice > product.currentPrice && (
                            <span className="text-sm text-[#D4AF37]/60 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                        {product.soldCount > 0 && (
                          <p className="text-xs text-[#D4AF37]/60 mt-1">
                            {product.soldCount.toLocaleString()} vendidos
                          </p>
                        )}
                      </div>

                      {/* Botão CTA */}
                      <a
                        href={product.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block text-center px-4 py-2 bg-[#D4AF37] text-[#1A252F] rounded-lg font-bold hover:bg-[#E8C547] transition"
                      >
                        Ver na Shopee
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-[#D4AF37]/60 text-lg">Nenhum produto encontrado</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Seção de Informações */}
      <section className="bg-[#2A3A4F] border-t border-[#D4AF37]/20 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Sobre Afiliados</h3>
              <p className="text-[#D4AF37]/80">
                O Caça Promoção participa do Programa de Afiliados da Shopee. Quando você clica em um de nossos links e realiza uma compra, recebemos uma pequena comissão. ✓ Isso não muda o preço para você!
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Transparência</h3>
              <p className="text-[#D4AF37]/80">
                Somos 100% transparentes sobre nossa participação no programa de afiliados. Nosso objetivo é ajudá-lo a encontrar as melhores promoções da Shopee. ✓ Confiança acima de tudo!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A252F] border-t border-[#D4AF37]/20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-[#D4AF37]/60">
          <p>© 2025 Caça Promoção. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">
            Somos afiliados da Shopee | ID: 18337350889
          </p>
        </div>
      </footer>
    </div>
  );
}
