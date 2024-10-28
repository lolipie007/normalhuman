import { db } from "./server/db";

await db.post.create({ 
    data: { 
        emailAddress: "test@gmail.com", 
        firstName:"pratik", 
        lastName:"vimal"

    }
}) 
console.log('done')