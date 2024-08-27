//route.tsx files are used for http requests
// GET - getting data
// POST - creating data
// PUT - updating data

import { NextRequest, NextResponse } from "next/server";
import schema from './schema';
import prisma from "../../../../prisma/client";


//no6 using the request input parameter... but nextjs will
// cache the data if this parameter is not there
export async function GET(request: NextRequest){
    //fetch users from db
    const users = await prisma.user.findMany();
    //hardcoding for now
    return NextResponse.json(users);
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

    const user = await prisma.user.findUnique({
        where: {email: body.email}
    });

    if (user)
        return NextResponse.json({error: "User already exists"}, {status: 400});

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    });

    return NextResponse.json(newUser, {status: 201});

}