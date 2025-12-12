# 🎯 Caça Promoção - Webapp de Promoções da Shopee

**Caça Promoção** é um webapp elegante e premium que ajuda você a encontrar as melhores promoções da Shopee com links de afiliado automatizados.

## 🚀 Características

- ✅ **Busca de produtos em tempo real** - Filtre produtos por nome instantaneamente
- ✅ **Filtros por categoria** - Viral, Bestseller, Novidade, Gaming
- ✅ **Wishlist (Favoritos)** - Salve seus produtos preferidos
- ✅ **Links de afiliado automatizados** - Ganhe comissões com cada compra
- ✅ **Design elegante e premium** - Luxury Minimalism com Dark + Gold
- ✅ **Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- ✅ **Sem necessidade de login** - Acesso imediato

## 🎨 Design

### Paleta de Cores
- **Fundo Principal:** #1A252F (Dark Charcoal)
- **Texto Principal:** #FFFFFF (White)
- **Destaque/Botões:** #D4AF37 (Gold)
- **Secundário:** #95A5A6 (Gray)
- **Bordas:** #3D4F63 (Dark Gray)
- **Cards:** #2C3E50 (Dark Blue-Gray)

## 🔧 Tecnologia

- **Frontend:** Next.js 16 + React 19 + TypeScript
- **Estilo:** Tailwind CSS 4
- **Ícones:** Lucide React
- **Hospedagem:** Render

## 📦 Estrutura do Projeto

```
apprenda/
├── app/
│   ├── page.tsx           # Página principal com toda a lógica
│   ├── layout.tsx         # Layout base
│   ├── globals.css        # Estilos globais
│   └── favicon.ico
├── public/                # Arquivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🔐 ID de Afiliado

- **ID:** `18337350889`
- **Programa:** Shopee Afiliados
- **Status:** ✅ Aprovado

## 🔗 Lógica de Afiliação

A função `generateAffiliateLink()` adiciona automaticamente o parâmetro `af_id` aos URLs da Shopee:

```typescript
function generateAffiliateLink(productUrl: string, affiliateId: string): string {
  const baseUrl = productUrl.split('?')[0];
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}af_id=${affiliateId}`;
}
```

**Exemplo:**
- URL Original: `https://shopee.com.br/produto-fone-bluetooth-i.123456.789012`
- URL com Afiliado: `https://shopee.com.br/produto-fone-bluetooth-i.123456.789012?af_id=18337350889`

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+
- pnpm (ou npm/yarn)

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/rendaextra2026/apprenda.git
cd apprenda

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

O aplicativo estará disponível em `http://localhost:3000`

## 📝 Variáveis de Ambiente

Não há variáveis de ambiente obrigatórias. O ID de afiliado está hardcoded no código para simplicidade.

## 🏗️ Build para Produção

```bash
pnpm build
pnpm start
```

## 🌐 Deploy

O projeto está configurado para deploy automático no Render:
- **URL ao Vivo:** https://cacapromo.onrender.com
- **Build Command:** `pnpm build`
- **Start Command:** `pnpm start`

## 📄 Transparência sobre Afiliados

O Caça Promoção participa do Programa de Afiliados da Shopee. Quando você clica em um de nossos links e realiza uma compra, recebemos uma pequena comissão. **Isso não muda o preço para você!**

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir issues ou pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

## 💬 Contato

Para dúvidas ou sugestões, entre em contato através do repositório GitHub.

---

**Desenvolvido com ❤️**
