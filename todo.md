# Caça Promoção - TODO List

## Fase 1: Backend e Banco de Dados
- [x] Adicionar dependências (Express, Drizzle, PostgreSQL, axios, cheerio)
- [x] Criar estrutura de pastas (api, lib, db, scripts)
- [x] Configurar Drizzle ORM com PostgreSQL
- [x] Criar schema de banco de dados (produtos, categorias, vídeos)
- [x] Criar migrations (drizzle.config.ts)

## Fase 2: Scraper e Integração
- [x] Implementar scraper de produtos Shopee (estrutura pronta)
- [ ] Implementar busca de vídeos
- [x] Criar gerador de links de afiliação
- [ ] Implementar cron job para atualização automática
- [x] Criar seed de categorias

## Fase 3: APIs REST
- [x] GET /api/produtos - listar produtos com filtros
- [x] GET /api/categorias - listar categorias
- [x] GET /api/produtos/:id - detalhes do produto
- [x] GET /api/busca - buscar produtos
- [x] GET /api/trending - produtos em alta
- [ ] POST /api/wishlist - salvar favoritos (opcional)

## Fase 4: Frontend Redesign
- [x] Criar layout com sidebar de categorias
- [ ] Implementar seção de vídeos em destaque
- [x] Criar grid de produtos responsivo
- [x] Implementar filtros avançados (preço, desconto, avaliação)
- [x] Implementar busca em tempo real
- [x] Melhorar hero section
- [ ] Adicionar seção de trending
- [ ] Adicionar newsletter/CTA

## Fase 5: Otimizações e Deploy
- [ ] Testes de funcionalidade
- [ ] Otimização de performance
- [ ] SEO para categorias
- [ ] Teste em mobile/tablet
- [ ] Deploy no Render
- [ ] Verificar links de afiliação

## Fase 6: Melhorias Futuras
- [ ] Adicionar autenticação de usuários
- [ ] Sistema de avaliações
- [ ] Notificações de promoções
- [ ] Analytics
- [ ] Admin panel para gerenciar produtos
