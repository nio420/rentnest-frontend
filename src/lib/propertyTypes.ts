export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  address: string;
  rentPrice: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  amenities: string[];
  categoryId: string;
}

export interface categories {
  id: string;
  name: string;
}