import { Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  badge?: string;
  shopeeLink: string;
  onWishlist?: (id: string) => void;
}

/**
 * ProductCard Component
 * Displays a luxury-styled product card with image, pricing, and CTA
 * Design: Elegant & Premium with gold accents and smooth interactions
 */
export default function ProductCard({
  id,
  title,
  image,
  price,
  originalPrice,
  discount,
  badge,
  shopeeLink,
  onWishlist,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onWishlist?.(id);
  };

  return (
    <div className="luxury-card overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {badge}
          </div>
        )}

        {/* Discount Badge */}
        <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-bold">
          -{discount}%
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute bottom-4 right-4 bg-card text-foreground p-2 rounded-full shadow-lg transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
        >
          <Heart
            size={20}
            fill={isWishlisted ? "currentColor" : "none"}
            className={isWishlisted ? "text-primary" : ""}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="text-sm font-medium text-foreground line-clamp-2 hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Pricing */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">
              R$ {price.toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              R$ {originalPrice.toFixed(2)}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Você economiza: R$ {(originalPrice - price).toFixed(2)}
          </p>
        </div>

        {/* CTA Button */}
        <a
          href={shopeeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="luxury-button block text-center w-full text-sm font-medium"
        >
          Ver na Shopee
        </a>
      </div>
    </div>
  );
}
