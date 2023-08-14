import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    videoId:{
        type:Number,
        required:true
        
    },
    username:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        required:true
    },
}, {versionKey: false})

const comment = mongoose.model('comments', commentSchema)
export default comment;