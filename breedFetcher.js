const request = require('request');
input = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
  if (error){
    console.log('error: ', error)
  }
  const data = JSON.parse(body);
  if (data === undefined){
    console.log("Breed not found!")
  }
  console.log(data)
})  
  


