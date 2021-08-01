let mongoose = require('mongoose');

const atlasURI = 'mongodb+srv://dbAdmin:dbAdminPass@food-court.konjn.mongodb.net/food-court?retryWrites=true&w=majority'
mongoose.connect(atlasURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => console.log("connected to Database"))
    .catch(err => console.log("error connecting to database : ", err));
