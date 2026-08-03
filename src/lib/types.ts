export interface ICategory {
  id: string;
  name: string;
}

export interface ILandlord {
  id: string;
  name: string;
  email: string;
  profilePhoto: string | null;
}

export interface IProperty {
  id: string;
  title: string;
  description: string;
  location: string;
  address: string;
  rentPrice: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  image: string;
  status: string;
  category: ICategory;
  landlord: ILandlord;
}

export type ISearchParams = {
  searchTerm?: string;
  location?: string;
  minPrice?: string;
  maxPrice?: string;
  category?: string;
};

export interface ICategory {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProps {
  searchParams: Promise<{
    searchTerm?: string;
    location?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    amenities?: string;
    page?: string;
  }>;
}