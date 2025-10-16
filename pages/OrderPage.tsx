
import React, { useState } from 'react';
import { CartItem, MenuItem } from '../types';
import OrderMenu from '../components/order/OrderMenu';
import CartSummary from '../components/order/CartSummary';

interface OrderPageProps {
  menuItems: MenuItem[];
}

const OrderPage: React.FC<OrderPageProps> = ({ menuItems }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (itemToAdd: MenuItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === itemToAdd.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...itemToAdd, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="bg-accent min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-secondary">Order Online</h1>
          <p className="text-lg text-text mt-2">Select from our delicious menu below.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <OrderMenu 
              menuItems={menuItems} 
              cartItems={cartItems}
              addToCart={addToCart}
              updateQuantity={updateQuantity}
            />
          </div>
          <div className="lg:col-span-1 lg:sticky top-24">
            <CartSummary 
              cartItems={cartItems} 
              updateQuantity={updateQuantity}
              clearCart={clearCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
