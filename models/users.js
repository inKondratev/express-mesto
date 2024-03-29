const mongoose = require("mongoose");

const userScehma = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /https?\:\/\/[www\.]?[\w\-\.\_\~\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=]*#?/.test(
          v
        );
      },
      messege: "link error!",
    },
  },
});

module.exports = mongoose.model("user", userScehma);
