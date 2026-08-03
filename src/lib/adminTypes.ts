import { Status } from "./landlordType";

export type ITableProps  =
  | "AVAILABLE"
  | "RENTED"
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "ACTIVE"
  | "COMPLETED"
  | "INACTIVE";

export interface UserTableProps {
  users: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: Status;
    createdAt: string;
  }[];
}

export interface PropertyTableProps {
  properties: {
    id: string;
    title: string;
    location: string;
    rentPrice: number;
    status: ITableProps;
    landlord: {
      name: string;
      email: string;
    };
    category: {
      name: string;
    };
  }[];
}

export interface RentalTableProps {
  rentals: {
    id: string;
    moveInDate: string;
    rentalMonths: number;
    totalAmount: number;
    status: "PENDING" | "APPROVED" | "REJECTED" | "ACTIVE" | "COMPLETED";

    tenant: {
      name: string;
      email: string;
    };

    property: {
      title: string;
      location: string;
    };

    payment?: {
      status: "PAID";
    } | null;
  }[];
}

export interface UserCardProps {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: "ACTIVE" | "INACTIVE";
    createdAt: string;
  };
}