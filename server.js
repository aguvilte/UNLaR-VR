var express = require('express');
    app = express();
    ejs = require('ejs').renderFile;
    path = require('path');
    index = require('./routes/index');

const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs);
app.use(express.static(path.join(__dirname, 'public')));

app.use(index);

app.listen(PORT, (err) => {
  console.log('Server listen on port ' + PORT);
});
