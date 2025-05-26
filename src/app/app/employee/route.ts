import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  // Only redirect exact matches for /app/employee
  const url = new URL(request.url);
  if (url.pathname === '/app/employee') {
    // Redirect to home page
    redirect('/app/employee/home');
  }
  
  return new Response(null, { status: 404 });
}
