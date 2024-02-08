require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user/userRoutes');
const dateRouter = require('./routes/date/dateRoutes');
const mongoose = require('mongoose')
const PORT = process.env.PORT 

app.use(cors());
app.use(express.json());
 
app.use('/auth', userRouter);
app.use('/date', dateRouter);


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