export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'bouquet' | 'box';
  bestSeller?: boolean;
};

export type CustomizationOption = {
  id: string;
  name: string;
  price: number;
  color?: string; // For visual representation
  image?: string;
};

export type BouquetCustomization = {
  size: 'classic' | 'grand' | 'royal';
  chocolate: string;
  drizzle: string;
  topping: string;
  packaging: string;
};

export type Testimonial = {
  id: string;
  name: string;
  content: string;
  rating: number;
};
