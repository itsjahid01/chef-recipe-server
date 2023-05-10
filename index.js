const express = require('express');
const app = express();
const port = 3000
const cors=require('cors');
const chefRecipes=require('./data/chefRecipes.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to my server!!!!')
})

app.get('/chefRecipes',(req,res)=>{
    res.send(chefRecipes)
})

app.get('/chefRecipes/:id',(req,res)=>{
    const id=req.params.id
    // console.log(id)
    const chef=chefRecipes.find(chef=>chef.id==id)
    res.send(chef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})