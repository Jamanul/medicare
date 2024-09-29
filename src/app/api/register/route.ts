import { connectDb } from "@/app/lib/ConnectDb";
import { Collection, Db } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

interface User {
    email?: string,
    password?: string,
    name?: string
}

export const POST =async(req:NextRequest):Promise<NextResponse>=>{
    try {
        const user:User =await req.json()
        const {email} =user
        const db =await connectDb()
        const usersCollection:Collection<User> = db.collection("users")
        const isExist =await usersCollection.findOne({email: email})
        if(isExist){
            return NextResponse.json('user already exist')
        }
        const result = await usersCollection.insertOne(user)
        return NextResponse.json(result)
    } catch (error) {
        console.log(error)
        throw new Error('You got a problem while registering.')
    }
}