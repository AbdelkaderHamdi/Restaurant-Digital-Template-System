import React, { useState, useEffect } from 'react';
import Button from './Button';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactInfo: '',
    reservationType: 'Dinner',
    specialRequests: ''
  });

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation Submitted:', formData);
    alert(`Thank you, ${formData.fullName}! Your reservation request has been sent.`);
    onClose();
    // Reset form
    setFormData({
      fullName: '',
      contactInfo: '',
      reservationType: 'Dinner',
      specialRequests: ''
    });
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
    >
      <div 
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          aria-label="Close reservation form"
        >
          &times;
        </button>
        <h2 id="reservation-title" className="text-3xl font-serif font-bold text-secondary mb-6 text-center">Reserve a Table</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"/>
          </div>
          <div>
            <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700">Email or Phone Number</label>
            <input type="text" id="contactInfo" name="contactInfo" value={formData.contactInfo} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"/>
          </div>
          <div>
            <label htmlFor="reservationType" className="block text-sm font-medium text-gray-700">Reservation Type</label>
            <select id="reservationType" name="reservationType" value={formData.reservationType} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary">
              <option>Dinner</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Date Night</option>
              <option>Business Meeting</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700">Any Special Requests?</label>
            <textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"></textarea>
          </div>
          <div className="pt-4">
            <Button type="submit" className="w-full text-lg">Submit Reservation</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;