import mongoose from 'mongoose';
const URL = 'mongodb+srv://amit:a123456@cluster0.7oqf0tl.mongodb.net/codedb?retryWrites=true&w=majority';
const promise = mongoose.connect(URL);
promise.then(data=>{
    console.log('DB Connection Done...');
}).catch(err=>{
    console.log('Error in DB Connection ', err);
})
export default mongoose;