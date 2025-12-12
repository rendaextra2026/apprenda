/**
 * Serviço de lógica de negócio para a Calculadora de Lucro (RF2).
 * @param {object} data - Dados de entrada para o cálculo.
 * @param {number} data.price - Preço de venda do produto.
 * @param {number} data.commission_rate - Taxa de comissão (ex: 0.15 para 15%).
 * @param {number} [data.ad_spend=0] - Gasto com anúncio por venda (opcional).
 * @param {number} [data.sales_goal=0] - Meta de vendas mensal.
 * @returns {object} Resultados do cálculo.
 */
function calculateProfit({ price, commission_rate, ad_spend = 0, sales_goal = 0 }) {
    // 1. Lucro por Venda
    const commission_amount = price * commission_rate;
    const profit_per_sale = commission_amount - ad_spend;

    // 2. Projeções
    const sales_per_day = sales_goal / 30;
    const sales_per_week = sales_goal / 4;

    const daily_profit = profit_per_sale * sales_per_day;
    const weekly_profit = profit_per_sale * sales_per_week;
    const monthly_profit = profit_per_sale * sales_goal;
    const annual_projection = monthly_profit * 12;

    // 3. Sugestão de Vendas para Meta
    let sales_needed_for_goal = 0;
    if (sales_goal > 0 && profit_per_sale > 0) {
        // Se a meta for de R$ 2000 e o lucro por venda for R$ 10, precisa de 200 vendas.
        sales_needed_for_goal = Math.ceil(sales_goal / profit_per_sale);
    }

    return {
        profit_per_sale: profit_per_sale.toFixed(2),
        daily_profit: daily_profit.toFixed(2),
        weekly_profit: weekly_profit.toFixed(2),
        monthly_profit: monthly_profit.toFixed(2),
        annual_projection: annual_projection.toFixed(2),
        sales_needed_for_goal: sales_needed_for_goal
    };
}

module.exports = {
    calculateProfit
};
