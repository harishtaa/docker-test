import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    videoId:{
        type:Number,
        required:true
    },
    judulVideo:{
        type:String,
        required:true
    },
    thumbnailUrl:{
        type:String,
        required:true
    },
    videoUrl:{
        type:String,
        required:true
    },
}, {versionKey: false})

const video = mongoose.model('videos', videoSchema)
export default video;