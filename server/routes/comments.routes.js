import express  from "express";
import Comment from "../modules/comments.js"
const route = express.Router();

route.get('/:videoId', async (req, res) =>{
    const videoId = req.params.videoId
    try{
        const results  = await Comment.find({videoId:videoId})
        res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

route.post('/', async (req, res) =>{
    const {videoId, username, comment} = req.body
    try{
        const c = await new Comment({
            videoId,
            username,
            comment,
            timestamp: new Date()
        }).save()
        res.status(201).json(c)
    }catch(e){
        res.status(400).json({"errorMessagge": "Invalid State"})
    }
})


export default route