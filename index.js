const express = require('express')
//service import
const my_business_logic =require('./service/my_business_logic');
const app = express()
const port = 3000
//GET
//
app.get('/', (req, res) => {
  res.send('hiii World!!!!')
});


// List of friends
let friends = ["Sarah","Oscar","Peter","Nabirah",""];
app.get ('/list-of-friends',(request ,response) =>{
  return response.send(friends);
});

//LIST OF FRIENDS
let friends_ids = [{"id":1,"name":"Sarah"},
  {"id":2,"name":"Oscar"},
  {"id":3,"name":"Peter"},
  {"id":2,"name":"Nabirah"}];

  app.get('/list-of-friends-by-id',(request ,response) => {
return response.send(friends_ids)
  });

//POST
app.post('/sign-up',(request, response) =>{
  console.log("Logging request body",request.body);

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})