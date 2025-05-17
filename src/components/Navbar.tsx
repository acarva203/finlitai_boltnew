import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, DollarSign, BarChart, BookOpen, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center" onClick={closeMenu}>
              <DollarSign className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-display font-bold text-gray-900">FinLit AI</span>
            </NavLink>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/courses" 
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              <span className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                Courses
              </span>
            </NavLink>
            <NavLink 
              to="/accountability" 
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              <span className="flex items-center">
                <BarChart className="w-4 h-4 mr-1" />
                Accountability
              </span>
            </NavLink>
            <NavLink 
              to="/profile" 
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              <span className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                Profile
              </span>
            </NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink 
                to="/courses" 
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`
                }
                onClick={closeMenu}
              >
                <span className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Courses
                </span>
              </NavLink>
              <NavLink 
                to="/accountability" 
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`
                }
                onClick={closeMenu}
              >
                <span className="flex items-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  Accountability
                </span>
              </NavLink>
              <NavLink 
                to="/profile" 
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`
                }
                onClick={closeMenu}
              >
                <span className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Profile
                </span>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;