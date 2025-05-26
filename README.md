# Wealth Map

A comprehensive wealth management and property analysis platform built with Next.js, Prisma, and modern web technologies.

## Features

- **Role-Based Access Control (RBAC)**
  - SUPER_ADMIN: Full system access
  - COMPANY_ADMIN: Company-level management
  - EMPLOYEE: Basic access with customizable permissions

- **Property Management**
  - Property search and filtering
  - Property details and analytics
  - Bookmarking system
  - Trending properties

- **Reporting System**
  - Custom report generation
  - Export in multiple formats (CSV, Excel, JSON)
  - Report history and management
  - Export preview functionality

## Tech Stack

- **Frontend**
  - Next.js 15
  - React 18
  - Tailwind CSS
  - Radix UI Components
  - Framer Motion
  - Recharts

- **Backend**
  - Next.js API Routes
  - Prisma ORM
  - PostgreSQL Database
  - NextAuth.js v5 for Authentication

## Prerequisites

- Node.js 20+
- PostgreSQL 15+
- Redis (for caching)
- Google AI API Key
- GROQ API Key
- MapTiler API Key

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/wealth_map"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
AUTH_SECRET="your-secret-key"

# Redis Cache
REDIS_URL="redis://localhost:6379"

# AI Services
GOOGLE_AI_API_KEY="your-google-ai-key"
GROQ_API_KEY="your-groq-key"

# Map Services
MAPTILER_API_KEY="your-maptiler-key"

# Email (Optional for email-based features)
RESEND_API_KEY="your-resend-api-key"
EMAIL_FROM="no-reply@your-domain.com"
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/wealth-map.git
cd wealth-map
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database and generate Prisma client:
```bash
npx prisma generate
npx prisma migrate dev
```

4. Seed the database with initial data:
```bash
npm run seed
```

5. Start the development server:
```bash
npm run dev
```

6. Access the application:
   - Open your browser and navigate to `http://localhost:3000`
   - Default login credentials:
     - Email: `admin@example.com`
     - Password: `password123`

## Project Architecture

### Directory Structure

```
wealth-map/
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router components
│   │   ├── api/          # API routes
│   │   ├── app/          # Main application routes
│   │   │   ├── employee/ # Employee-specific pages
│   │   │   ├── company-admin/ # Company admin pages
│   │   │   └── super-admin/ # Super admin pages
│   │   └── auth/         # Authentication pages
│   ├── components/       # React components
│   │   ├── custom-components/ # Application-specific components
│   │   └── ui/           # UI component library
│   ├── hooks/            # React hooks
│   ├── lib/              # Utility functions and libraries
│   ├── Models/           # TypeScript models and interfaces
│   ├── services/         # API service classes
│   ├── stores/           # Global state management
│   ├── types/            # TypeScript type definitions
│   └── middleware.ts     # Next.js middleware for auth and routing
```

### Core Components

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `AppSidebar` | Main navigation | • Role-based navigation items<br>• Collapsible UI<br>• User profile integration |
| `PropertyExport` | Property data export | • Multi-format export<br>• Field selection<br>• Preview functionality |
| `InteractiveMap` | Property visualization | • MapTiler integration<br>• Property filtering<br>• Custom markers |
| `HomePage` | Employee dashboard | • Property search<br>• Saved views<br>• Analytics dashboard |

### Authentication Flow

1. **Login Process**
   - User enters credentials
   - Server validates credentials and checks 2FA status
   - Session token generated and stored
   - User redirected based on role

2. **Authorization Flow**
   - Middleware checks user session
   - Routes protected based on role
   - Permission-based component rendering
   - API routes secured by permission checks

## Data Flow

### Export Process
1. **Selection Phase**
   - User selects properties
   - Chooses export format
   - Selects fields to export

2. **Processing Phase**
   - Data validation
   - Format conversion
   - File generation

3. **Storage Phase**
   - Save to export history
   - Generate download URL
   - Update UI state

### API Integration

```typescript
// Example API endpoints
POST /api/reports/export
GET /api/reports/export
DELETE /api/reports/export?id={id}
```

## Development Guidelines

### Code Style

1. **Component Structure**
   ```typescript
   // Component template
   export default function ComponentName() {
     // 1. Hooks and state
     const [state, setState] = useState()
     
     // 2. Helper functions
     const helperFunction = () => {}
     
     // 3. Event handlers
     const handleEvent = () => {}
     
     // 4. Render
     return (
       <div>
         {/* JSX */}
       </div>
     )
   }
   ```

2. **Permission Checks**
   ```typescript
   // Always wrap permission-dependent components
   <WithPermission permission="required:permission">
     <Component />
   </WithPermission>
   ```

### State Management

1. **Local State**
   - Use `useState` for component-level state
   - Use `useReducer` for complex state logic

2. **Global State**
   - Use context for shared state
   - Implement proper state updates

### Error Handling

1. **API Errors**
   ```typescript
   try {
     const response = await fetch('/api/endpoint')
     if (!response.ok) {
       throw new Error('API Error')
     }
   } catch (error) {
     toast({
       title: "Error",
       description: "User-friendly message",
       variant: "destructive"
     })
   }
   ```

2. **Validation**
   ```typescript
   // Input validation
   const validateInput = (input: string) => {
     if (!input) {
       throw new Error('Required field')
     }
   }
   ```

## Permissions and Access Control

### Role Hierarchy

