import express from 'express';
const app = express();
let port = 3000;

app.use('/', express.static(__dirname + './../client/public'));

app.get('/', function(req, res){
  res.render('./../client/public/index.html');
});

app.get('/test', function(req, res){
  res.send('test');
});

app.get('/hello', (req, res) => {
  res.send("Can you hear me?");
});

import posts from './routes/posts';
app.use('/posts', posts);

const server = app.listen(port, () => {
  console.log("Express listening on port", port);
});
