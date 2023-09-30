const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tu-base-de-datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});