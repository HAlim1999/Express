const express = require('express');
const app = express();

app.get('/productos',(req, res) =>{
  res.sendFile(`./data/producto.json`, {
    root: __dirname
  })
});


let contador = 0;
app.get('/productosRandom', function(req, res) {
  contador++;
  res.send(`<h1>La cantidad de visitas es ${contador}</h1>`);
});




const server = app.listen(8080, ()=>{
  console.log('server iniciado'); 
})
server.on("error",(error)=>{
  console.error(`Error ${error}`);
})