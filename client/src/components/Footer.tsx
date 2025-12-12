/**
 * Footer Component
 * Luxury minimalist footer with affiliate disclosure and links
 * Design: Dark background with gold accents
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Caça <span className="text-primary">Promoção</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Encontramos os melhores achados e descontos da Shopee para você economizar
              tempo e dinheiro.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#privacidade"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href="#tiktok"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                TikTok
              </a>
              <a
                href="#twitter"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Affiliate Disclosure */}
        <div className="bg-background/50 border border-border rounded-lg p-4 mb-8">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Aviso de Afiliado:</span> O Caça
            Promoção é um participante do Programa de Afiliados da Shopee. Ao clicar em
            nossos links de produtos e realizar uma compra, podemos receber uma comissão.
            O preço final do produto para você não é alterado.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-muted-foreground">
          <p>
            © {currentYear} Caça Promoção. Todos os direitos reservados. | Desenvolvido
            com ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
