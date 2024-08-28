"use server";

import { redis } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export async function checkAuthStatus(){
    const {getUser} = getKindeServerSession()
    const user = await getUser();

    if(!user) return {success : false};

    //Namespaces

    const userId = `user:${user.id}`;

    const existingUser = await redis.hgetall(userId);

    //signup case

    if(!existingUser || Object.keys(existingUser).length === 0){

        const imgisNull = user.picture?.includes("gravatar");
        const image = imgisNull ? "" : user.picture;

        await redis.hset(userId , {
            id : user.id,
            email : user.email,
            name :`${user.given_name} ${user.family_name}`,
            image : image
        })

    }

    return {success : true };
}