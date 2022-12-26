import mongoose from 'mongoose';

export async function connect() {
    return mongoose.connect(
        'mongodb://localhost:27017/basic-api',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
}


export function disconnect() {
    console.log('Desconectando do MongoDB');
    mongoose.disconnect();
}
