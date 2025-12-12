const express = require('express');
const router = express.Router();
const calculatorService = require('../services/calculatorService');

// Rota para calcular o lucro
router.post('/calculate', (req, res) => {
  try {
    const { price, commission_rate, ad_spend, sales_goal } = req.body;
    
    if (!price || !commission_rate) {
        return res.status(400).json({ message: 'Preço e taxa de comissão são obrigatórios.' });
    }

    const result = calculatorService.calculateProfit({ price, commission_rate, ad_spend, sales_goal });
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao calcular lucro', error: error.message });
  }
});

module.exports = router;
