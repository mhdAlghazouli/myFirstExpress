const express = require("express");
const app = express();
const port = 3200;

app.get('/',(req,res) => {
  res.send('Hello from express!!');
});

app.get('/favicon.ico',(req,res) => {
  res.send("");
});

app.get('*', (req,res) => {
  res.send('This is not the home express page');
});


app.listen(port, () => {
  console.log(`hello express app is running at http://localhost:${port}`);
})



