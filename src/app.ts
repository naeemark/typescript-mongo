import * as express from "express";

const app = express();
app.set("port", 3000);

app.get('/', (req: any, res: any) => {
    res.send({ greeting: 'Hello World...!' });
});

app.listen(app.get('port'), () => {
    console.log('Application is runing on port:' + app.get('port'));
});