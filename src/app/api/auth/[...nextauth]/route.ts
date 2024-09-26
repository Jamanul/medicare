import { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from "next-auth/next";

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
            }
        })
    ]
}


const handler =NextAuth(authOptions)

export {handler as GET ,handler as POST}