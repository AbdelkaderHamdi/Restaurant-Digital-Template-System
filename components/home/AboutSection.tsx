
import React from 'react';
import { RestaurantInfo } from '../../types';

interface AboutSectionProps {
  restaurantInfo: RestaurantInfo;
}

const AboutSection: React.FC<AboutSectionProps> = ({ restaurantInfo }) => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/about/600/400" 
              alt="Interior of the restaurant" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-secondary mb-4">Our Story</h2>
            <p className="text-lg text-text leading-relaxed">
              {restaurantInfo.about}
            </p>
            <p className="text-lg text-text leading-relaxed mt-4">
              We believe in the power of good food to bring people together. Every dish is a piece of our heart, served to you. We invite you to be a part of our family and create lasting memories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
