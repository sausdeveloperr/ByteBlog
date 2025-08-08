/* git add .
git commit -m "msg"
git push -u origin main */

import express from 'express';

const app = express();
const port = 9090;

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('ByteBlog is up and running')
})

app.listen(port, () => {
    console.log('server running at port', port)
})