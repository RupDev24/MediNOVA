import React, { useState } from 'react';
import { Search, Heart, Brain, Settings as Lungs, Eye, Bone, Calendar } from 'lucide-react';

const SpecialtySearch = () => {
  const [symptoms, setSymptoms] = useState('');

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Specialty Hospitals</h2>
      
      <div className="mb-6">
        <div className="relative mb-4">
          <textarea
            placeholder="Describe your symptoms..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
          <Search className="h-5 w-5 mr-2" />
          Get AI Recommendations
        </button>
      </div>

      <div className="space-y-6">
        {/* Cardiology Section */}
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">Cardiology Center of Excellence</h3>
              <p className="text-gray-600 text-sm mb-2">Specialized in heart and cardiovascular care</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 text-sm">Available for consultation</span>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Neurology Section */}
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Brain className="h-6 w-6 text-purple-600" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">Neurology Institute</h3>
              <p className="text-gray-600 text-sm mb-2">Expert care for neurological conditions</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 text-sm">Available for consultation</span>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pulmonology Section */}
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <Lungs className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">Pulmonary Care Center</h3>
              <p className="text-gray-600 text-sm mb-2">Advanced respiratory treatment</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 text-sm">Available for consultation</span>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ophthalmology Section */}
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-2 rounded-lg">
              <Eye className="h-6 w-6 text-amber-600" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">Vision Care Specialists</h3>
              <p className="text-gray-600 text-sm mb-2">Complete eye care services</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 text-sm">Available for consultation</span>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Orthopedics Section */}
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-2 rounded-lg">
              <Bone className="h-6 w-6 text-red-600" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">Orthopedic & Sports Medicine</h3>
              <p className="text-gray-600 text-sm mb-2">Comprehensive bone and joint care</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 text-sm">Available for consultation</span>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtySearch;