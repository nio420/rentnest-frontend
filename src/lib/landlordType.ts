export type Status =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "ACTIVE"
  | "INACTIVE"
  | "COMPLETED";
  
export interface ICategory {
  id: string;
  name: string;
  description: string;
}

export interface ILandlord {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profilePhoto: string | null;
  role: "LANDLORD";
  status: string
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
  status: "AVAILABLE" | "RENTED";
  createdAt: string;
  updatedAt: string;
  landlordId: string;
  categoryId: string;

  category: ICategory;
  landlord: ILandlord;
}

export interface ICreatePropertyPayload {
  title: string;
  description: string;
  location: string;
  address: string;
  rentPrice: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  image: string;
  categoryId: string;
}

export interface IPropertyResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IProperty[];
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
}

export type IStatus = "APPROVED" | "REJECTED";

interface RentalRequest {
  id: string;
  status: Status;
  moveInDate: string;
  rentalMonths: number;

  property: {
    title: string;
    location: string;
  };

  tenant: {
    name: string;
    email: string;
  };
}

export interface RequestTableProps {
  requests: RentalRequest[];
}
