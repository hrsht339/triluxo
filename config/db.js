const mongoose = require('mongoose');


const connection = mongoose.connect('mongodb+srv://harshit:sahu@cluster0.pylf6yp.mongodb.net/triluxo?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
    connection
}