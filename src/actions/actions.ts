"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function additemdata(formdata:FormData){
    const title= formdata.get("item") as string
    console.log(title)
    await prisma.pantry.create({
        data:{
            title,
            
        }
    })
    revalidatePath("/")
}
