import { Neighborhood } from '../types';

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    id: 'n-beverly-hills',
    name: 'Beverly Hills & Bel Air',
    region: 'California',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    averagePrice: '$8.9M',
    activeListingsCount: 42,
    description: 'World-renowned leafy enclaves, gated privacy, legendary estates, and refined privacy seconds from world-class dining and culture.',
    vibe: ['Secluded Estates', 'Celebrity Enclave', 'Gated Security']
  },
  {
    id: 'n-malibu',
    name: 'Malibu Coast',
    region: 'California',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    averagePrice: '$12.5M',
    activeListingsCount: 28,
    description: 'Pristine coastal bluff sanctuaries, private sandy beaches, and contemporary organic residences framing dramatic sunset views.',
    vibe: ['Oceanfront', 'Barefoot Luxury', 'Surf & Wellness']
  },
  {
    id: 'n-tribeca',
    name: 'Tribeca & West Village',
    region: 'New York',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    averagePrice: '$9.4M',
    activeListingsCount: 36,
    description: 'Cobblestone streets, cast-iron loft architecture, ultra-exclusive penthouses with panoramic Hudson River views and private doormen.',
    vibe: ['Historic Lofts', 'Fine Dining', 'Skyline Penthouses']
  },
  {
    id: 'n-aspen',
    name: 'Aspen & Red Mountain',
    region: 'Colorado',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    averagePrice: '$14.2M',
    activeListingsCount: 19,
    description: 'Unrivaled alpine grandeur, ski-in/ski-out timber compounds, and year-round world-class cultural summits in the Rocky Mountains.',
    vibe: ['Ski-In / Ski-Out', 'Alpine Grandeur', 'High Culture']
  },
  {
    id: 'n-miami-beach',
    name: 'Miami Beach & Venetian Islands',
    region: 'Florida',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    averagePrice: '$7.8M',
    activeListingsCount: 31,
    description: 'Deep-water yacht frontages, tropical modernism, private island lifestyle, and vibrant international art and culinary scene.',
    vibe: ['Yacht Frontage', 'Tropical Modern', 'Private Islands']
  }
];
