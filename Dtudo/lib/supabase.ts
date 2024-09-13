import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rnydzeaktnkeyhtyiool.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJueWR6ZWFrdG5rZXlodHlpb29sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMjg3MjYsImV4cCI6MjA0MTgwNDcyNn0.uXliHervQQVxV7ajY1j6eL0hT_Oc3i3_d8FUxOAvKrY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})