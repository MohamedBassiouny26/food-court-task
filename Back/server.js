const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');

const storesRouter = require('./routes/storesRouter')
require("./dbConnection/mongo_connect");

app.use(cors());
app.use(express.json());


app.use('/stores', storesRouter);




app.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log(`App server is running and listening on port ${PORT}`);
});
