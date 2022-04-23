import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/companydb', {
    useNewurlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('Db is Connected'))
    .catch(err => console.log('Error connecting' + err))