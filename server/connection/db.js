import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb+srv://${username}:${password}@suraj-mern-project.vlfl5nl.mongodb.net/
        `
        await mongoose.connect(URL)
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;

