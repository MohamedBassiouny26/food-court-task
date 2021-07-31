let mongoose = require('mongoose');

const atlasURI = 'mongodb+srv://dbAdmin:dbAdminPass@FoudCourtTask.konjn.mongodb.net/FoudCourtTask?retryWrites=true&w=majority'
mongoose.connect(atlasURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => console.log("connected to Database"))
    .catch(err => console.log("error connecting to database : ", err));
