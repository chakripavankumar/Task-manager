import app from "./app";
import 'dotenv/config'
import connectDB from "./db";
import { env } from "./env";


const PORT = env.PORT ?? 3001

connectDB().then(() => app.listen(PORT , () =>{
     console.log(`server running on ${env.BASEURL}:${PORT}`)
}))