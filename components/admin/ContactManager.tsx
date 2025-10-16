
import React, { useState, useEffect } from 'react';
import { RestaurantInfo } from '../../types';
import Button from '../common/Button';

interface ContactManagerProps {
  restaurantInfo: RestaurantInfo;
  onUpdate: (newInfo: Partial<RestaurantInfo>) => void;
}

const ContactManager: React.FC<ContactManagerProps> = ({ restaurantInfo, onUpdate }) => {
  const [formData, setFormData] = useState(restaurantInfo);

  useEffect(() => {
    setFormData(restaurantInfo);
  }, [restaurantInfo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value,
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
    alert('Contact information updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-secondary mb-4">Contact Information</h2>
        <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Opening Hours</label>
            <input type="text" name="hours" value={formData.hours} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"/>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-secondary mb-4">Social Media</h2>
        <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700">Facebook URL</label>
            <input type="url" name="facebook" value={formData.socialLinks?.facebook || ''} onChange={handleSocialChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary" placeholder="https://facebook.com/yourpage"/>
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700">Instagram URL</label>
            <input type="url" name="instagram" value={formData.socialLinks?.instagram || ''} onChange={handleSocialChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary" placeholder="https://instagram.com/yourprofile"/>
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700">Twitter URL</label>
            <input type="url" name="twitter" value={formData.socialLinks?.twitter || ''} onChange={handleSocialChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary" placeholder="https://twitter.com/yourhandle"/>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit">Save Contact Changes</Button>
      </div>
    </form>
  );
};

export default ContactManager;
