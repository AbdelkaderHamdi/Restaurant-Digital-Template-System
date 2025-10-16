
import React from 'react';
import { MenuItem, MenuCategory, CartItem } from '../../types';

interface OrderMenuProps {
  menuItems: MenuItem[];
  cartItems: CartItem[];
  addToCart: (item: MenuItem) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
}

const OrderMenu: React.FC<OrderMenuProps> = ({ menuItems, cartItems, addToCart, updateQuantity }) => {
  const getQuantity = (itemId: number) => {
    return cartItems.find(item => item.id === itemId)?.quantity || 0;
  };

  const renderCategory = (category: MenuCategory) => {
    const itemsInCategory = menuItems.filter(item => item.category === category);
    if (itemsInCategory.length === 0) return null;

    return (
      <div key={category}>
        <h2 className="text-3xl font-serif font-bold text-secondary mt-12 mb-6">{category}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itemsInCategory.map(item => {
            const quantity = getQuantity(item.id);
            return (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover"/>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-secondary">{item.name}</h3>
                    <p className="text-lg font-semibold text-primary whitespace-nowrap ml-2">${item.price.toFixed(2)}</p>
                  </div>
                  <p className="text-sm text-text mt-1 mb-4 flex-grow">{item.description}</p>
                  {quantity === 0 ? (
                    <button 
                      onClick={() => addToCart(item)}
                      className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300 font-semibold"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center justify-center space-x-4">
                      <button 
                        onClick={() => updateQuantity(item.id, quantity - 1)}
                        className="w-10 h-10 bg-gray-200 rounded-full font-bold text-lg text-secondary hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-lg font-bold w-8 text-center">{quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, quantity + 1)}
                        className="w-10 h-10 bg-gray-200 rounded-full font-bold text-lg text-secondary hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  return (
    <div>
      {Object.values(MenuCategory).map(category => renderCategory(category))}
    </div>
  );
};

export default OrderMenu;
