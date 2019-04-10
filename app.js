const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.render('search');
  console.log('rendered')
});

app.post('/addrecipe', (req, res) => {
  pool.query('INSERT INTO recipes(name, ingredients, directions) VALUES($1, $2, $3) RETURNING *; ',
      [req.body.name, req.body.ingredients, req.body.directions])
    .then((result) => {
      console.log(result.rows)
      res.render('addrecipe', {
        recipe: result.rows[0]
      });
    });
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});