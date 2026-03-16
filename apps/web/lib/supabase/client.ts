import { createClient } from '@supabase/supabase-js';
import { type Database } from '@/types/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase environment variables are missing');
}

// Client for browser usage
export const createBrowserSupabaseClient = () => createClient<Database>(supabaseUrl, supabaseKey);

// Simplified server-side client (no cookies/session handling in this starter)
export const createServerSupabaseClient = () => createClient<Database>(supabaseUrl, supabaseKey);
