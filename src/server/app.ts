import express from 'express';
import path from 'path';
import router from './routes';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', router)

app.listen(3000, () => {
    console.log('App listening on port 3000...')
});
