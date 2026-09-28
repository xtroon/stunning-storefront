import React from 'react';
import { PlusCircle } from 'lucide-react';
import SafeImage from './common/SafeImage';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-appSurface rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden border border-appBorder">
      <div className="aspect-w-16 aspect-h-9 sm:aspect-h-10 lg:aspect-h-12 w-full overflow-hidden rounded-t-xl">
        <SafeImage
          src={product.imageUrl}
          fallbackSrc={`https://source.unsplash.com/featured/?${encodeURIComponent(product.name)},product`}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="p-5 flex flex-col justify-between h-auto">
        <h3 className="text-xl font-semibold text-appText mb-2 group-hover:text-appAccent transition-colors duration-200 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-appMuted text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-2">
          <p className="text-2xl font-bold text-appAccent">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center space-x-2 px-4 py-2 bg-appAccent text-appOnAccent rounded-full shadow-md hover:bg-red-600 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-appAccent focus:ring-offset-2 focus:ring-offset-appSurface"
            aria-label={`Add ${product.name} to cart`}
          >
            <PlusCircle size={20} />
            <span className="font-medium">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
