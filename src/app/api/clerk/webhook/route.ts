import { db } from "@/server/db"
import { EmailAddress } from "@clerk/nextjs/server"
export const POST =async(req:Request) => { 
    const{data}=await req.json() 
    console.log('clerk webhook received',data) 
    const emailAddress = data.email_addresses?.[0]?.email_address || "No email provided"; 
    const firstName=data.first_name 
    const lastName=data.last_name
    const imageUrl=data.image_url 
    const id=data.id 

    await db.post.create({ 
        data:{ 
            id: id, 
            emailAddress: emailAddress, 
            firstName:firstName, 
            lastName:lastName, 
            imageUrl:imageUrl,

        }
    }) 
    console.log('user created')
    return new Response('Webhook received',{status:200})
}