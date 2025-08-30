/* git add .
git commit -m "msg"
git push -u origin main */
// git commit --amend -m "New message" - amend the last commit dropped

import express from 'express';
// import seedPosts from './data/seedPosts'; This
// import { seedPosts } from './data/seedPosts'; or That?

const app = express();
const port = 4789;

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/view-article', (req, res) => {
    // const mockPosts = seedPosts;

    res.render('view-article.ejs');
})

app.get('/all-articles', (req, res) => {
    res.render('all-articles.ejs');
})

app.get('/create', (req, res) => {
    res.render('create.ejs');
})

app.listen(port, () => {
    console.log('server running at port', port)
})