import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";



export function GET(request: NextRequest){
    //fetch users from db

    //hardcoding for now
    return NextResponse.json([
        {id: 1, name: 'milk', price: 2.5},
        {id: 1, name: 'bread', price: 3.5},
    ]);
}

export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = schema.safeParse(body);
    //validate
    // if invalid, return 400
    // else, return
    // if (!body.name)
    //     return NextResponse.json({error: 'Name is required'}, {status: 400});
    if (!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400});

    return NextResponse.json({id:1, name: body.name, price: body.price}, {status: 201});

}