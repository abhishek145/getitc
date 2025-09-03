"use client";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

import { useNavigate } from "react-router-dom";
export default function Footer() {
    const navigate = useNavigate();
  return (
    <footer className="relative bg-gray-900 text-gray-300 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">Get Into Compliance</h2>
            <p className="mt-3 text-sm text-gray-400">
            Suite 105 19000 STRATFORD RD MINNETONKA, MN 55345-4046 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-3 space-y-2 text-sm">
            <li>
        <button
          onClick={() => navigate("/about")}
          className="hover:text-green-400"
        >
          About Us
        </button>
      </li>
      <li>
        <button
          onClick={() => navigate("/contact")}
          className="hover:text-green-400"
        >
          Contact
        </button>
      </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {/* <li><a href="#" className="hover:text-green-400">Help Center</a></li> */}
              <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
              {/* <li><a href="#" className="hover:text-green-400">Terms of Service</a></li> */}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <p className="mt-3 text-sm text-gray-400">
              Reach us for compliance support.
            </p>
            <a href="tel:+17633571659" className="mt-4 text-lg font-bold text-green-400">
  📞 +1 (763) 357-1659
</a>

          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Get Into Compliance LLC. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* <a href="#"><Facebook size={18} className="hover:text-green-400" /></a>
            <a href="#"><Twitter size={18} className="hover:text-green-400" /></a>
            <a href="#"><Linkedin size={18} className="hover:text-green-400" /></a> */}
            {/* <a href="#"><Mail size={18} className="hover:text-green-400" /></a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
