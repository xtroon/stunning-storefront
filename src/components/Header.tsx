import React from 'react';
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { cartItems, toggleCart } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 w-full bg-appSurface/90 backdrop-blur-sm shadow-lg border-b border-appBorder">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 sm:p-6 lg:p-8">
        <a href="#" className="text-2xl font-bold text-appText hover:text-appAccent transition-colors duration-200">
          StellarStore
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#hero" className="text-appMuted hover:text-appText transition-colors duration-200">Home</a>
            </li>
            <li>
              <a href="#featured-products" className="text-appMuted hover:text-appText transition-colors duration-200">Products</a>
            </li>
          </ul>
        </nav>
        <button
          onClick={toggleCart}
          className="relative p-2 rounded-full bg-appAccent text-appOnAccent hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-appAccent focus:ring-offset-2 focus:ring-offset-appSurface"
          aria-label="Open shopping cart"
        >
          <ShoppingCartIcon size={24} />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-appOnAccent text-xs font-bold text-appAccent ring-2 ring-appAccent">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
