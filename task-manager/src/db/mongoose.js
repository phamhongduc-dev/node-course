const mongoose = require('mongoose');
require('dotenv').config();
const validator = require('validator');

mongoose.connect(process.env.CONNECT_STRING);

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
});

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// const me = new User({
//   name: '   Andrew   ',
//   email: '    eEERe@hhh.TT      ',
//   age: 27,
//   password: 'p555',
// });
// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log('Error!', error);
//   });

const task = new Task({
  description: '   the Mongoose Library        ',
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.log('Error!', error);
  });
