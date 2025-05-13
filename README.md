# Wealth Management System with Authentication

This is a complete wealth management system with a robust authentication implementation including role-based access control, MFA, and session management.

## Features

### Authentication

- **User Registration**: New users register with their information and are set to PENDING status
- **Super Admin Approval**: Super admins must approve new users and assign them proper roles
- **Multi-Factor Authentication (MFA)**: 
  - TOTP-based authentication (Google Authenticator, Authy, etc.)
  - Email-based verification
  - SMS-based verification (for users with phone numbers)
- **Session Management**: Session-based authentication with a 1-hour expiry
- **Role-Based Access Control**:
  - SUPERADMIN: Full system access
  - ADMIN: Can manage employees and companies
  - USER: Limited access
  - EMPLOYEE: Assigned to a company
  - PENDING: Waiting for approval

### Technologies

- **Frontend**: Next.js 15 with React 19
- **Backend**: NestJS 11
- **Database**: PostgreSQL with Prisma ORM
- **Monorepo Structure**: 
  - frontend (Next.js)
  - backend (NestJS)
  - shared-prisma (Shared Prisma client and services)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- PostgreSQL database

### Setting Up the Database

1. Create a PostgreSQL database
2. Update the `DATABASE_URL` in both:
   - `backend/.env`
   - `shared-prisma/.env`

### Installation

```
# Install all dependencies
npm run install:all

# Set up the database (migrations and seed data)
npm run db:setup
```

### Running the Application

```
# Start both frontend and backend in development mode
npm run dev

# Build for production
npm run build

# Start in production mode
npm run start
```

### Default Super Admin Account

A default super admin account is created when seeding the database:

- Email: `superadmin@example.com`
- Password: `Admin@123`

## Authentication Flow

1. **Registration**: User registers and is set to PENDING status
2. **Approval**: Super admin approves the user and assigns a role
3. **Login**: User logs in with email and password
4. **MFA (if enabled)**: User completes MFA verification
5. **Session**: User receives a session token valid for 1 hour

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login
- `POST /api/auth/verify-mfa` - Verify MFA code during login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user info

### User Management (Admin Only)

- `GET /api/auth/pending-users` - Get users pending approval
- `POST /api/auth/change-role` - Change a user's role

### MFA

- `POST /api/auth/setup-mfa` - Start MFA setup
- `POST /api/auth/verify-mfa-setup` - Verify and complete MFA setup
- `POST /api/auth/disable-mfa` - Disable MFA

## License

ISC
