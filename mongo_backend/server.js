const express = require('express');
const { connectDB } = require('./config');
const path = require('path');
const cors = require('cors');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ limit: '50mb' }));

app.use(cors());
// Define Routes
app.use('/members', require('./routes/api/members'));
app.use('/auth', require('./routes/api/auth'));
app.use('/leader', require('./routes/api/leader'));
app.use('/curator', require('./routes/api/curator'));
// const PORT = process.env.PORT || 5000;
const PORT=5544

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
