"use server";

import { supabase } from "@/utils/supabase";
import { revalidatePath } from "next/cache";

export const deleteStudent = async (id : any) => { 
    try {
        await supabase.from('students').delete().eq('id', id)
        revalidatePath('/students');
    } catch {
        console.log("gagal");
    }
}