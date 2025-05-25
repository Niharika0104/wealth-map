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
  - NextAuth.js for Authentication

## Prerequisites

- Node.js 18+
- PostgreSQL
- Google AI API Key
- MapTiler API Key

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/wealth_map"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# AI Services
GOOGLE_AI_API_KEY="your-google-ai-key"
GROQ_API_KEY="your-groq-key"

# Map Services
MAPTILER_API_KEY="your-maptiler-key"
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

3. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

4. Start the development server:
```bash
npm run dev
```

## Component Architecture

### Core Components

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `PropertyExport` | Property data export | • Multi-format export (CSV, Excel, JSON)<br>• Field selection<br>• Property filtering<br>• Preview functionality |
| `ExportHistory` | Export management | • Export history tracking<br>• Format filtering<br>• Search functionality<br>• Download/Delete actions |
| `ReportingDashboard` | Report management | • Tab-based navigation<br>• Permission-based access<br>• Integrated reporting tools |

### Component Hierarchy

```
ReportingDashboard
├── PropertyExport
│   ├── PropertyList
│   │   ├── PropertySearch
│   │   └── PropertyFilter
│   └── ExportOptions
│       ├── FormatSelector
│       └── FieldSelector
├── ExportHistory
│   ├── ExportTable
│   │   ├── SearchBar
│   │   └── FormatFilter
│   └── DeleteDialog
└── CustomReports
    ├── ReportBuilder
    └── ScheduleManager
```

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

## Deployment

### Build Process
```bash
# Production build
npm run build

# Development
npm run dev
```

### Environment Setup
```bash
# Required environment variables
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_AUTH_DOMAIN=
NEXT_PUBLIC_CLIENT_ID=
```