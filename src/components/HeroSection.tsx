import React from 'react';
import SafeImage from './common/SafeImage';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-appSurface to-appBg rounded-3xl overflow-hidden shadow-2xl mb-16 h-[70vh] flex items-center justify-center p-8 lg:p-16">
      <div className="absolute inset-0 z-0 opacity-40">
        <SafeImage
          src="https://source.unsplash.com/featured/?futuristic-tech-product,minimal-design"
          fallbackSrc="https://source.unsplash.com/featured/?technology,product,innovation"
          alt="A sleek, futuristic new product with a minimalist design"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="relative z-10 text-center max-w-3xl space-y-6 bg-appSurface/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-appBorder">
        <h1 className="text-5xl md:text-6xl font-extrabold text-appText leading-tight drop-shadow-lg">
          Unleash the Future
        </h1>
        <p className="text-lg md:text-xl text-appMuted leading-relaxed">
          Experience our groundbreaking new collection, meticulously crafted for the modern visionary.
          Redefine your everyday with unparalleled style and innovation.
        </p>
        <button className="px-8 py-4 bg-appAccent text-appOnAccent text-lg font-semibold rounded-full shadow-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-appAccent focus:ring-opacity-75">
          Discover the Collection
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
