const mongoose = require("mongoose");

//creating a database
mongoose.connect("mongodb://localhost:27017/angeldynamic", {
    useNewUrlParser: true, 

    useUnifiedTopology: true 
}).then(()=>{
    console.log("connection successful");

}).catch((error) => {
    console.log(error);
})

