/* git add .
git commit -m "msg"
git push -u origin main */

import express from 'express';

const app = express();
const port = 4789;

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.get('/', (req, res) => {
    // const currentYear = new Date().getFullYear();
    res.render('index.ejs');
})

app.listen(port, () => {
    console.log('server running at port', port)
})
// git commit --amend -m "New message" - amend the last commit you just dropped