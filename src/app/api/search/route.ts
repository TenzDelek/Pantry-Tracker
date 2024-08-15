import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");
    
    if (typeof query !== "string") {
        return NextResponse.json({ error: "Query must be a string" }, { status: 400 });
    }
    
    const posts = await prisma.pantry.findMany({
        where: { title: { contains: query, mode: "insensitive" } },
    });
    console.log(`the post is {${posts}}`)
    return NextResponse.json({ posts }, { status: 200 });
}