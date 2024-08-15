"use server";

import { supabase } from "@/utils/supabase";
import { revalidatePath } from "next/cache";


export const addStudent = async (values : FormData) => {
    const email = values.get('email') as string;
    const username = values.get('username') as string;
    const instance = values.get('instance') as string;
    const phone = values.get('phone') as string;

    console.log("Received Data:", { email, username, instance, phone });
    
    // Cek apakah ada nilai yang tidak diterima
    if (!email || !username || !instance || !phone) {
        console.log("Missing data, not inserting into database");
        return;
    }

    const { error } = await supabase.from('students').insert({
        email: email,
        username: username,
        instance: instance,
        phone_number: phone
    });

    if (error) {
        console.error("Error inserting data:", error.message);
    } else {
        console.log("Data inserted successfully");
    }

    revalidatePath('/students');
}
