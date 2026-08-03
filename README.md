# 🏡 RentNest – Rental Property Management System

RentNest is a modern full-stack rental property management platform that simplifies the process of listing, discovering, requesting, and managing rental properties. The application provides dedicated experiences for **Tenants**, **Landlords**, and **Administrators** with secure authentication, role-based authorization, online payment integration, and responsive dashboards.

---

## 🌐 Live Demo

### Frontend

> https://your-frontend-url.vercel.app

### Backend API

> https://rentnest-backend-api.vercel.app

---

## 📖 Project Overview

RentNest enables landlords to publish rental properties while allowing tenants to browse listings, submit rental requests, complete secure online payments, and leave reviews after successful rentals.

Administrators have complete control over the platform, including user management and moderation.

The application is fully responsive and built using modern web technologies with a focus on security, scalability, and user experience.

---

# ✨ Features

## 🌍 Public Features

- Browse all rental properties
- Property details page
- Advanced property search
- Category filtering
- Location filtering
- Price range filtering
- Amenities filtering
- Responsive UI
- Pagination

---

## 👤 Authentication

- User Registration
- Secure Login
- JWT Authentication
- HttpOnly Cookies
- Access Token
- Refresh Token
- Automatic Token Refresh
- Protected Routes
- Redirect to originally requested page after login
- Secure Logout

---

## 🏠 Tenant Features

- Browse rental properties
- Submit rental requests
- View rental history
- Complete Stripe payments
- Payment history
- Leave property reviews
- Manage profile

---

## 🏢 Landlord Features

- Dashboard
- Create property
- Edit property
- Delete property
- View rental requests
- Approve rental requests
- Reject rental requests
- Manage property availability
- Profile management

---

## 🛡️ Admin Features

- Dashboard
- View all users
- Search users
- Ban / Unban users
- User management
- Profile management

---

# 💳 Payment Integration

The application integrates **Stripe Checkout** for secure online payments.

Features include:

- Secure Checkout
- Success Page
- Cancel Page
- Payment Verification
- Payment History

---

# 🔐 Security

The application follows modern authentication and authorization practices.

- JWT Authentication
- Access Token
- Refresh Token
- HttpOnly Cookies
- Role-based Authorization
- Next.js Proxy Protection
- Protected Dashboard Routes
- Automatic Access Token Refresh

---

# 🛠 Tech Stack

## Frontend

- Next.js 15 (App Router)
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Hook Form
- Zod
- TanStack Query (React Query)
- Sonner
- Lucide React

---

## Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Stripe
- Bcrypt

---

# 📂 Folder Structure

```
src
│
├── app
├── components
├── services
├── hooks
├── lib
├── providers
├── utils
├── types
└── middleware (Proxy)
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/nio420/rentnest-frontend.git
```

Move into the project

```bash
cd rentnest-frontend
```

Install dependencies

```bash
npm install
```

Create a `.env.local` file

```env
NEXT_PUBLIC_BACKEND_API_URL=YOUR_BACKEND_URL

BACKEND_API_URL=YOUR_BACKEND_URL

JWT_ACCESS_SECRET=YOUR_ACCESS_SECRET

JWT_REFRESH_SECRET=YOUR_REFRESH_SECRET
```

Run the development server

```bash
npm run dev
```

---

# 🔑 Environment Variables

| Variable                    | Description        |
| --------------------------- | ------------------ |
| NEXT_PUBLIC_BACKEND_API_URL | Backend API URL    |
| BACKEND_API_URL             | Backend Server URL |
| JWT_ACCESS_SECRET           | JWT Access Secret  |
| JWT_REFRESH_SECRET          | JWT Refresh Secret |

---

# 👥 Roles

### Tenant

- Browse Properties
- Rental Request
- Payments
- Reviews

### Landlord

- Property Management
- Rental Approval
- Property Availability

### Admin

- User Management
- Ban / Unban Users

---

# 📡 API Documentation

The frontend consumes REST APIs provided by the backend.

Detailed endpoint mapping is available in:

```
API_INTEGRATION.md
```

---

# ⚠ Error Handling

The application includes comprehensive error handling.

- User-friendly toast notifications
- Inline form validation
- Zod validation
- React Hook Form validation
- Next.js Error Boundary
- Loading states
- Empty states

---

# 📱 Responsive Design

Fully responsive for:

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🎯 Future Improvements

- Real-time notifications
- Wishlist / Favorites
- Property image gallery
- Advanced analytics dashboard
- Multi-language support
- Email notifications

---

# 👨‍💻 Developer

**Naimul Islam Omit**

Portfolio:

> https://naimul-islam.vercel.app/

GitHub:

> https://github.com/nio420

Email:

> naimulislamomit2022@gmail.com

---

# 📄 License

This project was developed as part of the **Programming Hero Level 2 Assignment** for educational purposes.
