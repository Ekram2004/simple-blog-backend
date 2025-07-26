const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();
app.use(express.json());

app.use('/', postRoutes);
app.use('/', authRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error'));


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running....`);
});