import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-appBg text-appText font-sans relative overflow-x-hidden">
      <Header />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <FeaturedProducts />
      </main>
      <Footer />
      <ShoppingCart />
    </div>
  );
}

export default App;
