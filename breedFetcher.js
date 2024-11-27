const needle = require("needle");
const breedName = process.argv[2];
const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

needle.get(apiUrl, (error, response) => {
  if (error) {
    console.error("Error Occured:", error);
    return;
  }

  if (response.body.length === 0) {
    console.log("Breed not found!");
    return;
  }

  const breed = response.body[0];
  console.log("Description:", breed.description);
    
});



