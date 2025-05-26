import { redirect } from 'next/navigation';

export async function GET() {
  // Redirect to home page
  redirect('/app/employee/home');
}
