const mongoose = require('mongoose');

// const dbUrl = 'mongodb://localhost/Mingle'; 

// // mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log('Connected to MongoDB'))
// //   .catch((error) => console.error('MongoDB connection error:', error));



// module.exports = {
//   mongoURI: 'mongodb://localhost/Mingle'
// }

const mongodb = async () => {
  await mongoose.connect(`mongodb+srv://leekogreek:Infinitive3@cluster0.dgsqrrf.mongodb.net/`)
  console.log("Success")
}

