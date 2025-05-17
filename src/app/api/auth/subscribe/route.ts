import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { authClient } from '@/lib/auth-client';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  try {
    // Get all cookies from the request
    const cookieStore = cookies();
    const cookieHeader = request.headers.get('cookie') || '';

    // Get headers from the request
    const authHeaders = {
      cookie: cookieHeader,
      'user-agent': request.headers.get('user-agent') || '',
      'x-forwarded-for': request.headers.get('x-forwarded-for') || '',
      'x-real-ip': request.headers.get('x-real-ip') || '',
    };

    console.log('Auth headers:', {
      cookie: authHeaders.cookie ? 'present' : 'missing',
      'user-agent': authHeaders['user-agent'] ? 'present' : 'missing',
    });

    // Try to get the session using server-side auth
    const session = await auth.api.getSession({
      headers: authHeaders
    });

    console.log('Session check:', {
      hasSession: !!session,
      hasUser: !!session?.user,
      userId: session?.user?.id,
    });

    if (!session?.user) {
      console.error('Unauthorized: No valid session found');
      return NextResponse.json(
        { error: 'Unauthorized - No valid session' },
        { status: 401 }
      );
    }

    // Set up SSE (Server-Sent Events) response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        // Send initial connection established message
        controller.enqueue(encoder.encode('data: {"event":"connected"}\n\n'));

        // Set up a simple heartbeat to keep the connection alive
        const heartbeat = setInterval(() => {
          controller.enqueue(encoder.encode('data: {"event":"heartbeat"}\n\n'));
        }, 30000); // Send heartbeat every 30 seconds

        // Clean up when client disconnects
        request.signal.addEventListener('abort', () => {
          clearInterval(heartbeat);
          controller.close();
        });
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      }
    });
  } catch (error) {
    console.error('Auth subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 