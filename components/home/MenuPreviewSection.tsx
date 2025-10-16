
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../../types';
import Button from '../common/Button';

interface MenuPreviewSectionProps {
  menuItems: MenuItem[];
}

const MenuPreviewSection: React.FC<MenuPreviewSectionProps> = ({ menuItems }) => {
  const featuredItems = menuItems.slice(0, 6);

  return (
    <section id="menu" className="py-20 bg-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-secondary">Our Menu</h2>
          <p className="text-lg text-text mt-2">A taste of our handcrafted dishes made with love.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-bold font-serif text-secondary">{item.name}</h3>
                  <p className="text-lg font-semibold text-primary">${item.price.toFixed(2)}</p>
                </div>
                <p className="text-text mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/order">
                <Button>See Full Menu & Order</Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreviewSection;
