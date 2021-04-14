const express = require('express');
const fs = require ('fs');
const axios = require('axios');
const fetch = require('node-fetch')

const router = express.Router();

router.get('/', (req, res) => {
  const URL ='http://jsonplaceholder.typicode.com/posts/1';

  fetch(URL)
    .then((response) => response.json())
    .then(data => {
      const jsonData = data;
      let text = "";
      for (data in jsonData) {
        text += jsonData[data] + "\n";
      }
      fs.writeFile("post.txt", text, (err) => {
        if (err) throw err;
        console.log("Done Suceesfully!");
      })
    }).catch((error) => {
      console.log(error)
    });

  axios
    .get(URL)
    .then(response => {
      const jsonData = response.data;
      let text = "";
      let data;
      for (data in jsonData) {
        text += jsonData[data] + "\n";
      }
      console.log(typeof (response.data));
      fs.writeFile("posts.txt", text, (err) => {
        if (err) throw err;
        console.log("Done Suceesfully!");
      })
    })
    .catch((error) => {
      console.log(error)
    });
  res.send('It works!');
});

module.exports = router;