import React, { useState } from 'react';
import PageHeader from '../components/shared/PageHeader';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Contact Us" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="text-accent dark:text-accent-dark" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Address</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                      Indian Institute of Information Technology Pune<br />
                      Survey No. 25 & 27, Near Bopdev Ghat,<br />
                      Kondhwa Annexe, A/P: Pisoli (MC),<br />
                      Taluka: Haveli, District: Pune - 411048
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center shrink-0 mr-4">
                    <Phone className="text-accent dark:text-accent-dark" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">+91 (020) 24xxxxxx</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center shrink-0 mr-4">
                    <Mail className="text-accent dark:text-accent-dark" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">info@iiitp.ac.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-80 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative shadow-sm">
              <iframe 
                title="IIIT Pune Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.856002936991!2d73.8966601!3d18.4447385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eae94960d70b%3A0xeab7da71168536ee!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Pune!5e0!3m2!1sen!2sin!4v1716616000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-90 dark:opacity-70 dark:invert"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name *</label>
                <input 
                  type="text" required name="name" value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                <input 
                  type="email" required name="email" value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input 
                  type="text" name="subject" value={formData.subject} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                <textarea 
                  required rows="5" name="message" value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent outline-none resize-none" 
                ></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-accent hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
