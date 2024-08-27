import { NextRequest, NextResponse } from "next/server"
import schema from '../schema';
import prisma from "../../../../../prisma/client";

interface Props {
    params: {id: string}
}

export async function GET(request: NextRequest, {params}: Props){
    // fetch data from a db
    // if not found, return 404 error
    // else returnd data
    const user = await prisma.user.findUnique({
        //this has to be parsed to a number because the original id 
        // is a string because that's what it gets from the url
        where: { id: parseInt(params.id) },
    });

    if (!user) 
        return NextResponse.json({error: 'User not found'},{status: 404});

    return NextResponse.json({id:user.id, name: user.name});

}

//PUT edits row on table - POST creates data
export async function PUT(request: NextRequest, {params}: Props){
    //validate the request body
    // if invalide, return 400
    const body = await request.json();
    const validation = schema.safeParse(body);
    //if (!body.name)
    //return NextResponse.json({error: 'name is required'},{status: 400})
    if (!validation.success)
        return NextResponse.json(validation.error.errors,{status: 400});
    

    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    });

    // if doesn't exits, return 404
    if (!user) //exampel of if user doesn't exist... if user is over 10
        return NextResponse.json({error: 'User not found'},{status: 404});


    // fetch the user  with the given id    
    // update the user
    // return the updated user
    //return NextResponse.json({id:1, name: body.name});

    const updatedUser = await prisma.user.update({
        where: {id: user.id},
        data: {
            name: body.name,
            email: body.email 
        }
    });

    return NextResponse.json(updatedUser);
}


export async function DELETE(request: NextRequest, {params}: Props) {
    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    }); 
    
    // if doesn't exits, return 404
     if (!user) //exampel of if user doesn't exist... if user is over 10
        return NextResponse.json({error: 'User not found'},{status: 404});

    await prisma.user.delete({
        where: {id: user.id}
    });

    //delete user from database 
    //return 200
    return NextResponse.json({});

}