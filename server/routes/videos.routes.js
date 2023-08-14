import express  from "express";
import Video from "../modules/videos.js"
const route = express.Router();

route.get('/', async (req, res) =>{
    try{
        const results  = await Video.find()
        res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

route.get('/:videoId', async (req, res) =>{
    const videoId = req.params.videoId
    try{
        const results  = await Video.findOne({videoId:videoId})
        res.json(results)
        console.log(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})


route.post('/', async (req, res) =>{
    const {videoId, judulVideo, thumbnailUrl, videoUrl} = req.body
    try{
        const results  = await Video.find()
        const v = await new Video({
            videoId: results.length+1,
            judulVideo,
            thumbnailUrl,
            videoUrl
        }).save()
        res.status(201).json(v)
    }catch(e){
        res.status(400).json({"errorMessagge": "Invalid State"})
    }
})

route.patch('/:id', async (req,res) => {
    const id = req.params.id;
    const body = req.body;
    try{
        const video = await Video.findOneAndUpdate(
            {videoId:id},{$set:body}, {new: true}
        );
        res.send(video)
    }catch(e){
        res.status(400).json({message: e.message})
    }
})

route.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const video = await Video.findOneAndDelete({ videoId: id });
        res.send(video);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

export default route