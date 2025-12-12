import { useState, useMemo } from "react";
import { Heart, Search } from "lucide-react";

// Sample products data
const sampleProducts = [
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
];

// Affiliate link generator
function generateAffiliateLink(productUrl: string, affiliateId: string): string {
  const linkBase = "https://shope.ee/YOUR_LINK_BASE";
  const encodedUrl = encodeURIComponent(productUrl);
  return `${linkBase}?af_id=${affiliateId}&redirect=${encodedUrl}`;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const [wishlisted, setWishlisted] = useState<Set<string>>(new Set());

  const affiliateId = "YOUR_AFFILIATE_ID";
  // TODO: Replace with your actual affiliate ID from Shopee Afiliados

  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        searchQuery === "";
      const matchesBadge = selectedBadge ? product.badge?.includes(selectedBadge) : true;
      return matchesSearch && matchesBadge;
    });
  }, [searchQuery, selectedBadge]);

  const uniqueBadges = useMemo(() => {
    const badges = new Set<string>();
    sampleProducts.forEach((product) => {
      if (product.badge) {
        badges.add(product.badge);
      }
    });
    return Array.from(badges);
  }, []);

  const toggleWishlist = (id: string) => {
    const newWishlisted = new Set(wishlisted);
    if (newWishlisted.has(id)) {
      newWishlisted.delete(id);
    } else {
      newWishlisted.add(id);
    }
    setWishlisted(newWishlisted);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1A252F", color: "#FFFFFF" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ borderColor: "#3D4F63", backgroundColor: "#1A252F" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#D4AF37" }}
              >
                <span className="text-lg">🔍</span>
              </div>
              <h1 className="text-xl font-bold hidden sm:block">
                Caça <span style={{ color: "#D4AF37" }}>Promoção</span>
              </h1>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex-1 max-w-md"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border"
                  style={{
                    backgroundColor: "#2C3E50",
                    borderColor: "#3D4F63",
                    color: "#FFFFFF",
                  }}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: "#95A5A6" }}
                >
                  <Search size={20} />
                </button>
              </div>
            </form>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#sobre" className="text-sm hover:text-amber-300">
                Sobre
              </a>
              <a href="#contato" className="text-sm hover:text-amber-300">
                Contato
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="py-16 md:py-24"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(26, 37, 47, 0.6)" }}
        />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="mb-4 inline-block px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(212, 175, 55, 0.2)", color: "#D4AF37" }}>
              ✨ Achados Premium
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              As Melhores Ofertas da Shopee
            </h1>
            <p className="text-lg mb-8 max-w-xl" style={{ color: "#95A5A6" }}>
              Encontramos os produtos virais, os descontos reais e os achadinhos do momento.
              Tudo atualizado a cada hora, direto para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#produtos"
                className="px-6 py-3 rounded-lg font-medium text-center"
                style={{ backgroundColor: "#D4AF37", color: "#1A252F" }}
              >
                Ver Ofertas Agora
              </a>
              <a
                href="#sobre"
                className="px-6 py-3 border rounded-lg font-medium text-center"
                style={{ borderColor: "#D4AF37", color: "#D4AF37" }}
              >
                Como Funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Ofertas em Destaque</h2>
            <p style={{ color: "#95A5A6" }}>{filteredProducts.length} produtos encontrados</p>
          </div>

          {/* Filters */}
          {uniqueBadges.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedBadge(null)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: selectedBadge === null ? "#D4AF37" : "#2C3E50",
                  color: selectedBadge === null ? "#1A252F" : "#FFFFFF",
                  borderColor: selectedBadge === null ? "#D4AF37" : "#3D4F63",
                  border: "1px solid",
                }}
              >
                Todos
              </button>
              {uniqueBadges.map((badge) => (
                <button
                  key={badge}
                  onClick={() => setSelectedBadge(badge)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                  style={{
                    backgroundColor: selectedBadge === badge ? "#D4AF37" : "#2C3E50",
                    color: selectedBadge === badge ? "#1A252F" : "#FFFFFF",
                    borderColor: selectedBadge === badge ? "#D4AF37" : "#3D4F63",
                    border: "1px solid",
                  }}
                >
                  {badge}
                </button>
              ))}
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg border overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                  style={{
                    backgroundColor: "#2C3E50",
                    borderColor: "#3D4F63",
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-64 bg-gray-700">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />

                    {/* Badges */}
                    {product.badge && (
                      <div
                        className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: "#D4AF37", color: "#1A252F" }}
                      >
                        {product.badge}
                      </div>
                    )}

                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold"
                      style={{ backgroundColor: "#E74C3C", color: "#FFFFFF" }}
                    >
                      -{product.discount}%
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute bottom-4 right-4 p-2 rounded-full shadow-lg transition-all"
                      style={{
                        backgroundColor: "#2C3E50",
                        color: wishlisted.has(product.id) ? "#D4AF37" : "#FFFFFF",
                      }}
                    >
                      <Heart
                        size={20}
                        fill={wishlisted.has(product.id) ? "currentColor" : "none"}
                      />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <h3 className="text-sm font-medium line-clamp-2 hover:text-amber-300 transition-colors">
                      {product.title}
                    </h3>

                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold" style={{ color: "#D4AF37" }}>
                          R$ {product.price.toFixed(2)}
                        </span>
                        <span
                          className="text-sm line-through"
                          style={{ color: "#95A5A6" }}
                        >
                          R$ {product.originalPrice.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs" style={{ color: "#95A5A6" }}>
                        Você economiza: R$ {(product.originalPrice - product.price).toFixed(2)}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={generateAffiliateLink(product.shopeeUrl, affiliateId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                      style={{ backgroundColor: "#D4AF37", color: "#1A252F" }}
                    >
                      Ver na Shopee
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p style={{ color: "#95A5A6" }} className="mb-4">
                Nenhum produto encontrado
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedBadge(null);
                }}
                className="px-6 py-3 rounded-lg font-medium"
                style={{ backgroundColor: "#D4AF37", color: "#1A252F" }}
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="py-12 border-t"
        style={{ backgroundColor: "#2C3E50", borderColor: "#3D4F63" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Como o Caça Promoção Funciona</h2>

            <div className="space-y-4" style={{ color: "#95A5A6" }}>
              <p>
                O <span className="font-semibold" style={{ color: "#D4AF37" }}>Caça Promoção</span> nasceu
                com uma missão simples: acabar com a busca interminável por ofertas. Sabemos
                que a Shopee tem milhões de produtos, e encontrar aquele item viral ou o
                desconto imperdível pode ser um desafio.
              </p>

              <p>
                Nosso sistema automatizado monitora a Shopee 24 horas por dia, rastreando
                produtos virais, maiores descontos e novidades que valem a pena.
              </p>

              <div
                className="mt-6 p-4 rounded-lg border"
                style={{ backgroundColor: "#1A252F", borderColor: "#3D4F63" }}
              >
                <p className="text-sm">
                  <span className="font-semibold">Transparência:</span> O
                  Caça Promoção participa do Programa de Afiliados da Shopee. Quando você
                  clica em um de nossos links e realiza uma compra, recebemos uma pequena
                  comissão. <span style={{ color: "#D4AF37" }}>Isso não muda o preço para você!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t py-12"
        style={{ backgroundColor: "#2C3E50", borderColor: "#3D4F63" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Affiliate Disclosure */}
          <div
            className="rounded-lg p-4 mb-8 border"
            style={{ backgroundColor: "#1A252F", borderColor: "#3D4F63" }}
          >
            <p className="text-xs" style={{ color: "#95A5A6" }}>
              <span className="font-semibold" style={{ color: "#FFFFFF" }}>Aviso de Afiliado:</span> O Caça
              Promoção é um participante do Programa de Afiliados da Shopee. Ao clicar em
              nossos links de produtos e realizar uma compra, podemos receber uma comissão.
              O preço final do produto para você não é alterado.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs" style={{ color: "#95A5A6" }}>
            <p>
              © {new Date().getFullYear()} Caça Promoção. Todos os direitos reservados. | Desenvolvido
              com ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