| Role | Description | Key Capabilities |
|------|-------------|-----------------|
| SUPER_ADMIN | System-level access | • Manage all companies and users<br>• Access all features and settings<br>• Create system-wide roles<br>• Override any permission |
| COMPANY_ADMIN | Company-level access | • Manage company employees<br>• Access company properties and reports<br>• Create company-specific roles<br>• Manage company settings |
| EMPLOYEE | Basic access | • Access assigned properties<br>• View permitted reports<br>• Customizable permissions<br>• Role-based access |

### Permission Matrix

| Category | Permission | Description | SUPER_ADMIN | COMPANY_ADMIN | EMPLOYEE |
|----------|------------|-------------|-------------|---------------|----------|
| **System** | `system:*` | Full system access | ✓ | - | - |
| | `system:settings` | View/modify settings | ✓ | - | - |
| | `system:maintenance` | Maintenance controls | ✓ | - | - |
| | `system:logs` | Access system logs | ✓ | - | - |
| **Property** | `property:*` | Full property access | ✓ | ✓ | - |
| | `property:view` | View properties | ✓ | ✓ | ✓ |
| | `property:search` | Search properties | ✓ | ✓ | ✓ |
| | `property:create` | Create properties | ✓ | ✓ | - |
| | `property:edit` | Edit properties | ✓ | ✓ | - |
| | `property:delete` | Delete properties | ✓ | ✓ | - |
| | `property:bookmark` | Bookmark properties | ✓ | ✓ | ✓ |
| **Reports** | `reports:*` | Full report access | ✓ | ✓ | - |
| | `reports:view` | View reports | ✓ | ✓ | ✓ |
| | `reports:create` | Create reports | ✓ | ✓ | ✓ |
| | `reports:edit` | Edit reports | ✓ | ✓ | - |
| | `reports:delete` | Delete reports | ✓ | ✓ | - |
| | `reports:export` | Export reports | ✓ | ✓ | ✓ |
| | `reports:schedule` | Schedule reports | ✓ | ✓ | - |
| **Users** | `users:*` | Full user management | ✓ | - | - |
| | `users:view` | View users | ✓ | ✓ | - |
| | `users:create` | Create users | ✓ | ✓ | - |
| | `users:edit` | Edit users | ✓ | ✓ | - |
| | `users:delete` | Delete users | ✓ | - | - |
| | `users:roles` | Manage roles | ✓ | ✓ | - |
| **Company** | `company:*` | Full company access | ✓ | ✓ | - |
| | `company:view` | View company info | ✓ | ✓ | - |
| | `company:edit` | Edit company | ✓ | ✓ | - |
| | `company:employees` | Manage employees | ✓ | ✓ | - |
| | `company:roles` | Manage roles | ✓ | ✓ | - |

### Permission Implementation

```typescript
// Example permission check in API route
const hasPermission = user.roles.some(role =>
  role.permissions.some(p => p.name === "property:view")
);

// Example permission check in React component
<WithPermission permission="reports:create">
  <ExportButton />
</WithPermission>

// Example conditional rendering
{hasPermission("property:edit") && (
  <EditPropertyButton />
)}
```

### Best Practices

1. **Least Privilege**
   - Assign minimum required permissions
   - Regular permission audits
   - Remove unused permissions

2. **Security**
   - Validate on both client and server
   - Use middleware for checks
   - Log permission changes

3. **Role Design**
   - Create roles based on job functions
   - Use descriptive role names
   - Document permission assignments

4. **Maintenance**
   - Regular permission audits
   - Update roles as requirements change
   - Document permission changes

## Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Ensure PostgreSQL is running
   - Verify DATABASE_URL in .env file
   - Check for correct database credentials
   ```bash
   # Test database connection
   npx prisma db pull
   ```

2. **Authentication Issues**
   - Verify NEXTAUTH_SECRET is set
   - Check user roles and permissions
   - Clear browser cookies and try again
   - Ensure email verification is working (if enabled)

3. **Map Not Loading**
   - Verify MAPTILER_API_KEY is valid
   - Check browser console for errors
   - Ensure MapTiler account has sufficient quota

4. **AI Features Not Working**
   - Verify AI API keys are valid
   - Check usage limits on AI service providers
   - Look for specific error messages in server logs

### Debugging

```bash
# Check Prisma database connection
npx prisma db pull

# Reset database (development only)
npx prisma migrate reset

# Validate environment variables
node -e "console.log(process.env.DATABASE_URL)"

# Check for TypeScript errors
npx tsc --noEmit
```

## Deployment

### Build and Start Production Server
```bash
# Build the application
npm run build

# Start the production server
npm run start
```

### Continuous Integration/Deployment
For CI/CD setup, you can use services like Vercel, Netlify, or a custom pipeline:

#### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure environment variables in the Vercel dashboard
3. Deploy automatically on push to main branch

#### Docker Deployment
```bash
# Build Docker image
docker build -t wealth-map .

# Run Docker container
docker run -p 3000:3000 --env-file .env.production wealth-map
```

### Database Migration in Production
```bash
# Apply migrations to production database
npx prisma migrate deploy

# If needed, seed production data
NODE_ENV=production npm run seed
```

### Important Production Considerations
- Set up proper database backups
- Configure Redis for production with authentication
- Use a reverse proxy like Nginx for SSL termination
- Implement rate limiting for API endpoints
- Set up monitoring and error tracking