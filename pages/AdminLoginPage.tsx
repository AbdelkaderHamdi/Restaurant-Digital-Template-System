import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/common/Button';

const ADMIN_SECRET_KEY = 'admin123'; // Hardcoded for simplicity. In a real app, use environment variables.

interface AdminLoginPageProps {
  onAuthSuccess: () => void;
}

const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onAuthSuccess }) => {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key === ADMIN_SECRET_KEY) {
      setError('');
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      onAuthSuccess();
      navigate(from, { replace: true });
    } else {
      setError('Incorrect secret key. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-secondary font-serif">
          Admin Access
        </h1>
        <p className="text-center text-text">
            Please enter the secret key to manage the website.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="secret-key" className="sr-only">Secret Key</label>
            <input
              id="secret-key"
              name="secret-key"
              type="password"
              autoComplete="current-password"
              required
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Secret Key"
            />
          </div>
          
          {error && <p className="text-sm text-center text-red-600">{error}</p>}

          <div>
            <Button type="submit" className="w-full text-lg">
              Unlock Dashboard
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;