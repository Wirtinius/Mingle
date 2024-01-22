const express = require('express');
const cors = require('cors');
const config = require('./configuration/config');

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

app.listen(config.port || 3000, () => {
  console.log(`Server is running on port 3000`);
});