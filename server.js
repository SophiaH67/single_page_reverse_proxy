const express = require('express');
const app = express();

const port = process.env.PORT || 1234;
const url = process.env.URL || "https://assets.marnixah.com/trollface.jpg";

app.get('*', function (req, res) {
  require('request').get(url).pipe(res);
});

console.log(`Starting web server on port ${port}`);
app.listen(port);