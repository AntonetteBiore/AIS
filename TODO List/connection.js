//connection to mongodb
const mongoose = require('mongoose');
const dbUrl = "mongodb://localhost/TODOList";
mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected!");
})
.catch((error)=>{
    console.log("Error: ", error);
});