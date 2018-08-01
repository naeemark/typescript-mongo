import * as mongoose from 'mongoose';

const uri: string = 'mongodb://127.0.0.1:27017/local';

mongoose.connect(uri, { useNewUrlParser: true }, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('MongoDb connection successful!')
    }
});


export const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    author: { type: String, required: true },
});

const Book = mongoose.model('Book', BookSchema);
export default Book;