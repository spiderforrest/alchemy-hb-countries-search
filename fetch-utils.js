const SUPABASE_URL = 'https://yyafrnrhvbvehifltlkl.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5YWZybnJodmJ2ZWhpZmx0bGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU5NDA2NDEsImV4cCI6MTk3MTUxNjY0MX0.xMaK7QxF8ut26HwnOeZONCj9728N9XXm0bIknwpAUtg';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCountries(continent) {
    // Fetch from countries table (get all columns, order by country name, limit query to 100 countries)(Slice A)
    let query = client.from('countries').select('*').order('name').limit(100);

    // query for continent; conditionally add filters if continent exists (Slice C)
    if (continent) {
        query = query.eq('continent', continent);
    }
    // await the query and set to a response variable (Slice A)
    const response = await query;
    // return the response (Slice A)
    return response;
}

export async function getContinents() {
    // Slice B: write an awaited client query to country_continent table and get all columns
    // Slice B: return the response
}
