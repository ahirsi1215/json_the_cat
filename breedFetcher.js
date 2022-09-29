const request = require('request');
input = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
    if (error){
      callback('error: ', error)
    }
    const data = JSON.parse(body);
    if (data === undefined){
      callback("Breed not found!")
    }
    callback(data)
  })  
};
  

module.exports = { fetchBreedDescription };
