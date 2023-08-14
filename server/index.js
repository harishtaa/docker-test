import express  from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import VideosRouter from "./routes/videos.routes.js"
import ProductsRouter from "./routes/products.routes.js"
import CommentsRouter from "./routes/comments.routes.js"
import cors from "cors"

dotenv.config();



const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('/videos', VideosRouter)
app.use('/products', ProductsRouter)
app.use('/comments', CommentsRouter)

app.listen(5000, () => {
    console.log(`Server started at ${5000}`)
})

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;

db.on('error', (err) => {
    console.error("Failed to connect",err)
})

db.once('connected', () => {
    console.info("database connected")
})