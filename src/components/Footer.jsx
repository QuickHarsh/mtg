import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Meridian Trade Global Logo" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Sustainable Products. Global Reach. Timeless Quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-sm text-gray-400 hover:text-white transition-colors">Browse Products</Link></li>
              <li><Link to="/sustainability" className="text-sm text-gray-400 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/global-network" className="text-sm text-gray-400 hover:text-white transition-colors">Global Network</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/why-choose-us" className="text-sm text-gray-400 hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact Support</Link></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Trade</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Compliance Ethics</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Certifications</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 Meridian Trade Global. Sustainable Sourcing for the Future.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-emerald-400 font-medium">GOTS Certified</span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-emerald-400 font-medium">B-Corp Verified</span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-emerald-400 font-medium">ISO 9001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
