import React from 'react';
import { RestaurantInfo } from '../../types';
import MapPinIcon from '../icons/MapPinIcon';
import PhoneIcon from '../icons/PhoneIcon';
import ClockIcon from '../icons/ClockIcon';
import FacebookIcon from '../icons/FacebookIcon';
import InstagramIcon from '../icons/InstagramIcon';
import TwitterIcon from '../icons/TwitterIcon';

interface FooterProps {
  restaurantInfo: RestaurantInfo;
}

const Footer: React.FC<FooterProps> = ({ restaurantInfo }) => {
  const { socialLinks } = restaurantInfo;
  return (
    <footer className="bg-secondary text-accent">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">{restaurantInfo.name}</h3>
            <p className="text-gray-300">{restaurantInfo.about.substring(0, 100)}...</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-primary" />
                <span>{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <PhoneIcon className="w-5 h-5 text-primary" />
                <span>{restaurantInfo.phone}</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <ClockIcon className="w-5 h-5 text-primary" />
                <span>{restaurantInfo.hours}</span>
              </li>
            </ul>
          </div>
          <div>
             <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
             <p className="text-gray-300 mb-4">Stay connected on social media for updates and special offers.</p>
             <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks?.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon className="w-6 h-6 text-gray-300 hover:text-primary transition-colors" />
                </a>
              )}
              {socialLinks?.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon className="w-6 h-6 text-gray-300 hover:text-primary transition-colors" />
                </a>
              )}
              {socialLinks?.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <TwitterIcon className="w-6 h-6 text-gray-300 hover:text-primary transition-colors" />
                </a>
              )}
             </div>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} {restaurantInfo.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;