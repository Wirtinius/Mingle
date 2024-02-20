require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user/userRoutes');
const dateRouter = require('./routes/date/dateRoutes');
const messageRouter = require('./routes/chat/messages');
const mapRouter = require('./routes/map/mapRoutes');

const mongoose = require('mongoose')
const PORT = process.env.PORT 
const http = require('http');
const socket = require("socket.io");

app.use(cors());
app.use(express.json());

app.use('/auth', userRouter);
app.use('/date', dateRouter);
app.use("/messages", messageRouter);
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


// const start = async () => {
//   try {
//     await mongoose.connect(`mongodb+srv://alenanel2004:Infinitive3@mingle.793mwe4.mongodb.net/`)
//     app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
//   }
//   catch (e) {
//     console.log(e)
//   }

// }

const server = app.listen(PORT, () =>
  console.log(`Server started on ${PORT}`)
);
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});


global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
