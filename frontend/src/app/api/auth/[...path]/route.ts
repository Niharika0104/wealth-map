import { NextRequest, NextResponse } from 'next/server';

// Base URL of the backend API
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Helper function to forward the request to the backend
async function forwardRequest(
  req: NextRequest,
  path: string,
  requiresAuth: boolean = true
) {
  const url = `${API_URL}${path}`;
  
  // Clone the request headers
  const headers = new Headers(req.headers);
  
  // If this is a JSON request, set the content type
  if (!headers.has('Content-Type') && req.body) {
    headers.set('Content-Type', 'application/json');
  }
  
  try {
    // Forward the request to the backend
    const response = await fetch(url, {
      method: req.method,
      headers,
      body: req.body,
      cache: 'no-store',
    });
    
    // Get the response data
    const data = await response.json().catch(() => null);
    
    // Return the response with the same status code
    return NextResponse.json(data, {
      status: response.status,
      statusText: response.statusText,
    });
  } catch (error) {
    console.error(`Error forwarding request to ${url}:`, error);
    return NextResponse.json(
      { message: 'Failed to connect to backend service' },
      { status: 500 }
    );
  }
}

// Handler for ALL HTTP methods
export async function GET(
  req: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return forwardRequest(req, `/auth/${params.path.join('/')}`);
}

export async function POST(
  req: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return forwardRequest(req, `/auth/${params.path.join('/')}`);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return forwardRequest(req, `/auth/${params.path.join('/')}`);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return forwardRequest(req, `/auth/${params.path.join('/')}`);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return forwardRequest(req, `/auth/${params.path.join('/')}`);
}
