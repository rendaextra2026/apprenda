/**
 * Affiliate Link Generator
 * Converts Shopee product URLs to affiliate links with tracking ID
 * 
 * Design: Luxury Minimalism - Focus on clean, simple logic
 * 
 * How it works:
 * 1. Takes a Shopee product URL
 * 2. Encodes it properly
 * 3. Appends affiliate ID and link base
 * 4. Returns the final affiliate link
 */

interface AffiliateConfig {
  affiliateId: string;
  linkBase: string;
}

/**
 * Generate an affiliate link for a Shopee product
 * @param productUrl - The original Shopee product URL
 * @param config - Affiliate configuration (ID and link base)
 * @returns The affiliate link with tracking
 */
export function generateAffiliateLink(
  productUrl: string,
  config: AffiliateConfig
): string {
  // Validate inputs
  if (!productUrl || !config.affiliateId || !config.linkBase) {
    console.warn("Invalid affiliate configuration or product URL");
    return productUrl;
  }

  try {
    // Encode the product URL for use as a parameter
    const encodedUrl = encodeURIComponent(productUrl);

    // Build the affiliate link
    const affiliateLink = `${config.linkBase}?af_id=${config.affiliateId}&redirect=${encodedUrl}`;

    return affiliateLink;
  } catch (error) {
    console.error("Error generating affiliate link:", error);
    return productUrl;
  }
}

/**
 * Extract product ID from Shopee URL
 * Useful for identifying products and caching
 * @param shopeeUrl - The Shopee product URL
 * @returns The product ID or null
 */
export function extractProductId(shopeeUrl: string): string | null {
  try {
    const url = new URL(shopeeUrl);
    const pathname = url.pathname;

    // Shopee URLs typically have format: /product-name-i.{shop_id}.{product_id}
    const match = pathname.match(/\.i\.(\d+)\.(\d+)/);
    if (match && match[2]) {
      return match[2];
    }

    return null;
  } catch (error) {
    console.error("Error extracting product ID:", error);
    return null;
  }
}

/**
 * Validate if a URL is a valid Shopee product URL
 * @param url - The URL to validate
 * @returns True if it's a valid Shopee URL
 */
export function isValidShopeeUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return (
      urlObj.hostname.includes("shopee.com.br") ||
      urlObj.hostname.includes("shopee.com") ||
      urlObj.hostname.includes("shope.ee")
    );
  } catch {
    return false;
  }
}

/**
 * Default affiliate configuration
 * Replace these with your actual values from Shopee Afiliados
 */
export const defaultAffiliateConfig: AffiliateConfig = {
  // TODO: Replace with your actual affiliate ID from Shopee Afiliados
  affiliateId: process.env.VITE_SHOPEE_AFFILIATE_ID || "YOUR_AFFILIATE_ID",
  // TODO: Replace with your actual link base from Shopee Afiliados
  linkBase: process.env.VITE_SHOPEE_LINK_BASE || "https://shope.ee/YOUR_LINK_BASE",
};
