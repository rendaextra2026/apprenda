# Documentação Técnica do Projeto: Lucro em Casa

**Autor:** Manus AI
**Data:** 12 de Dezembro de 2025
**Versão:** 1.0

## 1. Introdução

Este documento detalha o escopo, os objetivos e os requisitos técnicos e funcionais para o desenvolvimento do aplicativo móvel **"Lucro em Casa"**. O projeto será conduzido sob a perspectiva integrada de Gerente de Produto, UX Designer e Arquiteto de Software.

O objetivo principal do aplicativo é democratizar o acesso à renda extra online, fornecendo a usuários iniciantes todas as ferramentas e o conhecimento necessários para vender produtos sem estoque através de programas de afiliados (Shopee, Amazon, TikTok Shop) e dropshipping, com foco em divulgação orgânica.

## 2. Objetivo do Aplicativo

Criar um aplicativo móvel **simples e intuitivo** que permita a qualquer pessoa iniciar no mercado digital e gerar renda através de vendas sem estoque. O aplicativo deve fornecer uma solução **"tudo pronto"**, minimizando a necessidade de conhecimento prévio em marketing ou vendas por parte do usuário.

## 3. Escopo Detalhado do Projeto

O projeto "Lucro em Casa" engloba o desenvolvimento de um aplicativo móvel (Frontend) e sua infraestrutura de suporte (Backend e Banco de Dados), conforme detalhado nos requisitos funcionais.

**Papéis Envolvidos:**
*   **Gerente de Produto:** Define o *roadmap*, prioriza funcionalidades e garante que o produto atenda aos objetivos de negócio e às necessidades do usuário.
*   **UX Designer:** Cria fluxos de usuário otimizados, *wireframes* e *layouts* de alta e baixa fidelidade para garantir a usabilidade e a experiência intuitiva.
*   **Arquiteto de Software:** Define a pilha tecnológica, a estrutura do banco de dados, a arquitetura do sistema e os requisitos de infraestrutura.

**Entregáveis Solicitados:**
1.  Documento completo do escopo (Este documento).
2.  Lista de requisitos funcionais e não funcionais.
3.  Arquitetura do sistema (com diagrama).
4.  Fluxo de usuário (UX flowcharts).
5.  Telas em wireframe e layout (baixa e alta fidelidade).
6.  Lista de APIs necessárias.
7.  Modelagem de dados do banco.
8.  Cronograma de desenvolvimento.
9.  Estimativa de custos da infraestrutura.
10. Sugestões de melhorias e monetização.
11. Implementação do código (MVP) e configuração do GitHub.

## 4. Requisitos Funcionais (RF)

Os requisitos funcionais descrevem o comportamento que o sistema deve apresentar para atender às necessidades do usuário. Eles são agrupados pelas funcionalidades principais do aplicativo.

