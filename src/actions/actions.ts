"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function additemdata(formData: FormData) {
    const title = formData.get("item") as string
    console.log(title)
    await prisma.pantry.create({
        data: {
            title,
        }
    })
    revalidatePath("/")
    return { success: true }
}