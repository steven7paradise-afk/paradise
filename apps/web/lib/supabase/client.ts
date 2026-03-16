import { createBrowserClient, createServerClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';
import { type Database } from '@/types/database';

export const createBrowserSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase environment variables are missing');
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseKey);
};

// Helper for server components/route handlers
export const createServerSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase environment variables are missing');
  }

  return createServerClient<Database>(supabaseUrl, supabaseKey, {
    cookies,
    headers
  });
};
