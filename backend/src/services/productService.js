// Simulação de um modelo de Produto (Schema Mongoose)
const Product = {
    // Estrutura simplificada para o MVP
    _id: String,
    name: String,
    description: String,
    price: Number,
    commission_rate: Number, // Ex: 0.15 para 15%
    affiliate_link_base: String,
    category: String,
    is_viral: Boolean
};

// Dados Mock para o MVP
const mockProducts = [
    { _id: 'p1', name: 'Mini Projetor Portátil', description: 'Ideal para filmes e apresentações.', price: 150.00, commission_rate: 0.10, affiliate_link_base: 'http://shopee.com/link/proj', category: 'Eletrônicos', is_viral: true },
    { _id: 'p2', name: 'Garrafa Térmica Inteligente', description: 'Mantém a temperatura e mede a hidratação.', price: 80.00, commission_rate: 0.15, affiliate_link_base: 'http://amazon.com/link/garrafa', category: 'Casa', is_viral: true },
    { _id: 'p3', name: 'Coleira Anti-Latido Ultrassônica', description: 'Treinamento gentil para pets.', price: 65.00, commission_rate: 0.20, affiliate_link_base: 'http://tiktok.com/link/coleira', category: 'Pets', is_viral: false },
];

/**
 * Simula a busca de todos os produtos no banco de dados.
 * Em produção, faria uma query Mongoose.
 */
async function getAllProducts() {
    // Simula um atraso de rede
    return new Promise(resolve => setTimeout(() => resolve(mockProducts), 50));
}

/**
 * Simula a busca de um produto por ID.
 */
async function getProductById(id) {
    return new Promise(resolve => setTimeout(() => resolve(mockProducts.find(p => p._id === id)), 50));
}

/**
 * Simula a geração de conteúdo de divulgação.
 */
async function generateContent(productId, userId) {
    const product = await getProductById(productId);
    if (!product) {
        throw new Error('Produto não encontrado para geração de conteúdo');
    }

    // Simulação de personalização do link de afiliado
    const personalizedLink = `${product.affiliate_link_base}?ref=${userId}`;

    return {
        personalized_link: personalizedLink,
        copy: `🔥 NOVO PRODUTO VIRAL! ${product.name} por apenas R$ ${product.price.toFixed(2)}. Clique no link para comprar!`,
        hashtags: ['#rendaextra', '#afiliados', `#${product.category.toLowerCase()}`, '#viral'],
        video_url: 'http://storage.com/video_mock.mp4' // URL mock
    };
}

module.exports = {
    getAllProducts,
    getProductById,
    generateContent
};
