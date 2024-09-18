import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ekujsfnsbkpzbjhuhwpn.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrdWpzZm5zYmtwemJqaHVod3BuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2MDA4NjcsImV4cCI6MjA0MjE3Njg2N30.CTRyFRFRsozBkBMGCEGUZLoqWKZQoyJOT0B4O7s1Je8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
