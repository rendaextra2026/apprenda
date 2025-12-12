# Lucro em Casa - Aplicativo de Renda Extra

Este repositório contém o código-fonte e a documentação do aplicativo móvel **"Lucro em Casa"**, um projeto focado em ajudar iniciantes a ganhar dinheiro na internet através da venda de produtos sem estoque, utilizando programas de afiliados (Shopee, Amazon, TikTok Shop) e dropshipping.

## 🚀 Objetivo do Projeto

O objetivo principal é fornecer uma solução "tudo pronto" que inclua:
1.  **Catálogo de Produtos em Tendência:** Com links de afiliados e conteúdo de divulgação pronto.
2.  **Calculadora de Lucro:** Para simular ganhos e metas.
3.  **Guia Passo a Passo:** Mini-curso para iniciantes.
4.  **Ferramenta de Divulgação:** Vídeos, copies e hashtags prontas.

## 🏗 Arquitetura do Sistema (MVP)

O projeto está dividido em duas partes principais:

### 1. Frontend (Mobile App)
*   **Tecnologia:** React Native (Conceitual)
*   **Localização:** `apprenda/frontend/`
*   **Função:** Interface do usuário, navegação e consumo das APIs do Backend.

### 2. Backend (API)
*   **Tecnologia:** Node.js com Express (Conceitual)
*   **Localização:** `apprenda/backend/`
*   **Função:** Gerenciamento de usuários, catálogo de produtos, lógica da calculadora, sincronização de dados e serviços de conteúdo.

## 🛠 Estrutura de Diretórios

```
apprenda/
├── backend/
│   ├── src/
│   │   ├── routes/          # Definição das rotas da API
│   │   ├── services/        # Lógica de negócio (produtos, usuários, cálculos)
│   │   └── server.js        # Ponto de entrada do servidor
│   └── package.json         # Dependências do Backend
├── frontend/
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis (botões, cards)
│   │   ├── screens/         # Telas principais (Login, Dashboard, Catalog)
│   │   └── App.js           # Ponto de entrada do App
│   └── package.json         # Dependências do Frontend
└── README.md
```

## 📄 Documentação Completa

A documentação completa do projeto, incluindo requisitos funcionais e não funcionais, arquitetura detalhada, modelagem de dados e cronograma, está disponível no arquivo `documentacao_tecnica_v1.md` no diretório raiz do projeto.
