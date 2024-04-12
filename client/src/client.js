import { createClient } from "@supabase/supabase-js";

const URL = "https://gfsnrakuywzcbtzyuwfj.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdmc25yYWt1eXd6Y2J0enl1d2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0Mjc1NTcsImV4cCI6MjAyODAwMzU1N30.JEAvz6cEHU2NrIbX2ca5i31rfFzhvxqiNaNwStjoTuI";
export const supabase = createClient(URL, API_KEY);