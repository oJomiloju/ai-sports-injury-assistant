// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uxjukhaxkhquntvvmhoj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4anVraGF4a2hxdW50dnZtaG9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0OTE2NzgsImV4cCI6MjA2MDA2NzY3OH0.v5RwUcg6KrMpHZLdFDWd_vHhpIMyoVxdszV8Af4mU7w";

export const supabase = createClient(supabaseUrl, supabaseKey);
