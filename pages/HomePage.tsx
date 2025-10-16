import React from 'react';
import HeroSection from '../components/home/HeroSection';
import MenuPreviewSection from '../components/home/MenuPreviewSection';
import ContactSection from '../components/home/ContactSection';
import { RestaurantInfo, MenuItem } from '../types';

interface HomePageProps {
  restaurantInfo: RestaurantInfo;
  menuItems: MenuItem[];
}

const HomePage: React.FC<HomePageProps> = ({ restaurantInfo, menuItems }) => {
  return (
    <div>
      <HeroSection restaurantInfo={restaurantInfo} />
      <MenuPreviewSection menuItems={menuItems} />
      <ContactSection restaurantInfo={restaurantInfo} />
    </div>
  );
};

export default HomePage;