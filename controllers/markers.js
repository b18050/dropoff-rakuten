/* eslint-disable */
const markersRouter = require('express').Router()
const Marker = require('../models/marker')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {  
    const authorization = request.get('authorization')  
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {    
        return authorization.substring(7)  
    }  
    return null
}

// markersRouter.get('/', (request, response) => {
//     response.send('<h1>Hello World!</h1>')
// })
  
markersRouter.get('/', (request, response) => {
    Marker.find({}).then(markers => {
      response.json(markers)
    })
})
  
markersRouter.get('/:id', (request, response, next) => {
    Marker.findById(request.params.id)
      .then(marker => {
        if (marker) {
          response.json(marker)
        } else {
          response.status(404).end()
        }
      })
      .catch(error => next(error))
})
  
markersRouter.post('/', async (request, response) => {
    const body = request.body
  
    // const token = getTokenFrom(request)  
    // const decodedToken = jwt.verify(token, process.env.SECRET)  
    // if (!token || !decodedToken.id) {    
    //     return response.status(401).json({ 
    //         error: 'token missing or invalid' 
    //     })  
    // }  
    
    // const user = await User.findById(decodedToken.id)

    if (!body.coordinate) {
      return response.status(400).json({
        error: 'coordinate missing'
      })
    }
  
    const marker = new Marker({
      coordinate: body.coordinate,
      title: body.title,
      description: body.description,
      landmark: body.landmark,
      pincode: body.pincode,
      amount: body.amount,
      date: new Date(),
      // user: user._id
    })

    const savedMarker = await marker.save()
    // user.markers = user.markers.concat(savedMarker._id)  
    // await user.save()  
    response.json(savedMarker)
})
  
markersRouter.delete('/:id', (request, response, next) => {
    Marker.findByIdAndRemove(request.params.id)
      .then(result => {
        response.status(204).end()
      })
      .catch(error => next(error))
})
  
markersRouter.put('/:id', (request, response, next) => {
    const body = request.body
  
    const marker = {
      coordinate: {
        latitude: body.coordinate.latitude,
        longitude: body.coordinate.longitude
      },
      title: body.title,
      pincode: body.pincode,
      amount: body.amount,
  
    }
  
    Marker.findByIdAndUpdate(request.params.id, marker, { new: true })
      .then(updatedMarker => {
        response.json(updatedMarker)
      })
      .catch(error => next(error))
})

module.exports = markersRouter 