import mongoose from 'mongoose';

const msgSchema = new mongoose.Schema({
    msgContent: {
        type : String,
        default : null
    },
    targetTime: {
        type : Date,
        default : null
    }
},{timestamps : true});

export default mongoose.model('Message', msgSchema);