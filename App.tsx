import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import AdminPage from './pages/AdminPage';
import useRestaurantData from './hooks/useRestaurantData';
import ReservationModal from './components/common/ReservationModal';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AdminLoginPage from './pages/AdminLoginPage';

const App: React.FC = () => {
  const { restaurantInfo, menuItems, updateRestaurantInfo, updateMenuItems } = useRestaurantData();
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => sessionStorage.getItem('isAdminAuthenticated') === 'true');

  return (
    <HashRouter>
      <div className="bg-background font-sans text-text flex flex-col min-h-screen">
        <Header 
          restaurantName={restaurantInfo.name} 
          logoUrl={restaurantInfo.logoUrl}
          onReserveClick={() => setIsReservationModalOpen(true)} 
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage restaurantInfo={restaurantInfo} menuItems={menuItems} />} />
            <Route path="/order" element={<OrderPage menuItems={menuItems} />} />
            <Route path="/admin/login" element={<AdminLoginPage onAuthSuccess={() => setIsAdminAuthenticated(true)} />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute isAuthenticated={isAdminAuthenticated}>
                  <AdminPage 
                    restaurantInfo={restaurantInfo}
                    menuItems={menuItems}
                    onRestaurantInfoUpdate={updateRestaurantInfo}
                    onMenuItemsUpdate={updateMenuItems}
                  />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
        <Footer restaurantInfo={restaurantInfo} />
        <ReservationModal 
          isOpen={isReservationModalOpen}
          onClose={() => setIsReservationModalOpen(false)}
        />
      </div>
    </HashRouter>
  );
};

export default App;