| ID | Funcionalidade Principal | Descrição Detalhada |
| :--- | :--- | :--- |
| **RF1** | **Catálogo de Produtos em Tendência** | O sistema deve exibir uma lista dinâmica de produtos virais e em alta. Deve incluir fotos, descrições automáticas, preços atualizados, comissão média, sugestões de *copy* para vendas, vídeos prontos para download, palavras-chave em alta e filtro por nicho (beleza, casa, eletrônicos, pets, automotivo, etc.). O link de afiliado deve ser personalizável pelo usuário. |
| **RF2** | **Calculadora de Lucro** | O sistema deve permitir que o usuário insira o preço do produto, comissão de afiliado, gasto com anúncio (opcional) e meta de vendas (dia/semana/mês). A calculadora deve retornar o lucro por venda, lucro diário, semanal, mensal, projeção anual e sugerir a quantidade de vendas necessárias para atingir a meta. |
| **RF3** | **Guia Passo a Passo Para Iniciantes** | O aplicativo deve conter um mini-curso com conteúdo sobre: criação de conta em programas de afiliados (ex: Shopee), geração de links, divulgação sem aparecer, busca por produtos vencedores, criação de vídeos virais, vendas no TikTok Shop, estratégias orgânicas, escalabilidade, guia anti-bloqueio e atendimento ao cliente. O conteúdo deve ser em formato de texto, vídeo, *checklist* e etapas gamificadas. |
| **RF4** | **Ferramenta de Divulgação** | O sistema deve fornecer vídeos para *repost*, *scripts* de vendas, *templates* de Reels e TikTok, *hashtags* automáticas, descrições prontas, *templates* de Stories, imagens prontas e anúncios prontos para Facebook e Marketplace. |
| **RF5** | **Lista Mensal de Produtos Virais** | O sistema deve enviar mensalmente uma lista atualizada de "Top 20 Produtos Virais do Mês", "Produtos em Alta na Shopee", "Produtos com Maior Comissão" e "Produtos Com Maior Demanda por Nicho" via *push notification* e dentro do app. |
| **RF6** | **Perfil do Usuário** | O sistema deve gerenciar o cadastro e login do usuário, permitir salvar produtos favoritos, armazenar o histórico de cálculos de lucro, gerenciar o link de afiliado personalizado e registrar o progresso no curso passo a passo. |
| **RF7** | **Fluxo de Uso Central** | O sistema deve guiar o usuário através do fluxo: Instalação/Login -> Escolha do Objetivo de Renda -> Recomendação de Produtos -> Seleção de 3 Produtos -> Geração Automática de Conteúdo (links, vídeos, copy, hashtags, imagens) -> Divulgação -> Registro de Progresso -> Acompanhamento de Resultados Estimados. |

## 5. Requisitos Não Funcionais (RNF)

Os requisitos não funcionais definem critérios de qualidade e restrições sobre o sistema.

| ID | Categoria | Descrição Detalhada |
| :--- | :--- | :--- |
| **RNF1** | **Usabilidade (UX/UI)** | O aplicativo deve ter um design responsivo, intuitivo e de fácil navegação, com opções de tema *dark* e *light*. As telas solicitadas incluem: Inicial, Login/Cadastro, Dashboard, Catálogo, Detalhes do Produto, Gerador de Link, Calculadora, Divulgação, Biblioteca de Vídeos, Guia Passo a Passo, Progresso e Configurações. |
| **RNF2** | **Desempenho** | O carregamento do catálogo de produtos e a execução dos cálculos de lucro devem ser rápidos, com tempo de resposta inferior a 2 segundos. |
| **RNF3** | **Escalabilidade** | A arquitetura de *backend* e o banco de dados devem ser escaláveis para suportar um grande volume de usuários e um crescimento contínuo do catálogo de produtos e da base de conteúdo. |
| **RNF4** | **Segurança** | O sistema deve garantir a segurança dos dados do usuário (cadastro, histórico) e proteger as credenciais de acesso ao painel administrativo. A comunicação entre *frontend* e *backend* deve ser criptografada (HTTPS/SSL). |
| **RNF5** | **Manutenibilidade** | O código deve ser modular, bem documentado e seguir padrões de codificação para facilitar futuras manutenções e a adição de novas funcionalidades. |
| **RNF6** | **Tecnologia (Frontend)** | O aplicativo deve ser desenvolvido em **React Native** ou **Flutter** para garantir compatibilidade com iOS e Android. |
| **RNF7** | **Tecnologia (Backend)** | O *backend* deve ser desenvolvido em **Node.js** ou **Python**. |
| **RNF8** | **Tecnologia (Banco de Dados)** | O banco de dados deve ser **Firebase**, **Supabase** ou **MongoDB**, escolhido com base na facilidade de escalabilidade e integração com a pilha tecnológica. |
| **RNF9** | **Integração** | O sistema deve ter uma API para atualização automática do catálogo de produtos, seja por meio de *scrapper* ou integração direta com APIs de afiliados (Shopee/Amazon). |
| **RNF10** | **Administração** | Deve haver um painel administrativo para que a equipe de conteúdo possa atualizar a lista de produtos, o conteúdo do guia passo a passo e as listas mensais de produtos virais. |

## 6. Lista de APIs Necessárias

Para a operação completa do aplicativo, serão necessárias as seguintes APIs e integrações:

