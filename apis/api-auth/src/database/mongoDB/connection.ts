// connect to mongoDB using mongoose

import mongoose from 'mongoose';



const connect = async (MONGO_URL: string | any) => {
    try {
        console.log('MongoDB is Connecting', MONGO_URL)
        await mongoose.connect(MONGO_URL);
        console.log('MongoDB is Connected');
    } catch (error) {
        console.log(error);
    }
};

export default connect;
