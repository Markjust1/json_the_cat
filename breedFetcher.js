const request = require('request');
const args = process.argv.slice(2);
const codeId = args;


request(`https://api.thecatapi.com/v1/breeds/search?q=${codeId}`, function(error, response, body) {
  if (error) {
    console.log('Request was unsuccessful');
    return;
  }
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body);
  // console.log('typeof body:', typeof body)
  const data = JSON.parse(body);
  if (!data.length) {
    return console.log('Cat not found');
  }
  const cat = data[0];
  console.log(cat.description);
});