| ID | API/Serviço | Propósito | Tipo de Integração |
| :--- | :--- | :--- | :--- |
| **API1** | **API de Afiliados da Shopee** | Acesso programático ao catálogo de produtos, preços, comissões e geração de links de afiliados. (Se disponível e viável para uso em massa). | Backend (Integração Direta) |
| **API2** | **API de Afiliados da Amazon** | Acesso programático ao catálogo de produtos, preços, comissões e geração de links de afiliados. (Se disponível e viável para uso em massa). | Backend (Integração Direta) |
| **API3** | **Serviço de Web Scraping** | Alternativa ou complemento às APIs de afiliados para coletar dados de produtos em tendência, preços e informações de comissão de plataformas como Shopee, Amazon e TikTok Shop. | Backend (Customizado) |
| **API4** | **Serviço de Notificações Push** | Envio de notificações para os usuários sobre novas listas de produtos virais (RF5) e atualizações de progresso. (Ex: Firebase Cloud Messaging - FCM). | Backend (Integração Direta) |
| **API5** | **Serviço de Armazenamento de Mídia** | Armazenamento e entrega de vídeos, imagens e outros conteúdos de divulgação (RF4). (Ex: AWS S3, Google Cloud Storage ou Firebase Storage). | Backend (Integração Direta) |
| **API6** | **Serviço de Autenticação** | Gerenciamento de cadastro, login e perfis de usuário (RF6). (Ex: Firebase Auth, Supabase Auth ou Custom Auth com JWT). | Backend (Integração Direta) |
| **API7** | **Serviço de Geração de Conteúdo (Opcional)** | Geração de sugestões de *copy* e palavras-chave em alta (RF1) e *scripts* de vendas (RF4) usando modelos de linguagem (LLMs). | Backend (Integração Direta) |

---
*Fim da Documentação Técnica - Parte 1*

## 7. Arquitetura do Sistema

A arquitetura proposta para o aplicativo "Lucro em Casa" é baseada em **Microsserviços** e utiliza uma abordagem **Serverless/Cloud-Native** para garantir alta escalabilidade, resiliência e facilidade de manutenção, conforme ilustrado no diagrama de arquitetura (Figura 1).

**Figura 1: Diagrama de Arquitetura do Sistema "Lucro em Casa"**
![Diagrama de Arquitetura do Sistema "Lucro em Casa"](/home/ubuntu/lucro_em_casa/arquitetura_sistema.png)

### 7.1. Componentes Principais

| Componente | Tecnologia Sugerida | Função |
| :--- | :--- | :--- |
| **Mobile App (Frontend)** | React Native ou Flutter | Interface do usuário, responsável pela experiência e interação. Comunica-se com o *backend* via API Gateway. |
| **API Gateway** | Express.js (Node.js) ou FastAPI (Python) | Ponto de entrada único para todas as requisições do *frontend*. Responsável por roteamento, autenticação básica e limitação de taxa. |
| **Product Service** | Node.js/Python | Microsserviço responsável por gerenciar o catálogo de produtos, sincronizar dados com APIs externas (Shopee, Amazon) e executar o *web scraping*. |
| **Content Service** | Node.js/Python | Microsserviço responsável por gerenciar o conteúdo do Guia Passo a Passo (RF3) e os materiais de divulgação (RF4). |
| **Notification Service** | Node.js/Python | Microsserviço responsável por gerenciar e enviar notificações *push* (RF5) através do FCM. |
| **Database (NoSQL)** | MongoDB, Firebase Realtime DB ou Firestore | Armazenamento principal de dados não relacionais, otimizado para leitura rápida e escalabilidade horizontal. |
| **Media Storage** | AWS S3, Google Cloud Storage ou Firebase Storage | Armazenamento de arquivos estáticos de grande volume, como vídeos e imagens de produtos e materiais de divulgação. |
| **Admin Panel** | React/Vue/Angular | Interface web para a equipe de conteúdo gerenciar e atualizar o catálogo de produtos, listas virais e módulos do curso. |

## 8. Modelagem de Dados (NoSQL Conceitual)

