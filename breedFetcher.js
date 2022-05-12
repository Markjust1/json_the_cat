const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (!data.length) {
      return callback('Cat not found');
    }
    const cat = data[0];
    const catDescription = cat.description;
    //console.log(catDescription)
    callback(null, catDescription);
  });
};

module.exports = {fetchBreedDescription};