import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Left section - Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white playfair-font">Book Vibe</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Discover, read, and fall in love with your next favorite book.  
            Your bookshelf deserves fresh stories!
          </p>
        </div>

        {/* Middle section - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#23BE0A] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#23BE0A] transition">Books</a></li>
            <li><a href="#" className="hover:text-[#23BE0A] transition">About</a></li>
            <li><a href="#" className="hover:text-[#23BE0A] transition">Contact</a></li>
          </ul>
        </div>

        {/* Right section - Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-[#23BE0A] transition">
              <Facebook size={22} strokeWidth={1.6} />
            </a>
            <a href="#" className="hover:text-[#23BE0A] transition">
              <Twitter size={22} strokeWidth={1.6} />
            </a>
            <a href="#" className="hover:text-[#23BE0A] transition">
              <Instagram size={22} strokeWidth={1.6} />
            </a>
            <a href="#" className="hover:text-[#23BE0A] transition">
              <Linkedin size={22} strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Book Vibe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