A modelagem de dados é projetada para um banco de dados NoSQL (document-based), como MongoDB ou Firestore, priorizando a desnormalização para otimizar as consultas de leitura, que serão as mais frequentes no aplicativo.

### 8.1. Coleções Principais

| Coleção | Descrição | Estrutura (Campos Chave) |
| :--- | :--- | :--- |
| **Users** | Armazena dados de cadastro e perfil do usuário. | `_id`, `email`, `name`, `password_hash`, `custom_affiliate_link_base`, `subscription_plan` (gratuito/premium), `favorites` (array de `product_id`), `course_progress` (mapa de `module_id` e `status`). |
| **Products** | Catálogo principal de produtos em tendência. | `_id`, `name`, `description`, `category` (nicho), `price`, `commission_rate`, `affiliate_link_base`, `image_urls` (array), `video_urls` (array), `copy_suggestions` (array), `keywords` (array), `is_viral` (boolean), `is_exclusive` (boolean). |
| **CourseModules** | Conteúdo do Guia Passo a Passo (RF3). | `_id`, `title`, `order`, `type` (texto/vídeo/checklist), `content_text`, `video_url`, `checklist_items` (array de objetos com `text` e `is_completed`). |
| **CalculationHistory** | Histórico de cálculos de lucro realizados pelo usuário. | `_id`, `user_id`, `timestamp`, `input_data` (preço, comissão, gasto, meta), `output_data` (lucro por venda, diário, mensal, etc.). |
| **ViralLists** | Listas mensais de produtos virais (RF5). | `_id`, `month_year`, `list_type` (Top 20, Maior Comissão, etc.), `product_ids` (array de referências a `Products`). |

### 8.2. Relações e Otimizações

*   **Embedded Data:** Dados frequentemente acessados em conjunto são *embedded* (incorporados). Por exemplo, o progresso do curso (`course_progress`) e os produtos favoritos (`favorites`) são incorporados no documento `Users` para evitar consultas de junção (JOINs) frequentes.
*   **Referência:** A coleção `ViralLists` usa referências (`product_ids`) para a coleção `Products`, pois a lista é uma agregação de produtos existentes e não um dado que muda com frequência.
*   **Otimização de Leitura:** A coleção `Products` é desnormalizada para incluir todos os dados necessários para a tela de detalhes do produto em um único documento, garantindo o carregamento rápido do catálogo (RNF2).

## 9. Fluxo de Usuário (UX Flowchart)

O fluxo de usuário central (RF7) é projetado para ser o mais direto e gamificado possível, levando o usuário do login à divulgação do produto com o mínimo de atrito.

**Figura 2: Fluxo de Usuário Central "Lucro em Casa"**
![Fluxo de Usuário Central "Lucro em Casa"](/home/ubuntu/lucro_em_casa/ux_flowchart.png)

## 10. Wireframes Conceituais (Baixa Fidelidade)

Os *wireframes* conceituais definem a estrutura e o layout das telas principais, focando na hierarquia da informação e na usabilidade.

### 10.1. Tela Inicial (Dashboard)

**Objetivo:** Apresentar o progresso do usuário, a meta de renda e o acesso rápido às funcionalidades principais.

| Elemento | Descrição |
| :--- | :--- |
| **Topo** | Logo "Lucro em Casa" e ícone de Notificações. |
| **Meta de Renda** | Destaque visual (ex: um gráfico de progresso) mostrando: "Meta Mensal: R$ 2.000" e "Progresso Atual: R$ 450 (22%)". Botão "Ajustar Meta". |
| **Acesso Rápido** | Cartões ou botões grandes para as 3 funcionalidades mais usadas: "Catálogo de Produtos", "Calculadora de Lucro" e "Guia Passo a Passo". |
| **Produtos em Destaque** | Carrossel com "Top 3 Produtos Recomendados para Você" (baseado na meta e nicho). |
| **Notícias/Dicas** | Seção com o último item da "Lista Mensal de Produtos Virais" (RF5) e uma dica rápida do Guia. |
| **Barra de Navegação Inferior** | Ícones para: Dashboard (Home), Catálogo, Guia, Perfil. |

