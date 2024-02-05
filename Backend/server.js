const express = require('express');
const cors = require('cors');
const mongodb = require('./configuration/config');
const app = express();
const userRouter = require('./routes/userRoutes');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());


const users = [
  {
    "id": 1,
    "username": "alen",
    "password": "Infinitive"
  },
  {
    "id": 2,
    "username": "anelya",
    "password": "Infinitive3"
  }
]
 
app.use('/auth', userRouter);


const start = async () => {
  try {
    await mongoose.connect(`mongodb+srv://alenanel2004:Infinitive3@mingle.793mwe4.mongodb.net/`)
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  }
  catch (e) {
    console.log(e)
  }

}

start()