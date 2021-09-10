let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/StudentRegistration', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection successful")
})
.catch((e)=>{
    console.log("Unable to connect to DB, please check MongoDb is running on your local?")
})

module.exports = mongoose;