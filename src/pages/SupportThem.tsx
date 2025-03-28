import React from 'react';
import { Heart, Users, Handshake, DollarSign, Phone, Mail, MapPin, Calendar, Clock, MapPinned } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-32 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Medical Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-white drop-shadow-lg">Support Them</h1>
          <p className="text-2xl text-center text-white drop-shadow-md">Together we can make a difference in healthcare</p>
        </div>
      </header>

      {/* Forms Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {/* Volunteers Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="text-blue-600 w-6 h-6 mr-2" />
              <h2 className="text-2xl font-semibold">Call For Volunteers</h2>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="How would you like to help?"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
                rows={4}
              ></textarea>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                Volunteer Now
              </button>
            </form>
          </div>

          {/* NGO Collaborations */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Handshake className="text-blue-600 w-6 h-6 mr-2" />
              <h2 className="text-2xl font-semibold">NGO Collaborations</h2>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Organization Name"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Contact Email"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Describe your organization and potential collaboration"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
                rows={4}
              ></textarea>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                Submit Proposal
              </button>
            </form>
          </div>

          {/* Donate Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Heart className="text-blue-600 w-6 h-6 mr-2" />
              <h2 className="text-2xl font-semibold">Donate For Them</h2>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
              />
              <select className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400">
                <option value="">Select Amount</option>
                <option value="25">$25</option>
                <option value="50">$50</option>
                <option value="100">$100</option>
                <option value="custom">Custom Amount</option>
              </select>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Health Camps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Health Camps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blood Donation Camp */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800"
                alt="Blood Donation Camp"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Blood Donation Drive</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>March 15, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinned className="w-5 h-5 mr-2" />
                    <span>City Community Center</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Awareness Camp */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800"
                alt="Health Awareness Camp"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Health Awareness Workshop</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>March 20, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinned className="w-5 h-5 mr-2" />
                    <span>Public Library Hall</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Checkup Camp */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800"
                alt="Medical Checkup Camp"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Free Medical Checkup</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>March 25, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinned className="w-5 h-5 mr-2" />
                    <span>Central Park Medical Center</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dental Health Camp */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800"
                alt="Dental Health Camp"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Free Dental Checkup</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>March 30, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinned className="w-5 h-5 mr-2" />
                    <span>Smile Dental Clinic</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Eye Care Camp */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=800"
                alt="Eye Care Camp"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vision Care Camp</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>April 5, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinned className="w-5 h-5 mr-2" />
                    <span>Vision Care Center</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mental Health Workshop */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800"
                alt="Mental Health Workshop"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mental Health Awareness</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>April 10, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>1:00 PM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinned className="w-5 h-5 mr-2" />
                    <span>Wellness Community Center</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2400"
            alt="Medical Pattern"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Contact Us
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"
            >
              <motion.div 
                className="flex items-center transform hover:scale-105 transition-transform"
                whileHover={{ x: 10 }}
              >
                <div className="bg-blue-100 p-4 rounded-full">
                  <Phone className="text-blue-600 w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center transform hover:scale-105 transition-transform"
                whileHover={{ x: 10 }}
              >
                <div className="bg-blue-100 p-4 rounded-full">
                  <Mail className="text-blue-600 w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">support@medicalsupport.org</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center transform hover:scale-105 transition-transform"
                whileHover={{ x: 10 }}
              >
                <div className="bg-blue-100 p-4 rounded-full">
                  <MapPin className="text-blue-600 w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-600">123 Healthcare Avenue, Medical District</p>
                </div>
              </motion.div>

              <div className="mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800"
                  alt="Healthcare Support"
                  className="rounded-lg shadow-md"
                />
              </div>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"
            >
              <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 transition-shadow"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 transition-shadow"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  placeholder="How can we help you?"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 transition-shadow"
                  rows={4}
                ></textarea>
              </motion.div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Medical Support. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;