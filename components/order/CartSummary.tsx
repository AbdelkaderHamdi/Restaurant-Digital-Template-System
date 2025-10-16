
import React, { useState } from 'react';
import { CartItem } from '../../types';
import Button from '../common/Button';

interface CartSummaryProps {
  cartItems: CartItem[];
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems, updateQuantity, clearCart }) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('counter');

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // In a real app, this would submit to a backend (Supabase, Google Sheets API, etc.)
    const orderDetails = {
      customerName,
      customerPhone,
      paymentMethod,
      items: cartItems.map(item => ({ id: item.id, name: item.name, quantity: item.quantity, price: item.price })),
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
      timestamp: new Date().toISOString(),
    };
    console.log("Placing Order:", orderDetails);
    alert(`Thank you, ${customerName}! Your order has been placed.\nTotal: $${total.toFixed(2)}`);
    clearCart();
    setCustomerName('');
    setCustomerPhone('');
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold font-serif text-secondary mb-4">Your Cart</h2>
        <p className="text-text">Your cart is currently empty. Add some items from the menu to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold font-serif text-secondary mb-4">Your Order</h2>
      <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-secondary">{item.name}</p>
              <p className="text-sm text-text">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-lg font-bold text-primary">-</button>
              <span className="font-bold w-5 text-center">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-lg font-bold text-primary">+</button>
              <p className="w-16 text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t my-4 pt-4 space-y-2">
        <div className="flex justify-between text-text"><p>Subtotal</p><p>${subtotal.toFixed(2)}</p></div>
        <div className="flex justify-between text-text"><p>Tax (10%)</p><p>${tax.toFixed(2)}</p></div>
        <div className="flex justify-between text-lg font-bold text-secondary"><p>Total</p><p>${total.toFixed(2)}</p></div>
      </div>
      
      <form onSubmit={handleSubmit} className="mt-6">
        <h3 className="text-xl font-semibold text-secondary mb-4">Customer Details</h3>
        <div className="space-y-4">
          <input type="text" placeholder="Your Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
          <input type="tel" placeholder="Phone Number" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
        </div>
        
        <h3 className="text-xl font-semibold text-secondary mt-6 mb-4">Payment Method</h3>
        <div className="space-y-3">
            <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                <input type="radio" name="payment" value="counter" checked={paymentMethod === 'counter'} onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-primary focus:ring-primary"/>
                <span className="ml-3 font-medium text-text">Pay at Counter</span>
            </label>
             <label className="flex items-center p-3 border rounded-md cursor-not-allowed bg-gray-100 text-gray-400">
                <input type="radio" name="payment" value="online" disabled className="w-5 h-5"/>
                <span className="ml-3 font-medium">Pay Online (Coming Soon)</span>
            </label>
        </div>

        <Button type="submit" className="w-full mt-6 text-lg">Place Order</Button>
      </form>
    </div>
  );
};

export default CartSummary;
