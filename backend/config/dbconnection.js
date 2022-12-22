const mongoose = require('mongoose');
const { MONGODB_URL } = process.env;

exports.connect = async () => {
  try {
    const res = await mongoose.connect(MONGODB_URL);
    console.log(`Database connection success: ${res.connection.host}`);
  } catch (err) {
    console.log('Database connection failure');
    console.log(`${err.name}: ${err.message}`);
    process.exit(1);
  }
};
