import React, { useState } from 'react';
import { AlertCircle, Phone } from 'lucide-react';

const EmergencyAdmission = () => {
  const [patientName, setPatientName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  return (
    <div>
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <div className="flex items-center">
          <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
          <div>
            <h3 className="text-red-800 font-semibold">Emergency Services</h3>
            <p className="text-red-600">For life-threatening emergencies, call 911 immediately</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Admission Form</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Patient Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>

            <button type="submit" className="w-full bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Request Emergency Admission
            </button>
          </form>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium">Emergency Hotline</p>
                <p className="text-blue-600">911</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <p className="font-medium">Ambulance Service</p>
                <p className="text-blue-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyAdmission;