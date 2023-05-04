const express = require('express');
const app = express();
const port = 3000
const cors=require('cors');
const chefRecipes=require('./data/chefRecipes.json')

app.get('/', (req, res) => {
  res.send('Hello world!!!!')
})

app.get('/chefRecipes',(req,res)=>{
    res.send(chefRecipes)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})