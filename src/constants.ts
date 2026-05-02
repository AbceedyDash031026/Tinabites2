import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Golden Blush Bouquet',
    description: 'Our signature bouquet featuring 24 premium strawberries dipped in white and rose-gold chocolate, accented with fresh white roses.',
    price: 350,
    image: 'https://i.postimg.cc/QxtHnPhN/image.jpg',
    category: 'bouquet',
    bestSeller: true
  },
  {
    id: '2',
    name: 'Midnight Elegance Box',
    description: '12 jumbo strawberries hand-decorated with dark Belgian chocolate and edible 24k gold flakes.',
    price: 180,
    image: 'https://i.postimg.cc/sg5yn9QD/(1).jpg',
    category: 'box',
    bestSeller: true
  },
  {
    id: '3',
    name: 'Pure Ivory Selection',
    description: 'A minimalist white chocolate collection with hazelnut praline and coconut infusions.',
    price: 150,
    image: 'https://i.postimg.cc/KjnS9m4h/Neznyi-buket-iz-klubniki-v-sokolade.jpg',
    category: 'box'
  },
  {
    id: '4',
    name: 'Grand Celebration Box',
    description: 'An architectural masterpiece of 50 chocolate strawberries and seasonal blooms, designed for grand surprises.',
    price: 650,
    image: 'https://i.postimg.cc/mgPVR8N1/(2).jpg',
    category: 'bouquet'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    content: 'The most beautiful gift I have ever received. The attention to detail and the quality of the chocolate is unparalleled.',
    rating: 5
  },
  {
    id: '2',
    name: 'Ahmed K.',
    content: 'Tina\'s Bites made our anniversary truly special. The bouquet arrived in perfect condition and tastes even better than it looks!',
    rating: 5
  }
];

export const CONTACT_INFO = {
  whatsapp: '+971524704290',
  instagram: '@tinasbites_luxury',
  instagramUrl: 'https://www.instagram.com/cinio.valentina?igsh=czFtOWZncGNoZTQw',
  location: 'Dubai, UAE',
  delivery: 'Next-day delivery across UAE'
};

export const CUSTOMIZATION_OPTIONS = {
  sizes: [
    { id: 'classic', name: 'Classic (12 Berries)', price: 150 },
    { id: 'grand', name: 'Grand (24 Berries)', price: 280 },
    { id: 'royal', name: 'Royal (50 Berries)', price: 550 },
  ],
  chocolates: [
    { id: 'dark', name: 'Belgian Dark (70%)', price: 0, color: '#2A1B1B' },
    { id: 'milk', name: 'Creamy Milk', price: 0, color: '#7B3F00' },
    { id: 'white', name: 'Ivory White', price: 15, color: '#FDFBF9' },
    { id: 'gold', name: 'Caramelised Gold', price: 25, color: '#C5A059' },
  ],
  drizzles: [
    { id: 'none', name: 'No Drizzle', price: 0 },
    { id: 'classic', name: 'Classic Contrast', price: 10 },
    { id: 'rose-gold', name: 'Rose Gold Shimmer', price: 30 },
    { id: 'marble', name: 'Marble Swirl', price: 20 },
  ],
  toppings: [
    { id: 'none', name: 'None', price: 0 },
    { id: 'pistachio', name: 'Crushed Pistachio', price: 15 },
    { id: 'gold-flakes', name: '24K Gold Flakes', price: 45 },
    { id: 'rose-petals', name: 'Dried Rose Petals', price: 20 },
    { id: 'hazelnut', name: 'Toasted Hazelnut', price: 15 },
  ],
  packaging: [
    { id: 'white', name: 'Pure White Box', price: 0, color: '#FFFFFF' },
    { id: 'stone', name: 'Signature Stone', price: 0, color: '#FDFBF9' },
    { id: 'blush', name: 'Blush Velvet', price: 25, color: '#F9EAEA' },
    { id: 'charcoal', name: 'Midnight Charcoal', price: 20, color: '#2A1B1B' },
  ]
};
