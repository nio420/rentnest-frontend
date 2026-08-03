export type Role = "TENANT" | "LANDLORD" | "ADMIN";
export type Status = "ACTIVE" | "BLOCKED";

export interface IRegisterPayload {
  name: string;
  email: string;
  phone?: string;
  profilePhoto?: string;
  password: string;
  role: Role;
}

export interface ILoginPayload {
  email: string;
  password: string;
  redirectTo?: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profilePhoto: string | null;
  role: Role;
  status: Status;
  createdAt: string;
  updatedAt: string;
}

export interface IRegisterResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IUser;
}

export interface ILoginResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface IMeResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IUser;
}

export interface LoginPageProps {
  searchParams: Promise<{
    redirectTo?: string;
  }>;
}

export interface LoginFormProps {
  redirectTo?: string;
}
