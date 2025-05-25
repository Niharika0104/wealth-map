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
  - Scheduled reports

- **AI Integration**
  - AI Assistant for property queries
  - Smart property analysis
  - Natural language processing

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
  - Redis for Caching

- **AI/ML**
  - Google Generative AI
  - CopilotKit
  - Groq SDK

## Prerequisites

- Node.js 18+
- PostgreSQL
- Redis
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

# Redis
REDIS_URL="redis://localhost:6379"

# AI Services
GOOGLE_AI_API_KEY="your-google-ai-key"
GROQ_API_KEY="your-groq-key"

# Map Services
MAPTILER_API_KEY="your-maptiler-key"

# Email (Optional)
RESEND_API_KEY="your-resend-key"
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

4. Seed the database:
```bash
npm run seed
```

5. Start the development server:
```bash
npm run dev
```

## API Documentation

### Authentication
All API endpoints require authentication unless specified otherwise. Include the session token in the request headers:
```http
Authorization: Bearer <session_token>
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```
Response:
```json
{
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "user@example.com",
    "role": "COMPANY_ADMIN",
    "permissions": ["property:view", "reports:create"]
  },
  "token": "session_token"
}
```

#### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "password123",
  "organizationId": "org_id"
}
```

### Property Management

#### Search Properties
```http
GET /api/property/query?q=search_term&page=1&limit=10
```
Query Parameters:
- `q`: Search term (optional)
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `filters`: JSON string of filters (optional)
  ```json
  {
    "priceRange": [100000, 500000],
    "propertyType": ["residential", "commercial"],
    "confidence": ["high", "medium"]
  }
  ```

Response:
```json
{
  "properties": [
    {
      "id": "prop_id",
      "address": "123 Main St",
      "city": "New York",
      "price": 450000,
      "type": "residential",
      "confidence": "high",
      "createdAt": "2024-03-20T10:00:00Z"
    }
  ],
  "total": 100,
  "page": 1,
  "limit": 10
}
```

#### Get Property Details
```http
GET /api/property/get
Content-Type: application/json

{
  "propertyId": "prop_id"
}
```
Response:
```json
{
  "property": {
    "id": "prop_id",
    "address": "123 Main St",
    "city": "New York",
    "price": 450000,
    "type": "residential",
    "confidence": "high",
    "owners": [
      {
        "id": "owner_id",
        "name": "John Doe",
        "ownershipType": "primary"
      }
    ],
    "bookmarks": 5,
    "views": 100,
    "createdAt": "2024-03-20T10:00:00Z",
    "updatedAt": "2024-03-20T10:00:00Z"
  }
}
```

### Reports

#### Create Report
```http
POST /api/reports
Content-Type: application/json

{
  "title": "Property Analysis Report",
  "description": "Analysis of residential properties in New York",
  "reportType": "pdf",
  "filters": {
    "propertyType": ["residential"],
    "city": ["New York"],
    "dateRange": {
      "start": "2024-01-01",
      "end": "2024-03-20"
    }
  },
  "fields": ["address", "price", "type", "confidence"]
}
```
Required Permissions: `reports:create`

Response:
```json
{
  "report": {
    "id": "report_id",
    "title": "Property Analysis Report",
    "status": "processing",
    "createdAt": "2024-03-20T10:00:00Z"
  }
}
```

#### Export Report
```http
GET /api/reports/export?id=report_id
```
Query Parameters:
- `id`: Report ID
- `format`: Export format (pdf, csv, excel, json)

Response:
- File download with appropriate content type
- For JSON format:
```json
{
  "report": {
    "id": "report_id",
    "title": "Property Analysis Report",
    "data": [
      {
        "address": "123 Main St",
        "price": 450000,
        "type": "residential",
        "confidence": "high"
      }
    ],
    "metadata": {
      "generatedAt": "2024-03-20T10:00:00Z",
      "totalProperties": 100,
      "filters": {
        "propertyType": ["residential"],
        "city": ["New York"]
      }
    }
  }
}
```

### Company Management

#### List Roles
```http
GET /api/company-admin/roles
```
Required Permissions: `users:view`

Response:
```json
{
  "roles": [
    {
      "id": "role_id",
      "name": "Property Analyst",
      "isSystem": false,
      "permissions": [
        {
          "id": "perm_id",
          "name": "property:view",
          "category": "property",
          "description": "View property details"
        }
      ]
    }
  ]
}
```

#### Update User Role
```http
PATCH /api/company-admin/employees/{employeeId}/role
Content-Type: application/json

{
  "roleId": "new_role_id"
}
```
Required Permissions: `users:create`

### System Settings

#### Get System Settings
```http
GET /api/system-settings
```
Required Permissions: `system:*`

Response:
```json
{
  "settings": {
    "systemName": "Wealth Management System",
    "timezone": "UTC",
    "maintenance": false,
    "features": {
      "aiAssistant": true,
      "propertyAnalytics": true,
      "reportScheduling": true
    }
  }
}
```

#### Update System Settings
```http
POST /api/system-settings
Content-Type: application/json

{
  "systemName": "New System Name",
  "timezone": "America/New_York",
  "maintenance": true,
  "features": {
    "aiAssistant": true,
    "propertyAnalytics": true,
    "reportScheduling": false
  }
}
```
Required Permissions: `system:*`

## Error Handling

All API endpoints follow a consistent error response format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {
      // Additional error details if available
    }
  }
}
```

Common Error Codes:
- `UNAUTHORIZED` (401): Authentication required
- `FORBIDDEN` (403): Insufficient permissions
- `NOT_FOUND` (404): Resource not found
- `VALIDATION_ERROR` (400): Invalid request data
- `INTERNAL_ERROR` (500): Server error

## Rate Limiting

API endpoints are rate-limited to prevent abuse:
- Authentication endpoints: 5 requests per minute
- Property endpoints: 60 requests per minute
- Report endpoints: 30 requests per minute
- System endpoints: 10 requests per minute

Rate limit headers are included in all responses:
```http
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
X-RateLimit-Reset: 1616245200
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

### Performance Optimization

1. **Memoization**
   ```typescript
   // Memoize expensive calculations
   const memoizedValue = useMemo(() => 
     expensiveCalculation(deps), 
     [deps]
   )
   ```

2. **Lazy Loading**
   ```typescript
   // Lazy load components
   const LazyComponent = dynamic(() => 
     import('./LazyComponent')
   )
   ```

## Testing Guidelines

### Unit Tests
```typescript
describe('Component', () => {
  it('should render correctly', () => {
    render(<Component />)
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
})
```

### Integration Tests
```typescript
describe('Export Flow', () => {
  it('should complete export process', async () => {
    // Test export flow
  })
})
```

## Deployment

### Build Process
```bash
# Production build
npm run build

# Development
npm run dev

# Testing
npm run test
```

### Environment Setup
```bash
# Required environment variables
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_AUTH_DOMAIN=
NEXT_PUBLIC_CLIENT_ID=
```