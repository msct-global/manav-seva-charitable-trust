import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-warm-brown text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/msct_logo.png"
                alt="MSCT Logo"
                className="h-10 w-10 object-contain"
              />
              <div>
                <div className="font-playfair text-xl font-bold">Manav Seva</div>
                <div className="text-sm opacity-75">Charitable Trust</div>
              </div>
            </div>
            <p className="text-cream/80 leading-relaxed">
              Making Difference Possible. Join us in creating lasting change 
              through education, healthcare, and sustainability initiatives.
            </p>
            <div className="bg-caramel/20 p-4 rounded-lg">
              <p className="font-semibold text-golden-cream mb-2">Join the ₹1 Revolution</p>
              <Link href="/donate">
                <Button className="donation-button w-full">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-cream/80 hover:text-golden-cream transition-colors">About Us</Link></li>
              <li><Link href="/impact" className="text-cream/80 hover:text-golden-cream transition-colors">Our Impact</Link></li>
              <li><Link href="/revolution" className="text-cream/80 hover:text-golden-cream transition-colors">₹1 Revolution</Link></li>
              <li><Link href="/contact" className="text-cream/80 hover:text-golden-cream transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Our Work</h4>
            <ul className="space-y-2">
              <li className="text-cream/80">Education for All</li>
              <li className="text-cream/80">Healthcare Support</li>
              <li className="text-cream/80">Sustainability Initiatives</li>
              <li className="text-cream/80">Disaster Relief</li>
              <li className="text-cream/80">Community Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-cream/80">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">manavsevacharitabletrust773@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2 text-cream/80">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div>+91 79768 92938</div>
                  <div>+91 97856 92775</div>
                </div>
              </div>
              <div className="flex items-start space-x-2 text-cream/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="mb-2">
                    <div className="font-medium text-golden-cream">Main Office:</div>
                    <div>40, Laxmi Marg, Amal Ka Kanta</div>
                    <div>Nr. Surajpole Police Station</div>
                    <div>Udaipur, Rajasthan - 313001</div>
                  </div>
                  <div>
                    <div className="font-medium text-golden-cream">Branch Office:</div>
                    <div>105, 1st Floor, Jeevan Jyothi Complex</div>
                    <div>Surajpole, Nr. Udaipur Hotel</div>
                    <div>Udaipur, Rajasthan</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3">Follow Our Journey</p>
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-cream/10 rounded-full hover:bg-caramel/20 transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-cream/10 rounded-full hover:bg-caramel/20 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-cream/10 rounded-full hover:bg-caramel/20 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-cream/10 rounded-full hover:bg-caramel/20 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream/80 text-sm">
              © 2024 Manav Seva Charitable Trust. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-cream/80 hover:text-golden-cream">Privacy Policy</a>
              <a href="#" className="text-cream/80 hover:text-golden-cream">Terms of Service</a>
              <a href="#" className="text-cream/80 hover:text-golden-cream">Transparency</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

