import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string
)

export const searchUsers = async (searchTerm: string) => {
    // Ambil data dari Supabase dengan pencarian
    const { data, error } = await supabase
      .from('students')
      .select('*')
      .ilike('username', `%${searchTerm}%`); // Filter pencarian
  
    if (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  
    return data;
  };