import { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from "next-auth/next";
import { connectDb } from "@/app/lib/ConnectDb";
const bcrypt = require('bcrypt');

export const authOptions:NextAuthOptions ={
    secret: "",
    session:{
        strategy: 'jwt',
        maxAge: 24*60*60*30
    },
    providers :[
        CredentialsProvider({
            credentials: {
                email: {},
                password:{}
            },
            async authorize(credentials){
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                  };
                if(!email || !password){
                    return null
                }
                const db = await connectDb()
                const usersCollection = db.collection('users')
                const currentUser = await usersCollection.findOne({email:email})
                if(!currentUser){
                    return null
                }
                const passwordMatch = bcrypt.compareSync(password, currentUser.password);
                if(!passwordMatch){
                    return null
                }

                return {
                    id: currentUser._id.toString(),
                    email: currentUser.email,
                    name: currentUser.name,
                  };
            }
        })
    ]
}


const handler =NextAuth(authOptions)

export {handler as GET ,handler as POST}