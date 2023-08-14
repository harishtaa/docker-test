import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    videoId:{
        type:Number,
        required:true
    },
    productId:{
        type:Number,
        required:true,
    },
    productUrl:{
        type:String,
        required:true
    },
    thumbnailUrl:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
}, {versionKey: false})

const product = mongoose.model('products', productSchema)
export default product;