import { createClient } from "@supabase/supabase-js";

const URL = "https://quhcfogbjfjggbtevztl.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1aGNmb2diamZqZ2didGV2enRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5Njc3MDksImV4cCI6MjAyODU0MzcwOX0.yEMFvN1qpLmV3LQbl2l2kA-_xfW74-6E3KkIBDkl5x8";
export const supabase = createClient(URL, API_KEY);