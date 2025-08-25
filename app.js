/* git add .
git commit -m "msg"
git push -u origin main */
// git commit --amend -m "New message" - amend the last commit dropped

import express from 'express';

const app = express();
const port = 4789;

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/post', (req, res) => {
    res.render('article.ejs');
})

app.get('/all-articles', (req, res) => {
    res.render('all-articles.ejs');
})

app.get('/copy', (req, res) => {
    res.render('bookmark.ejs');
})

app.listen(port, () => {
    console.log('server running at port', port)
})