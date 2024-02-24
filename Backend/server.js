require("dotenv").config();
const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user/userRoutes');
const dateRouter = require('./routes/date/dateRoutes');
const messageRouter = require('./routes/chat/messages');
const mapRouter = require('./routes/map/mapRoutes');
const { app, server } = require('./socket/socket.js');

const mongoose = require('mongoose')
const PORT = process.env.PORT 
const http = require('http');

app.use(cors());
app.use(express.json());

app.use('/auth', userRouter);
app.use('/date', dateRouter);
app.use("/chat", messageRouter);
app.use("/place", mapRouter);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });


  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
