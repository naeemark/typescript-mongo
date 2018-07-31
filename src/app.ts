import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as bookController from './controllers/bookController';

const app = express();
app.set("port", 3000);
app.use(bodyParser.json());

app.get('/', (req: any, res: any) => {
    res.send({ greeting: 'Hello World...!' });
});

app.get('/books', bookController.getBooks);
app.get('/book/:id', bookController.getBook);
app.put('/book', bookController.addBook);
app.delete('/book/:id', bookController.deleteBook);
app.post('/book/:id', bookController.updateBook);

app.listen(app.get('port'), () => {
    console.log('Application is runing on port:' + app.get('port'));
});