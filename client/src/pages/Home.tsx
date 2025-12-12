import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { generateAffiliateLink, defaultAffiliateConfig } from "@/lib/affiliateLink";
import { sampleProducts } from "@/lib/sampleProducts";

/**
 * Home Page
 * Main landing page for Caça Promoção
 * Design: Luxury Minimalism with elegant dark background and gold accents
 */
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);

  // Filter products based on search and badge
  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        searchQuery === "";

      const matchesBadge = selectedBadge ? product.badge?.includes(selectedBadge) : true;

      return matchesSearch && matchesBadge;
    });
  }, [searchQuery, selectedBadge]);

  // Get unique badges for filter
  const uniqueBadges = useMemo(() => {
    const badges = new Set<string>();
    sampleProducts.forEach((product) => {
      if (product.badge) {
        badges.add(product.badge);
      }
    });
    return Array.from(badges);
  }, []);

  const handleWishlist = (productId: string) => {
    console.log(`Added product ${productId} to wishlist`);
    // TODO: Implement wishlist functionality
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Header onSearch={setSearchQuery} />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="flex-1">
        {/* Products Section */}
        <section id="produtos" className="container py-12">
          {/* Section Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Ofertas em Destaque
            </h2>
            <p className="text-muted-foreground">
              {filteredProducts.length} produtos encontrados
            </p>
          </div>

          {/* Filter Badges */}
          {uniqueBadges.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedBadge(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedBadge === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground border border-border hover:border-primary"
                }`}
              >
                Todos
              </button>
              {uniqueBadges.map((badge) => (
                <button
                  key={badge}
                  onClick={() => setSelectedBadge(badge)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedBadge === badge
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground border border-border hover:border-primary"
                  }`}
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
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  discount={product.discount}
                  badge={product.badge}
                  shopeeLink={generateAffiliateLink(product.shopeeUrl, defaultAffiliateConfig)}
                  onWishlist={handleWishlist}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Nenhum produto encontrado</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedBadge(null);
                }}
                className="luxury-button"
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </section>

        {/* About Section */}
        <section id="sobre" className="bg-card border-t border-border py-12">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Como o Caça Promoção Funciona
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  O <span className="text-primary font-semibold">Caça Promoção</span> nasceu
                  com uma missão simples: acabar com a busca interminável por ofertas. Sabemos
                  que a Shopee tem milhões de produtos, e encontrar aquele item viral ou o
                  desconto imperdível pode ser um desafio.
                </p>

                <p>
                  Nosso sistema automatizado monitora a Shopee 24 horas por dia, rastreando
                  produtos virais, maiores descontos e novidades que valem a pena.
                </p>

                <div className="mt-6 p-4 bg-background border border-border rounded-lg">
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">Transparência:</span> O
                    Caça Promoção participa do Programa de Afiliados da Shopee. Quando você
                    clica em um de nossos links e realiza uma compra, recebemos uma pequena
                    comissão. <span className="text-primary">Isso não muda o preço para você!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