### 10.2. Tela de Catálogo de Produtos

**Objetivo:** Permitir a busca, filtragem e visualização rápida dos produtos em tendência.

| Elemento | Descrição |
| :--- | :--- |
| **Topo** | Campo de Busca e Filtro (por Nicho, Comissão, Plataforma). |
| **Lista de Produtos** | Cartões de produto em formato de grade (2 colunas) ou lista. Cada cartão deve conter: Imagem, Nome do Produto, Preço, Comissão Estimada (em R$), e um botão "Ver Detalhes" ou "Salvar". |
| **Destaque** | Tags visuais como "Viral", "Alta Comissão", "Exclusivo Premium". |
| **Paginação/Scroll Infinito** | Para carregar a lista dinâmica de produtos. |

### 10.3. Tela de Detalhes do Produto

**Objetivo:** Fornecer todas as informações e ferramentas para que o usuário comece a divulgar o produto.

| Elemento | Descrição |
| :--- | :--- |
| **Topo** | Imagem/Carrossel de Imagens do Produto. Botão "Salvar nos Favoritos". |
| **Informações Essenciais** | Nome, Preço, Comissão Média (R$), Plataforma (Shopee/Amazon). |
| **Seção de Conteúdo Pronto (RF4)** | Abas ou seções colapsáveis para: **Vídeos Prontos** (com botão de Download), **Copy/Descrição** (com botão de Copiar), **Hashtags** (com botão de Copiar), **Imagens** (com botão de Download). |
| **Link de Afiliado** | Campo de texto não editável mostrando o link de afiliado personalizado do usuário para aquele produto. Botão "Copiar Link". |
| **Ações** | Botão de Ação Principal: "Calcular Lucro" (leva para a Calculadora pré-preenchida). |

### 10.4. Tela da Calculadora de Lucro

**Objetivo:** Simular o potencial de ganho com base em diferentes cenários.

| Elemento | Descrição |
| :--- | :--- |
| **Campos de Entrada** | Formulário com campos para: Preço do Produto, Comissão de Afiliado (%), Gasto com Anúncio (R$ - opcional), Meta de Vendas (Diária/Semanal/Mensal). |
| **Botão de Ação** | "Calcular Lucro". |
| **Resultados (Destaque)** | Exibição clara e em destaque dos resultados: Lucro por Venda, Lucro Diário, Lucro Mensal, Projeção Anual. |
| **Análise de Meta** | Texto informativo: "Para atingir sua meta de R$ X, você precisa de Y vendas por dia/semana/mês." |
| **Histórico** | Link ou seção para o "Histórico de Cálculos de Lucro" (RF6). |

## 11. Especificação de Design UI/UX (Alta Fidelidade Conceitual)

Para garantir uma experiência de usuário moderna, confiável e motivadora, o aplicativo "Lucro em Casa" seguirá uma especificação de design que equilibra profissionalismo e acessibilidade.

### 11.1. Princípios de Design

*   **Foco na Meta:** O design deve sempre destacar o progresso do usuário em relação à sua meta de renda.
*   **Simplicidade:** Interfaces limpas e com poucas distrações, facilitando a navegação para usuários iniciantes.
*   **Motivação:** Uso de elementos gamificados (progresso, *checklists*, recompensas visuais) para manter o engajamento.
*   **Confiança:** Uso de cores e tipografia que transmitam seriedade e profissionalismo, essenciais para um aplicativo financeiro/de negócios.

### 11.2. Paleta de Cores

A paleta de cores é baseada em um esquema de cores que sugere crescimento financeiro e confiança.

