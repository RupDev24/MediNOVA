import React, { useState } from 'react';
import { Search, MapPin, Stethoscope, Ambulance, Building2, Mail, Phone, MapPinned, Clock } from 'lucide-react';
import HospitalLocator from '@/components/HospitalLocator';
import SpecialtySearch from '@/components/SpecialtySearch';
import EmergencyAdmission from '@/components/EmergencyAdmission';

function App() {
  const [activeTab, setActiveTab] = useState('locator');

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2000&q=80')] bg-fixed bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:z-0 relative">
      {/* Hero Section */}
      <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              {/* Centered heading with additional paragraph below */}
              <div className="w-full text-center">
                <h1 className="text-4xl font-bold text-gray-800 py-6 bg-blue-100 rounded-lg shadow-lg">
                  Hospital Services
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Providing 24/7 hospital services to ensure your health and safety at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Feature Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('locator')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition shadow-md ${
              activeTab === 'locator'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <MapPin className="h-5 w-5" />
            <span>Hospital Locator</span>
          </button>
          <button
            onClick={() => setActiveTab('specialty')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition shadow-md ${
              activeTab === 'specialty'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <Stethoscope className="h-5 w-5" />
            <span>Specialty Search</span>
          </button>
          <button
            onClick={() => setActiveTab('emergency')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition shadow-md ${
              activeTab === 'emergency'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <Ambulance className="h-5 w-5" />
            <span>Emergency Admission</span>
          </button>
        </div>

        {/* Active Component */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
          {activeTab === 'locator' && <HospitalLocator />}
          {activeTab === 'specialty' && <SpecialtySearch />}
          {activeTab === 'emergency' && <EmergencyAdmission />}
        </div>
      </main>

      {/* Contact Us Section */}
      <section className="bg-white/80 backdrop-blur-sm py-12 mt-12 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPinned className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <p className="text-gray-600">123 Medical Center Drive<br />Healthcare City, HC 12345</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-gray-600">Emergency: 911<br />General: (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-gray-600">info@mediconnect.com<br />support@mediconnect.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Hours</h4>
                    <p className="text-gray-600">24/7 Emergency Services<br />Mon-Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold">Hospital Services</h3>
          <p className="mt-2">Get admission in any hospitals 24/7</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
