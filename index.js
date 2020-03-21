const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

const w09Router = require('./routes/assignments/w09');
const w10Router = require('./routes/assignments/w10');

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(express.urlencoded({ extended: true}))
  .use(express.json())
  .get('/', (req, res) => res.render('pages/index'))
  .use('/w09', w09Router)
  .use('/w10', w10Router);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
