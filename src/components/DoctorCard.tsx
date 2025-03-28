import React from 'react';
import { Star, Video, MapPin, Clock } from 'lucide-react';
import type { Doctor } from '../types/doctor';

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctorId: string) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBookAppointment }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
          Available Online
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{doctor.rating}</span>
          </div>
        </div>
        
        <p className="text-indigo-600 font-medium mb-4">{doctor.specialty}</p>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{doctor.location.address}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">{doctor.experience} years experience</span>
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <div className="text-gray-900">
            <span className="text-sm">Consultation</span>
            <p className="font-semibold">${doctor.consultationFee}</p>
          </div>
          
          <div className="space-x-2">
            <button
              onClick={() => onBookAppointment(doctor.id)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Book Now
            </button>
            <button className="p-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
              <Video className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};