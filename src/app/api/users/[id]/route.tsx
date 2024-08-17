import { NextRequest, NextResponse } from "next/server"
import schema from '../schema';

interface Props {
    params: {id: number}
}

export function GET(request: NextRequest, {params: {id}}: Props){
    // fetch data from a db
    // if not found, return 404 error
    // else returnd data

    if (id > 10) 
        return NextResponse.json({error: 'User not found'},{status: 404});

    return NextResponse.json({id:1, name: 'ryan'});

}


export async function PUT(request: NextRequest, {params: {id}}: Props){
    //validate the request body
    // if invalide, return 400
    const body = await request.json();
    const validation = schema.safeParse(body);
    //if (!body.name)
    //return NextResponse.json({error: 'name is required'},{status: 400})
    if (!validation.success)
        return NextResponse.json(validation.error.errors,{status: 400});
    
    // if doesn't exits, return 404
    if (id>10) //exampel of if user doesn't exist... if user is over 10
        return NextResponse.json({error: 'User not found'},{status: 404});


    // fetch the user  with the given id    
    // update the user
    // return the updated user
    return NextResponse.json({id:1, name: body.name});

}


export function DELETE(request: NextRequest, {params: {id}}: Props) {
     // if doesn't exits, return 404
     if (id>10) //exampel of if user doesn't exist... if user is over 10
        return NextResponse.json({error: 'User not found'},{status: 404});


    //delete user from database 
    //return 200
    return NextResponse.json({status: 200});

}