
var axios = require('axios');
var FormData = require('form-data');
var { createReadStream } = require('fs');
const { join } = require('path');
const path = join(__dirname, 'img', 'sample_rg.jpg')

const data = new FormData();
data.append('image', createReadStream(path));

var config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost/api/test',
  headers: { 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
