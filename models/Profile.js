const mongoose = require('mongoose');
const ProfileScheme = new mongoose.Schema({
  // Every profile should be associated with the user
  user: {}
});
