import React, { useState, useEffect } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import { DoctorCard } from '@/components/DoctorCard.tsx';
import { DoctorFilters } from '@/components/DoctorFilters.tsx';
import { ContactSection } from '@/components/ContactSection.tsx';
import { Stethoscope, Heart } from 'lucide-react';
import type { Doctor } from '@/lib/doctor.ts';
import MouseFollower from '@/components/MouseFollower';

// Sample data - In production, this would come from your Supabase backend
const SAMPLE_DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    experience: 12,
    rating: 4.8,
    location: {
      lat: 40.7128,
      lng: -74.0060,
      address: 'Manhattan, NY'
    },
    availableSlots: ['2024-03-20T09:00:00Z', '2024-03-20T10:00:00Z'],
    languages: ['English', 'Spanish'],
    education: ['Harvard Medical School', 'Johns Hopkins University'],
    consultationFee: 150
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    experience: 15,
    rating: 4.9,
    location: {
      lat: 40.7282,
      lng: -73.7949,
      address: 'Queens, NY'
    },
    availableSlots: ['2024-03-21T14:00:00Z', '2024-03-21T15:00:00Z'],
    languages: ['English', 'Mandarin'],
    education: ['Stanford Medical School', 'Yale University'],
    consultationFee: 180
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
    experience: 10,
    rating: 4.9,
    location: {
      lat: 40.6782,
      lng: -73.9442,
      address: 'Brooklyn, NY'
    },
    availableSlots: ['2024-03-22T11:00:00Z', '2024-03-22T13:00:00Z'],
    languages: ['English', 'Spanish', 'Portuguese'],
    education: ['Columbia University', 'Mount Sinai School of Medicine'],
    consultationFee: 140
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Dermatologist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    experience: 8,
    rating: 4.7,
    location: {
      lat: 40.7831,
      lng: -73.9712,
      address: 'Upper East Side, NY'
    },
    availableSlots: ['2024-03-23T10:00:00Z', '2024-03-23T16:00:00Z'],
    languages: ['English'],
    education: ['NYU School of Medicine', 'University of Pennsylvania'],
    consultationFee: 200
  },
  {
    id: '5',
    name: 'Dr. Priya Patel',
    specialty: 'Endocrinologist',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=800',
    experience: 14,
    rating: 4.9,
    location: {
      lat: 40.7505,
      lng: -73.9934,
      address: 'Midtown, NY'
    },
    availableSlots: ['2024-03-24T09:00:00Z', '2024-03-24T14:00:00Z'],
    languages: ['English', 'Hindi', 'Gujarati'],
    education: ['Yale School of Medicine', 'Boston University'],
    consultationFee: 170
  },
  {
    id: '6',
    name: 'Dr. David Kim',
    specialty: 'Orthopedic Surgeon',
    image: 'https://images.unsplash.com/photo-1637059824899-a441006a6875?auto=format&fit=crop&q=80&w=800',
    experience: 18,
    rating: 4.8,
    location: {
      lat: 40.7589,
      lng: -73.9851,
      address: 'Midtown West, NY'
    },
    availableSlots: ['2024-03-25T08:00:00Z', '2024-03-25T11:00:00Z'],
    languages: ['English', 'Korean'],
    education: ['Johns Hopkins School of Medicine', 'UCLA Medical Center'],
    consultationFee: 250
  }
];

function App() {
  const [doctors, setDoctors] = useState<Doctor[]>(SAMPLE_DOCTORS);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(SAMPLE_DOCTORS);
  const specialties = Array.from(new Set(doctors.map(doctor => doctor.specialty)));

  const handleSearch = (query: string) => {
    const filtered = doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(query.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  const handleSpecialtyFilter = (specialty: string) => {
    if (!specialty) {
      setFilteredDoctors(doctors);
      return;
    }
    const filtered = doctors.filter(doctor => doctor.specialty === specialty);
    setFilteredDoctors(filtered);
  };

  const handleBookAppointment = (doctorId: string) => {
    // In production, this would open a booking modal or navigate to a booking page
    console.log('Booking appointment with doctor:', doctorId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <header className="bg-white shadow-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-indigo-600 p-2 rounded-full">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <h1 className="ml-3 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                HealthConnect
              </h1>
            </div>
            <div className="flex items-center space-x-2 text-indigo-600">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-medium">Trusted by 1M+ Patients</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070')] bg-fixed bg-cover opacity-10"></div>
        
        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Doctor</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with top healthcare professionals for in-person or virtual consultations.
              Your health journey begins here.
            </p>
          </div>

          <DoctorFilters
            onSearch={handleSearch}
            onSpecialtyFilter={handleSpecialtyFilter}
            specialties={specialties}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredDoctors.map(doctor => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onBookAppointment={handleBookAppointment}
              />
            ))}
          </div>

          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default App;