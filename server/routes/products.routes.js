import express  from "express";
import Product from "../modules/products.js"
const route = express.Router();


route.get('/', async (req, res) =>{
    try{
        const results  = await Product.find()
        res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

route.get('/:productId', async (req, res) =>{
    const productId = req.params.productId
    try{
        const results  = await Product.find({productId:productId})
        res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

route.get('/video/:videoId', async (req, res) =>{
    const videoId = req.params.videoId
    try{
        const results  = await Product.find({videoId:videoId})
        res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

route.post('/', async (req, res) =>{
    const {videoId,thumbnailUrl, productUrl,title,price} = req.body
    try{
        const results  = await Product.find({videoId:videoId})
        const p = await new Product({
            videoId,
            productId: results.length+1,
            productUrl,
            thumbnailUrl,
            title,
            price
        }).save()
        res.status(201).json(p)
    }catch(e){
        res.status(400).json({"errorMessagge": "Invalid State"})
    }
})

route.patch('/:id', async (req,res) => {
    const id = req.params.id;
    const body = req.body;
    try{
        const product = await Product.findOneAndUpdate(
            {productId:id},{$set:body}, {new: true}
        );
        res.send(product)
    }catch(e){
        res.status(400).json({message: e.message})
    }
})

route.delete('/:videoId/:productId', async (req, res) => {
    const { videoId, productId } = req.params;
    try {
        const product = await Product.findOneAndDelete({ videoId:videoId, productId: productId });
        res.send(product);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

export default route