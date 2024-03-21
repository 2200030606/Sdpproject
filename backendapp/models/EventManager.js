// EventManager.js
const mongoose = require("mongoose");

const eventmanagerschema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  brandname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true,
    unique: true
  }
});

const eventdetailsschema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  brandname: {
    type: String,
    required: true
  },
  categoryname: {
    type: String,
    required: true
  },
  cost: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const eventmanager = mongoose.model('EventManagers', eventmanagerschema, 'EventManagers');
const eventdetails = mongoose.model('EventDetails', eventdetailsschema, 'EventDetails');

module.exports = { eventmanager, eventdetails };
