import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    cvFile: File,
    message: String,
    postedAt : {
        type:Date,
        default: new Date
    },
});

const PostData = mongoose.model('PostData', postSchema);

export default PostData;