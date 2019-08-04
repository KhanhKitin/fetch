const express = require('express');

const app = express();


require('./src/database/connection');
require('./src/test')();

app.listen(3000, (err) => {
    if(err){
      console.log(err);
    }
    console.log("app listening on port 3000");
  });

