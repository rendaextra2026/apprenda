/**
 * Hero Component
 * Luxury minimalist hero section with background image and headline
 * Design: Dark background with gold accents and elegant typography
 */
export default function Hero() {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className="mb-4 inline-block">
            <span className="text-primary text-sm font-medium">✨ Achados Premium</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            As Melhores Ofertas da Shopee
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Encontramos os produtos virais, os descontos reais e os achadinhos do momento.
            Tudo atualizado a cada hora, direto para você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#produtos"
              className="luxury-button inline-block text-center"
            >
              Ver Ofertas Agora
            </a>
            <a
              href="#sobre"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-center"
            >
              Como Funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
