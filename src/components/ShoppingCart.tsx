import React, { useEffect, useRef } from 'react';
import { X, MinusCircle, PlusCircle, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SafeImage from './common/SafeImage';

const ShoppingCart: React.FC = () => {
  const { cartItems, isCartOpen, toggleCart, addToCart, removeFromCart, getCartTotal } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);

  const total = getCartTotal();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        if (isCartOpen) toggleCart();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen, toggleCart]);

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isCartOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out
        ${isCartOpen ? 'visible bg-black/50' : 'invisible bg-transparent'}`}
      aria-hidden={!isCartOpen}
    >
      <div
        ref={cartRef}
        className={`fixed top-0 right-0 w-full md:w-96 h-full bg-appSurface shadow-2xl p-6 flex flex-col transform transition-transform duration-300 ease-in-out
          ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <div className="flex items-center justify-between pb-4 border-b border-appBorder mb-4">
          <h2 id="cart-title" className="text-2xl font-bold text-appText">Your Cart</h2>
          <button
            onClick={toggleCart}
            className="p-2 rounded-full text-appMuted hover:text-appAccent hover:bg-appSurfaceMuted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-appAccent focus:ring-offset-2 focus:ring-offset-appSurface"
            aria-label="Close shopping cart"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
          {cartItems.length === 0 ? (
            <p className="text-appMuted text-center py-8">Your cart is empty. Start shopping!</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 py-4 border-b border-appBorder last:border-b-0">
                <SafeImage
                  src={item.imageUrl}
                  fallbackSrc={`https://source.unsplash.com/featured/?${encodeURIComponent(item.name)},product`}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-appText font-medium text-lg line-clamp-1">{item.name}</h3>
                  <p className="text-appMuted text-sm">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => removeFromCart(item.id, false)}
                      className="p-1 text-appMuted hover:text-appAccent transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-appAccent focus:ring-offset-2 focus:ring-offset-appSurface"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <MinusCircle size={18} />
                    </button>
                    <span className="mx-2 text-appText font-medium">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="p-1 text-appMuted hover:text-appAccent transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-appAccent focus:ring-offset-2 focus:ring-offset-appSurface"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <PlusCircle size={18} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, true)}
                  className="p-1 text-appMuted hover:text-red-500 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-appSurface"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="mt-auto pt-6 border-t border-appBorder">
          <div className="flex justify-between items-center text-xl font-bold mb-4">
            <span className="text-appText">Total:</span>
            <span className="text-appAccent">${total.toFixed(2)}</span>
          </div>
          <button
            disabled={cartItems.length === 0}
            className={`w-full py-3 rounded-lg text-lg font-semibold transition-all duration-300
              ${cartItems.length === 0
                ? 'bg-appSurfaceMuted text-appMuted cursor-not-allowed'
                : 'bg-appAccent text-appOnAccent hover:bg-red-600 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-appAccent focus:ring-opacity-75'}
            `}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
