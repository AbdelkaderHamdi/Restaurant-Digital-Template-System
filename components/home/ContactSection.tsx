import React from 'react';
import { RestaurantInfo } from '../../types';
import MapPinIcon from '../icons/MapPinIcon';
import PhoneIcon from '../icons/PhoneIcon';
import ClockIcon from '../icons/ClockIcon';

interface ContactSectionProps {
  restaurantInfo: RestaurantInfo;
}

const ContactSection: React.FC<ContactSectionProps> = ({ restaurantInfo }) => {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(restaurantInfo.address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-secondary">Get In Touch</h2>
          <p className="text-lg text-text mt-2">We'd love to hear from you. Visit us or give us a call.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-secondary">Contact Details</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPinIcon className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-secondary">Address</h4>
                  <p className="text-text">{restaurantInfo.address}</p>
                </div>
              </div>
               <div className="flex items-start space-x-4">
                <PhoneIcon className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-secondary">Phone</h4>
                  <p className="text-text">{restaurantInfo.phone}</p>
                </div>
              </div>
               <div className="flex items-start space-x-4">
                <ClockIcon className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-secondary">Opening Hours</h4>
                  <p className="text-text">{restaurantInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 h-80 lg:h-auto rounded-lg shadow-lg overflow-hidden">
             <iframe
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                src={mapSrc}
                title={`Map to ${restaurantInfo.name}`}
              ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;