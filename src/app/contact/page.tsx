'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Main Office",
    details: [
      "40, Laxmi Marg, Amal Ka Kanta",
      "Nr. Surajpole Police Station",
      "Udaipur, Rajasthan - 313001"
    ],
    color: "text-caramel"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Branch Office",
    details: [
      "105, 1st Floor",
      "Jeevan Jyothi Complex, Surajpole",
      "Nr. Udaipur Hotel, Udaipur"
    ],
    color: "text-golden-cream"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    details: ["+91 79768 92938", "+91 97856 92775", "Available: 9 AM - 6 PM"],
    color: "text-warm-beige"
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    details: ["manavsevacharitabletrust773@gmail.com", "General Inquiries & Support", "Response within 24 hours"],
    color: "text-soft-taupe"
  }
];

const socialLinks = [
  { icon: <Facebook className="h-6 w-6" />, name: "Facebook", url: "#", color: "hover:text-blue-600" },
  { icon: <Twitter className="h-6 w-6" />, name: "Twitter", url: "#", color: "hover:text-blue-400" },
  { icon: <Instagram className="h-6 w-6" />, name: "Instagram", url: "#", color: "hover:text-pink-600" },
  { icon: <Linkedin className="h-6 w-6" />, name: "LinkedIn", url: "#", color: "hover:text-blue-700" }
];

const subjects = [
  "General Inquiry",
  "Volunteer Opportunities", 
  "Partnership/Collaboration",
  "Donation Support",
  "Media & Press",
  "Technical Support",
  "Other"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-vanilla-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-vanilla-cream to-dusty-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-inter font-bold text-charcoal-gray mb-6">
              Get In <span className="text-mauve-purple">Touch</span>
            </h1>
            <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Whether you have questions, want to volunteer, 
              or need support, we're here to help make a difference together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-sage-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-inter font-bold text-charcoal-gray mb-4">
              Our Locations & Contact Details
            </h2>
            <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto">
              We have two convenient locations in Udaipur to serve you better
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white border-peach-blush shadow-elegant hover:shadow-strong hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-sage-mist/50 flex items-center justify-center ${info.color}`}>
                    {info.icon}
                  </div>
                  <CardTitle className="text-xl font-inter font-bold text-charcoal-gray">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-charcoal-gray/70 text-center text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="bg-white border-peach-blush shadow-elegant">
              <CardHeader>
                <CardTitle className="text-3xl font-inter font-bold text-charcoal-gray">
                  Send Us a Message
                </CardTitle>
                <p className="text-charcoal-gray/70">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal-gray mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-peach-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve-purple focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal-gray mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-peach-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve-purple focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-charcoal-gray mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-peach-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve-purple focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal-gray mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-peach-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve-purple focus:border-transparent resize-vertical"
                      placeholder="Please share your message, questions, or how we can help you..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full donation-button text-lg py-4"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              
              {/* Google Maps */}
              <Card className="bg-white border-peach-blush shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-inter font-bold text-charcoal-gray">
                    Find Our Offices in Udaipur
                  </CardTitle>
                  <p className="text-charcoal-gray/70 text-sm">
                    Both our offices are conveniently located in Udaipur, Rajasthan
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-64 rounded-b-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.8!2d73.6821!3d24.5711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56a0c5b8b8b%3A0x1234567890abcdef!2sSurajpole%2C%20Udaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1635854400000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Manav Seva Charitable Trust Office Locations in Udaipur - Surajpole Area"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white border-peach-blush shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-inter font-bold text-charcoal-gray">
                    Connect With Us
                  </CardTitle>
                  <p className="text-charcoal-gray/70">Follow our journey and stay updated</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`flex items-center gap-3 p-4 rounded-lg border border-peach-blush hover:shadow-medium transition-all duration-300 text-charcoal-gray ${social.color}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                        <span className="font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="bg-gradient-to-br from-caramel to-golden-cream text-warm-brown border-none shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-inter font-bold">
                    Need Immediate Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Primary Contact</h4>
                    <p className="text-warm-brown/90">+91 79768 92938</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Alternative Contact</h4>
                    <p className="text-warm-brown/90">+91 97856 92775</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email Support</h4>
                    <p className="text-warm-brown/90 text-sm">manavsevacharitabletrust773@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Office Hours</h4>
                    <p className="text-warm-brown/90 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                  <Button variant="outline" className="w-full bg-warm-brown/10 border-warm-brown text-warm-brown hover:bg-warm-brown/20 mt-4">
                    Visit Our Office
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-sage-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-inter font-bold text-charcoal-gray mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-charcoal-gray/80 mb-8">
            Can't find what you're looking for? Check our FAQ page or contact us directly.
          </p>
          <Button className="donation-button px-8 py-3">
            Visit FAQ Page
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

