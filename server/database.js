import mongoose from 'mongoose';

console.log("here")
console.log(process.env.DB_HOST)

mongoose.connect(`${process.env.DB_HOST}`);
export default mongoose.connection;