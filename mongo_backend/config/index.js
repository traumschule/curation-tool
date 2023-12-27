const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const {
  MONGO_DB,
  MONGO_USER,
  MONGO_PASS,
  MONGO_HOST,
  MONGO_PORT,
  JWT_SECRET
} = process.env

if (!MONGO_DB || !MONGO_USER || !MONGO_PASS || !MONGO_HOST || !MONGO_PORT || !JWT_SECRET) {
  throw new Error('Please set MONGO_DB, MONGO_USER, MONGO_PASS, MONGO_HOST, MONGO_PORT, JWT_SECRET')
}

const mongoUri = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      authSource: 'admin',
      user: MONGO_USER,
      pass: MONGO_PASS,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = {
  connectDB,
  JWT_SECRET,
}
