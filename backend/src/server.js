const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com o Banco de Dados (MongoDB/Mongoose)
// **NOTA:** Em um ambiente real, as credenciais devem ser configuradas via variáveis de ambiente.
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/lucroemcasa';

mongoose.connect(DB_URI)
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Rotas
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const calculatorRoutes = require('./routes/calculatorRoutes');

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/calculator', calculatorRoutes);

// Rota de Teste
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API Lucro em Casa está online!' });
});

// Inicialização do Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
