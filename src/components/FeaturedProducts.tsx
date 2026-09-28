import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.slice(0, 6); // Take the first 6 products as featured

  return (
    <section id="featured-products" className="py-12">
      <h2 className="text-4xl font-bold text-center text-appText mb-12 drop-shadow-md">
        Our Featured Innovations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
