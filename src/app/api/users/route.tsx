//route.tsx files are used for http requests
// GET - getting data
// POST - creating data
// PUT - updating data

import { NextRequest, NextResponse } from "next/server";
import schema from './schema'

//no6 using the request input parameter... but nextjs will
// cache the data if this parameter is not there
export function GET(request: NextRequest){
    //fetch users from db

    //hardcoding for now
    return NextResponse.json([
        {id: 1, name: 'ryan'},
        {id: 2, name: 'bob'}
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

    return NextResponse.json({id:1, name: body.name}, {status: 201});

}