const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/myNotebook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1"
 
const connectToMongo = () =>{
    mongoose.set('strictQuery', true);
    mongoose.connect(mongoURI, () => {
        console.log('Connected suncessfully to mongoose')
    })
}

module.exports = connectToMongo;
 