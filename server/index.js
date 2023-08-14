import express  from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import VideosRouter from "./routes/videos.routes.js"
import ProductsRouter from "./routes/products.routes.js"
import CommentsRouter from "./routes/comments.routes.js"
import cors from "cors"
const logger = require('./logger/server.logger.js');

console.log('environment    ', process.env.ENVIRONMENT)
console.log('PORT    ', process.env.PORT)
console.log('MONGO_CONNECTION_STRING    ', process.env.MONGO_CONNECTION_STRING)
if(process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config()
}


const app = express();
const port = process.env.PORT || 3080;
const path = require('path');
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.static(path.join(__dirname, './client/build')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('/videos', VideosRouter)
app.use('/products', ProductsRouter)
app.use('/comments', CommentsRouter)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})

const url = process.env.MONGO_CONNECTION_STRING;
logger.info("process.env.MONGO_CONNECTION_STRING :::" + process.env.MONGO_CONNECTION_STRING);

mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

mongoose.connection.once("open", async () => {
    logger.info("Connected to database");
});

mongoose.connection.on("error", (err) => {
    logger.error("Error connecting to database  ", err);
});