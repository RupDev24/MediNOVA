import React from 'react';
import { Ambulance, Activity, Brain, Globe2, Phone, MapPin, Clock, Languages } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                24/7 Emergency <span className="text-red-400">Ambulance</span> Response
              </h1>
              <p className="text-xl text-blue-100">
                Professional medical assistance when you need it most. Quick, reliable, and life-saving services.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105">
                Call Emergency: 911
              </button>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=800&q=80" 
                alt="Emergency Medical Response" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Advanced Emergency Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Clock className="w-12 h-12 text-blue-600" />}
            title="24/7 Emergency Response"
            description="Instant access to nearest ambulance services with real-time dispatch system."
          />
          <FeatureCard 
            icon={<MapPin className="w-12 h-12 text-blue-600" />}
            title="Live Tracking"
            description="Track your ambulance in real-time with our advanced GPS system."
          />
          <FeatureCard 
            icon={<Brain className="w-12 h-12 text-blue-600" />}
            title="AI-Powered Triage"
            description="Smart symptom analysis for optimal emergency prioritization."
          />
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Technological Innovations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard 
              icon={<Activity className="w-8 h-8" />}
              title="Real-time Monitoring"
            />
            <TechCard 
              icon={<Phone className="w-8 h-8" />}
              title="PWA Support"
            />
            <TechCard 
              icon={<Globe2 className="w-8 h-8" />}
              title="Global Coverage"
            />
            <TechCard 
              icon={<Languages className="w-8 h-8" />}
              title="Multi-language"
            />
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency? Don't Wait!</h2>
          <p className="text-xl mb-6">Our emergency response team is available 24/7</p>
          <div className="flex justify-center items-center space-x-4">
            <Ambulance className="w-8 h-8" />
            <span className="text-3xl font-bold">911</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TechCard({ icon, title }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all transform hover:-translate-y-1">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-blue-600">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}

export default App;