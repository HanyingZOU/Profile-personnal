import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cjohkgtnrbdfwsbxxrxa.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqb2hrZ3RucmJkZndzYnh4cnhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5MjA4ODUsImV4cCI6MTk4MzQ5Njg4NX0.jSdTwWqlja3teYGrF2tVlIpwh2Goy-SKYLN6LyCmMDI';
export const supabase = createClient(supabaseUrl, supabaseKey);
