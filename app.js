const express = require('express');
const dotenv = require('dotenv'); 
const PexelsAPI = require('pexels-api-wrapper');
dotenv.config();

const pexelsClient = new PexelsAPI(process.env.SECRET);



const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.render('search');
});

app.get('/results', (req, res) => {
  pexelsClient.search(req.query.search, 20, 1)
    .then((result) => {
      const { photos, next_page } = result;
        res.render('results', { photos, next_page })
    }).
    catch((e) => {
        console.err(e);
    });
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});