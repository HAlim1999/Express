const express = require('express');
const db = require('./db.js');
const app = express();
const DB = new db('data')




app.get('/productos',async (req, res) =>{
  const data = await DB.getAll();
  res.send(data)
});

app.get('/productosRandom',async (req, res) =>{
  let number = await DB.getAll()
  let id =parseInt(Math.floor(Math.random() * number.length+1));
  const data = await DB.getById(id);
  res.send(data)
});


app.listen(8080, ()=>{
  console.log('server iniciado'); 
})
 