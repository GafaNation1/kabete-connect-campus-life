
import { Link } from "react-router-dom";
import { Cross, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Cross className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">UKCCU</h3>
                <p className="text-sm text-gray-400">Upper Kabete Campus Christian Union</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering students to grow in faith, fellowship, and service to God and community.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/leadership" className="text-gray-300 hover:text-white transition-colors">Leadership</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/ministries" className="text-gray-300 hover:text-white transition-colors">Ministries</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Ministries */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Ministries</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Worship & Music</li>
              <li className="text-gray-300">Bible Study</li>
              <li className="text-gray-300">Outreach</li>
              <li className="text-gray-300">Small Groups</li>
              <li className="text-gray-300">Media & Tech</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">University of Nairobi, Upper Kabete Campus</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">info@ukccu.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">+254 700 123 456</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Upper Kabete Campus Christian Union. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
