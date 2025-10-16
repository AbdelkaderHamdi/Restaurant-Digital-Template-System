
import React, { useState, useEffect } from 'react';
import { RestaurantInfo } from '../../types';
import Button from '../common/Button';

interface BrandingManagerProps {
  restaurantInfo: RestaurantInfo;
  onUpdate: (newInfo: Partial<RestaurantInfo>) => void;
}

const BrandingManager: React.FC<BrandingManagerProps> = ({ restaurantInfo, onUpdate }) => {
  const [formData, setFormData] = useState(restaurantInfo);

  useEffect(() => {
    setFormData(restaurantInfo);
  }, [restaurantInfo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof RestaurantInfo) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, [field]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
    alert('Branding updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-secondary mb-4">Branding & Appearance</h2>
        <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700">Brand Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"/>
          </div>
          <div className="flex items-center space-x-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Brand Icon/Logo</label>
              <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'logoUrl')} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-opacity-90"/>
            </div>
            {formData.logoUrl && <img src={formData.logoUrl} alt="Logo Preview" className="w-16 h-16 object-cover rounded-full shadow-md"/>}
          </div>
          <div className="flex items-center space-x-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Home Background Image</label>
              <input type="file" accept="image/*,video/*" onChange={(e) => handleFileChange(e, 'heroImageUrl')} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-opacity-90"/>
            </div>
            {formData.heroImageUrl && <img src={formData.heroImageUrl} alt="Hero Preview" className="w-32 h-20 object-cover rounded-md shadow-md"/>}
          </div>
          <div>
             <label className="block text-sm font-medium text-gray-700">About Section</label>
             <textarea name="about" value={formData.about} onChange={handleInputChange} rows={5} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"></textarea>
          </div>
        </div>
      </div>
       <div className="flex justify-end">
        <Button type="submit">Save Branding Changes</Button>
      </div>
    </form>
  );
};

export default BrandingManager;
