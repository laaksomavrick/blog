import mongoose from 'mongoose';
mongoose.connect(`${process.env.DB_HOST}`);
export default mongoose.connection;