| Nome da Cor | Código Hex | Uso Principal |
| :--- | :--- | :--- |
| **Primária (Sucesso)** | `#00C853` (Verde Esmeralda) | Botões de Ação Principal (CTA), Indicadores de Lucro e Progresso, Elementos de Destaque. |
| **Secundária (Ação)** | `#FFC107` (Amarelo Âmbar) | Alertas, Notificações, Elementos de Gamificação (Recompensas), Botões Secundários. |
| **Fundo (Claro)** | `#FFFFFF` (Branco Puro) | Fundo principal no Tema Claro. |
| **Fundo (Escuro)** | `#121212` (Cinza Escuro) | Fundo principal no Tema Escuro (RNF1). |
| **Texto Principal** | `#212121` (Cinza Escuro) | Texto de corpo no Tema Claro. |
| **Texto Secundário** | `#BDBDBD` (Cinza Claro) | Texto de corpo no Tema Escuro. |
| **Neutro (Bordas)** | `#EEEEEE` (Cinza Muito Claro) | Bordas, divisores, fundos de cartões no Tema Claro. |

### 11.3. Tipografia

Será utilizada uma fonte *sans-serif* moderna e legível, otimizada para telas móveis.

*   **Família de Fonte:** Inter ou Roboto (Ambas são *sans-serif* limpas e amplamente disponíveis).
*   **Hierarquia:**
    *   **Título Principal (H1):** 28pt, Bold (Usado para o nome da tela).
    *   **Título de Seção (H2):** 20pt, Semi-Bold (Usado para títulos de cartões e seções).
    *   **Corpo do Texto:** 14pt, Regular (Para descrições e informações gerais).
    *   **Valores Financeiros:** 24pt, Bold, na cor Primária (Para destacar Lucro e Metas).

### 11.4. Componentes de Interface (Component Library)

O design será construído a partir de um conjunto de componentes reutilizáveis:

| Componente | Especificação |
| :--- | :--- |
| **Botões de Ação** | Cantos levemente arredondados (8px de raio). Cor Primária para o CTA principal. |
| **Cartões de Produto** | Sombras sutis para profundidade. Deve incluir a imagem do produto e informações essenciais (Nome, Comissão, Tag Viral). |
| **Indicador de Progresso** | Barra de progresso circular ou linear na cor Primária, destacando o percentual de atingimento da meta. |
| **Campos de Formulário** | Estilo *outline* ou *filled* com bordas arredondadas. Foco na usabilidade para entrada de dados numéricos na Calculadora. |
| **Ícones** | Utilização de ícones vetoriais (SVG) para garantir clareza em todas as resoluções. Ícones relacionados a dinheiro, vendas, curso e perfil. |
| **Modo Escuro (Dark Mode)** | Implementação obrigatória (RNF1), invertendo as cores de fundo e texto para reduzir a fadiga visual. |

## 12. Cronograma de Desenvolvimento (Estimativa de Alto Nível)

O cronograma a seguir é uma estimativa de alto nível para o desenvolvimento do **Mínimo Produto Viável (MVP)** do aplicativo "Lucro em Casa", assumindo uma equipe de desenvolvimento ágil e dedicada. O MVP incluirá as funcionalidades RF1 (Catálogo Básico), RF2 (Calculadora), RF3 (Guia Básico) e RF6 (Perfil/Login).

| Fase | Duração Estimada | Entregáveis Principais |
| :--- | :--- | :--- |
| **Fase 0: Planejamento e Design** | 2 Semanas | Documentação Técnica Completa, Arquitetura Finalizada, Wireframes de Alta Fidelidade, Design System (Component Library). |
| **Fase 1: Configuração e Backend Core** | 3 Semanas | Configuração do Ambiente (React Native/Flutter, Node.js/Python), Configuração do Banco de Dados, Implementação do Serviço de Autenticação (RF6), Implementação do *Product Service* (CRUD básico e sincronização inicial de dados). |
| **Fase 2: Frontend Core e Calculadora** | 3 Semanas | Desenvolvimento da Interface (Login, Dashboard, Perfil), Implementação da Calculadora de Lucro (RF2), Integração da API Gateway. |
| **Fase 3: Catálogo e Conteúdo** | 4 Semanas | Desenvolvimento da Tela de Catálogo (RF1), Implementação da Tela de Detalhes do Produto, Integração do Guia Passo a Passo (RF3 - Módulos de Texto/Checklist), Implementação da lógica de personalização de links. |
| **Fase 4: Ferramentas de Divulgação e Testes** | 3 Semanas | Implementação da Ferramenta de Divulgação (RF4 - Download de Mídia e Copy), Implementação do *Notification Service* (RF5), Testes de Integração e Testes de Usuário (UAT). |
| **Fase 5: Deploy e Lançamento** | 1 Semana | Configuração de *Deploy* (App Stores), Lançamento do MVP. |
| **Total Estimado para MVP** | **16 Semanas (4 Meses)** | |

