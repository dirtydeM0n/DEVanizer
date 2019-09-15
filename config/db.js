const config = require('config'); // Npm module config
const mongoose = require('mongoose'); // Npm module mongoose
const db = config.get('mongoURI');

// mongoose.set('useFindAndModify', false);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false // because findOneAndUpdate is deprecated
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    //Exiting the process
    process.exit(1);
  }
};

module.exports = connectDB;
