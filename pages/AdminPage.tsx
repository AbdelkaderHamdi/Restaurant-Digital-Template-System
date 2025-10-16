
import React, { useState } from 'react';
import { RestaurantInfo, MenuItem } from '../types';
import ProductManager from '../components/admin/ProductManager';
import BrandingManager from '../components/admin/BrandingManager';
import ContactManager from '../components/admin/ContactManager';

interface AdminPageProps {
  restaurantInfo: RestaurantInfo;
  menuItems: MenuItem[];
  onRestaurantInfoUpdate: (newInfo: Partial<RestaurantInfo>) => void;
  onMenuItemsUpdate: (newItems: MenuItem[]) => void;
}

type AdminTab = 'products' | 'branding' | 'contact';

const AdminPage: React.FC<AdminPageProps> = ({ 
  restaurantInfo, 
  menuItems, 
  onRestaurantInfoUpdate, 
  onMenuItemsUpdate 
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('products');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'products':
        return <ProductManager menuItems={menuItems} onUpdate={onMenuItemsUpdate} />;
      case 'branding':
        return <BrandingManager restaurantInfo={restaurantInfo} onUpdate={onRestaurantInfoUpdate} />;
      case 'contact':
        return <ContactManager restaurantInfo={restaurantInfo} onUpdate={onRestaurantInfoUpdate} />;
      default:
        return null;
    }
  };

  const getTabClass = (tab: AdminTab) => {
    return `px-4 py-2 font-semibold rounded-t-lg transition-colors duration-300 focus:outline-none ${
      activeTab === tab 
        ? 'bg-primary text-white' 
        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
    }`;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif font-bold text-secondary mb-8">Admin Dashboard</h1>
        
        <div className="flex border-b border-gray-300">
          <button onClick={() => setActiveTab('products')} className={getTabClass('products')}>
            Manage Products
          </button>
          <button onClick={() => setActiveTab('branding')} className={getTabClass('branding')}>
            Customize Branding
          </button>
          <button onClick={() => setActiveTab('contact')} className={getTabClass('contact')}>
            Edit Contact Info
          </button>
        </div>

        <div className="bg-white p-6 rounded-b-lg rounded-r-lg shadow-lg mt-0">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