## 13. Estimativa de Custos da Infraestrutura (Conceitual)

A estimativa de custos é baseada na escolha de uma arquitetura *serverless* (Firebase/Supabase) para o MVP, que oferece um modelo de precificação baseado em uso, sendo mais econômico no início.

| Serviço | Uso Estimado (MVP - 1.000 Usuários Ativos) | Custo Mensal Estimado |
| :--- | :--- | :--- |
| **Backend/Banco de Dados** | Firebase/Supabase (Plano Gratuito/Spark) | R$ 0 - R$ 150 |
| **Armazenamento de Mídia (S3/Storage)** | 50 GB de armazenamento, 100 GB de transferência | R$ 50 - R$ 100 |
| **Notificações Push (FCM)** | 100.000 mensagens/mês | R$ 0 (Geralmente gratuito) |
| **Domínio e SSL** | Domínio personalizado (anual) | R$ 15/mês |
| **Serviço de Web Scraping (API3)** | 5.000 requisições/mês (para sincronização) | R$ 50 - R$ 200 |
| **Total Mensal Estimado (MVP)** | | **R$ 115 - R$ 465** |

> **Nota:** Em um cenário de alto crescimento (100.000+ usuários ativos), o custo pode escalar para R$ 5.000 - R$ 15.000/mês, exigindo a migração para planos dedicados ou para uma infraestrutura mais granular (AWS/GCP/Azure).

## 14. Sugestões de Melhorias e Monetização

### 14.1. Modelos de Monetização (Conforme Escopo)

O aplicativo "Lucro em Casa" será monetizado através de um modelo **Freemium**, conforme solicitado:

| Modelo | Descrição |
| :--- | :--- |
| **Plano Gratuito (Freemium)** | Acesso limitado ao Catálogo de Produtos (ex: apenas 5 produtos por dia), Calculadora de Lucro básica, e os primeiros módulos do Guia Passo a Passo. |
| **Plano Premium (Assinatura Mensal)** | Desbloqueia: **Produtos Exclusivos** (com maior comissão ou menor concorrência), **Vídeos Exclusivos** (RF4), **Grupo VIP** (Comunidade e Suporte), **Renda Estimada Avançada** (análise preditiva na Calculadora), **Automação de Links** (geração em massa), **Chat de Suporte** prioritário. |
| **Venda de Packs Adicionais** | Venda avulsa de pacotes de conteúdo premium, como "Pack de 100 Vídeos Virais para TikTok" ou "Guia Avançado de Tráfego Pago". |

### 14.2. Sugestões de Melhorias (Próximas Fases)

| ID | Melhoria | Justificativa |
| :--- | :--- | :--- |
| **M1** | **Integração de Analytics Avançado** | Implementar ferramentas como Google Analytics/Mixpanel para rastrear o sucesso das divulgações dos usuários (cliques nos links, conversões) e otimizar a recomendação de produtos. |
| **M2** | **Geração de Conteúdo com IA** | Utilizar LLMs (API7) para gerar automaticamente *copies* de vendas mais persuasivas e personalizadas com base no nicho e no público-alvo do usuário. |
| **M3** | **Comunidade Integrada** | Criar um fórum ou *feed* dentro do app (além do Grupo VIP) para que os usuários gratuitos possam trocar experiências e dicas, aumentando a retenção. |
| **M4** | **Simulador de Tráfego Pago** | Adicionar uma funcionalidade que simule o ROI (Retorno sobre o Investimento) de campanhas de Facebook Ads/Google Ads, ajudando o usuário a decidir se vale a pena investir em anúncios. |
| **M5** | **Gamificação Completa** | Adicionar níveis, distintivos e rankings para recompensar o progresso no curso e o atingimento de metas de vendas, aumentando o engajamento e a retenção. |
