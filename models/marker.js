/* eslint-disable */
const mongoose = require('mongoose')

const coordinateSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number
});

const markerSchema = new mongoose.Schema({
    coordinate: {
      type: coordinateSchema,
      required: true
    },
    title: {
        type: String,
        minLength: 5,
        required: true
    },
    description: {
        type: String,
    },
    landmark: {
        type: String,
    },
    pincode: {
        type: Number
    },
    amount: {
        type: Number,
    },
    date: {     
        type: Date,    
        required: true  
    },
    user: {    
        type: mongoose.Schema.Types.ObjectId,    
        ref: 'User'  
    }
})

markerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Marker', markerSchema)