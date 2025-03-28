export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  experience: number;
  rating: number;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  availableSlots: string[];
  languages: string[];
  education: string[];
  consultationFee: number;
}