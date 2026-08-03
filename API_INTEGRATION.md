# API Integration Documentation

## Project

**RentNest - Rental Property Management System (Frontend)**

This document maps the frontend pages/components to the backend REST API endpoints used throughout the application.

**Backend Base URL**

```
https://rentnest-backend-api.vercel.app/api
```

---

# Authentication

| Frontend Page / Component | Method | Endpoint    | Description                              |
| ------------------------- | ------ | ----------- | ---------------------------------------- |
| Register Page             | POST   | `/register` | Register a new tenant or landlord        |
| Login Page                | POST   | `/login`    | Authenticate user and receive JWT tokens |
| Navbar / Profile          | GET    | `/profile`  | Get currently logged-in user             |

---

# Public Property Module

| Frontend Page / Component  | Method | Endpoint                  | Description                                    |
| -------------------------- | ------ | ------------------------- | ---------------------------------------------- |
| Home - Featured Properties | GET    | `/properties`             | Load featured properties                       |
| Properties Page            | GET    | `/properties`             | Fetch all properties                           |
| Property Details           | GET    | `/properties/:id`         | Fetch a single property                        |
| Property Search            | GET    | `/properties?searchTerm=` | Search properties                              |
| Property Filters           | GET    | `/properties`             | Filter by category, location, amenities, price |

---

# Categories

| Frontend Page / Component | Method | Endpoint      | Description                        |
| ------------------------- | ------ | ------------- | ---------------------------------- |
| Property Filter           | GET    | `/categories` | Load available property categories |

---

# Tenant Module

| Frontend Page / Component | Method | Endpoint              | Description                 |
| ------------------------- | ------ | --------------------- | --------------------------- |
| Request Rental            | POST   | `/rentals`            | Submit rental request       |
| Rental History            | GET    | `/tenant/rentals`     | View tenant rental requests |
| Payment History           | GET    | `/tenant/payments`    | View payment history        |
| Leave Review              | POST   | `/tenant/reviews/:id` | Submit property review      |

---

# Landlord Module

| Frontend Page / Component | Method | Endpoint                   | Description              |
| ------------------------- | ------ | -------------------------- | ------------------------ |
| Dashboard                 | GET    | `/landlord/properties`     | View landlord properties |
| Add Property              | POST   | `/landlord/properties/new` | Create new property      |
| Edit Property             | PATCH  | `/landlord/properties/:id` | Update property          |
| Delete Property           | DELETE | `/landlord/properties/:id` | Delete property          |
| Rental Requests           | GET    | `/landlord/rentals`        | View rental requests     |
| Approve Rental            | PATCH  | `/landlord/rentals/:id`    | Approve request          |
| Reject Rental             | PATCH  | `/landlord/rentals/:id`    | Reject request           |

---

# Admin Module

| Frontend Page / Component | Method | Endpoint                   | Description          |
| ------------------------- | ------ | -------------------------- | -------------------- |
| Admin Dashboard           | GET    | `/dashboard`               | Dashboard statistics |
| User Management           | GET    | `/admin/users`             | View all users       |
| Search Users              | GET    | `/admin/users?searchTerm=` | Search users         |
| Ban / Unban User          | PATCH  | `/admin/users/:id`         | Update user status   |

---

# Reviews

| Frontend Page / Component | Method | Endpoint               | Description           |
| ------------------------- | ------ | ---------------------- | --------------------- |
| Property Details          | GET    | `/reviews/:propertyId` | Load property reviews |
| Review Form               | POST   | `/reviews`             | Submit review         |

---

# Payments

| Frontend Page / Component | Method | Endpoint            | Description                    |
| ------------------------- | ------ | ------------------- | ------------------------------ |
| Checkout Page             | POST   | `/payments/create`  | Create Stripe Checkout Session |
| Payment Success           | GET    | `/payments/success` | Verify successful payment      |

---

# Authentication & Authorization

The frontend uses **JWT authentication** with:

- Access Token
- Refresh Token
- HttpOnly Cookies
- Next.js Proxy Middleware
- Role-based Route Protection
- Automatic Access Token Refresh
- Redirect to originally requested page after login

Protected roles:

- Admin
- Landlord
- Tenant

---

# Data Fetching

The frontend uses:

- Fetch API
- Server Components
- Client Components
- TanStack Query (React Query) where appropriate
- Server Actions

---

# Error Handling

The frontend provides consistent error handling using:

- Sonner Toast Notifications
- React Hook Form validation
- Zod validation
- Next.js Error Boundary (`error.tsx`)
- Loading states
- Empty states
