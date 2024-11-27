const needle = require("needle");

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(apiUrl, (error, response) => {
    if (error) {
      // pass the error to the callback
      callback(error, null);
      return;
    }
    // check if breed is found
    const data = response.body;
    if (data.length === 0) {
      // no breed found
      callback(null, "Breed not found!");
      return;
    }
    
    // else - return breed description
    const breed = data[0];
    callback(null, breed.description);
      
  });
};





