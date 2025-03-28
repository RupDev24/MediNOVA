import React, { useState } from 'react';
import { MapPin, Search, Clock, Phone, Star, Building2 } from 'lucide-react';

const HospitalLocator = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Hospitals Near You</h2>
      
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter location or hospital name"
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Search
          </button>
        </div>
        
        <button className="flex items-center text-blue-600 hover:text-blue-700">
          <MapPin className="h-5 w-5 mr-2" />
          Use current location
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* City General Hospital */}
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">City General Hospital</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span>2.5 km away</span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  4.8
                </span>
              </div>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-green-600 text-sm flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Currently accepting patients
                </span>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium">View Details</button>
            </div>
          </div>
        </div>
        
        {/* St. Mary's Medical Center */}
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-purple-600" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">St. Mary's Medical Center</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span>3.8 km away</span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  4.6
                </span>
              </div>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-green-600 text-sm flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Currently accepting patients
                </span>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium">View Details</button>
            </div>
          </div>
        </div>

        {/* Memorial Hospital */}
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">Memorial Hospital</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span>4.2 km away</span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  4.7
                </span>
              </div>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-green-600 text-sm flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Currently accepting patients
                </span>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium">View Details</button>
            </div>
          </div>
        </div>

        {/* Children's Medical Center */}
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-amber-600" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">Children's Medical Center</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span>5.1 km away</span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  4.9
                </span>
              </div>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-green-600 text-sm flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Currently accepting patients
                </span>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium">View Details</button>
            </div>
          </div>
        </div>

        {/* University Medical Center */}
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-red-600" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">University Medical Center</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span>6.3 km away</span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  4.5
                </span>
              </div>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-green-600 text-sm flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Currently accepting patients
                </span>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalLocator;