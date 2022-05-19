const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const route = require('./routes');

app.use(cors());

app.use(
   express.urlencoded({
      extended: true,
   })
);

app.use(express.json());

route(app);

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
