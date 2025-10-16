import React from 'react';
import { Link } from 'react-router-dom';
import { RestaurantInfo } from '../../types';
import Button from '../common/Button';

interface HeroSectionProps {
  restaurantInfo: RestaurantInfo;
}

const HeroSection: React.FC<HeroSectionProps> = ({ restaurantInfo }) => {
  return (
    <section 
      className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: `url(${restaurantInfo.heroImageUrl})` }}
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white p-6">
        <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg">
          Welcome to {restaurantInfo.name}
        </h1>
        <p className="text-md sm:text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Experience the finest flavors and a warm, inviting atmosphere.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/order">
            <Button variant="primary" className="text-lg w-48">Order Online</Button>
          </Link>
          <a href="#menu">
            <Button variant="secondary" className="text-lg bg-white/20 border border-white hover:bg-white/30 backdrop-blur-sm w-48">View Menu</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;