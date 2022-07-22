/* eslint-disable */
const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) => {
  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    firstname: body.firstname,
    lastname: body.lastname,
    dateOfBirth: body.dateOfBirth,
    aadhaar: body.aadhaar,
    email: body.email,
    address: body.address,
    passwordHash,
  })

  const savedUser = await user.save()

  response.json(savedUser)
})

usersRouter.get('/', async (request, response) => {
    const users = await User    
        .find({}).populate('markers', )
    response.json(users)
})

module.exports = usersRouter