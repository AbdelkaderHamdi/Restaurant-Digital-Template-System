import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Button from '../common/Button';

interface HeaderProps {
  restaurantName: string;
  logoUrl: string;
  onReserveClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ restaurantName, logoUrl, onReserveClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinkClasses = "text-secondary hover:text-primary transition-colors duration-300 font-medium py-2";
  const activeLinkClasses = "text-primary";

  const isHomePage = location.pathname === '/';

  const NavLinks = ({ isMobile }: { isMobile?: boolean }) => {
    const linkClass = isMobile ? `${navLinkClasses} text-xl` : navLinkClasses;
    return (
      <>
        <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMobileMenuOpen(false)} end>Home</NavLink>
        <a href={isHomePage ? '#menu' : '/#menu'} className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
        <a href={isHomePage ? '#contact' : '/#contact'} className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        <NavLink to="/admin" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Admin</NavLink>
      </>
    );
  };
  
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logoUrl} alt={`${restaurantName} Logo`} className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover" />
          <span className="text-xl md:text-2xl font-serif font-bold text-secondary">{restaurantName}</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>
        <div className="hidden md:flex items-center space-x-3">
          <Button onClick={onReserveClick} variant="secondary">Reserve Table</Button>
          <Link to="/order">
            <Button>Order Now</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm pb-4">
          <nav className="flex flex-col items-center space-y-4">
            <NavLinks isMobile />
          </nav>
          <div className="flex flex-col items-center space-y-3 mt-6 px-4">
            <Button onClick={() => { onReserveClick(); setIsMobileMenuOpen(false); }} variant="secondary" className="w-full">Reserve Table</Button>
            <Link to="/order" className="w-full">
              <Button className="w-full">Order Now</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;