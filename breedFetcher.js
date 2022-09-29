const request = require('request');
input = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
    if (error){
      callback(null, error)
    }
    const data = JSON.parse(body);
    if (!data.length || data[0] === undefined){
      callback(null, "Breed not found!")

    } else 
    callback(null, data[0].description)
  })  
};
  

module.exports = { fetchBreedDescription };
