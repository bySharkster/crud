import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL! ||
      "https://jitkdywsfotuqfneyjog.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdGtkeXdzZm90dXFmbmV5am9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2OTkzMjAsImV4cCI6MjAzNTI3NTMyMH0.LgUiGiKrFZiZmu8eI1hlBfo14Q0Fk1DfYX4je0VGd4k"
  );
