"use server";

import { supabase } from "@/utils/supabase";
import { revalidatePath } from "next/cache";

export const editStudent = async (id : any, values : FormData ) => {
    const email = values.get('email') as string;
    const username = values.get('username') as string;
    const instance = values.get('instance') as string;
    const phone = values.get('phone_number') as string;
    

    console.log(id);
    
    try {
    await supabase.from('students').update({
        email: email,
        username: username,
        instance: instance,
        phone_number: phone
    }).eq('id', id)
    revalidatePath('/students');
    } catch {
        console.log("gagal");
    }


    
}