const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

// Rota para listar todos os produtos (Catálogo)
router.get('/', async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos', error: error.message });
  }
});

// Rota para obter detalhes de um produto específico
router.get('/:id', async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produto', error: error.message });
  }
});

// Rota para gerar o conteúdo de divulgação (RF7)
router.post('/:id/generate-content', async (req, res) => {
  try {
    // Lógica para gerar links, copy, hashtags, etc.
    const content = await productService.generateContent(req.params.id, req.body.user_id);
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao gerar conteúdo', error: error.message });
  }
});

module.exports = router;
