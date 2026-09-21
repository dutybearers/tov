export interface Property {
  id: string;
  title: string;
  tagline: string;
  price: number;
  formattedPrice: string;
  type: 'Villa' | 'Penthouse' | 'Townhouse' | 'Modern Estate' | 'Waterfront';
  status: 'For Sale' | 'For Rent' | 'Under Contract' | 'Just Listed';
  rentalPeriod?: 'month' | 'week';
  beds: number;
  baths: number;
  sqft: number;
  lotSize?: string;
  yearBuilt: number;
  address: string;
  city: string;
  state: string;
  neighborhood: string;
  zipCode: string;
  description: string;
  features: string[];
  amenities: string[];
  images: string[];
  badge?: string;
  virtualTourAvailable: boolean;
  featured: boolean;
  agent: {
    name: string;
    role: string;
    phone: string;
    email: string;
    avatar: string;
  };
  hoaFee?: number;
  estimatedTax?: number;
  parkingSpaces: number;
  coordinates?: { lat: number; lng: number };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
  propertyPurchased: string;
  price: string;
}

export interface Neighborhood {
  id: string;
  name: string;
  region: string;
  image: string;
  averagePrice: string;
  activeListingsCount: number;
  description: string;
  vibe: string[];
}

export interface SearchFilterState {
  mode: 'buy' | 'rent';
  location: string;
  propertyType: string;
  priceRange: string;
  beds: string;
  quickFilter?: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: 'Buying' | 'Selling' | 'Luxury Rental' | 'Private Concierge Tour' | 'Valuation';
  propertyInterest?: string;
  budget: string;
  preferredContact: 'Phone' | 'Email' | 'WhatsApp';
  preferredDate?: string;
  message: string;
}
