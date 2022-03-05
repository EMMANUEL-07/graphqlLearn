const { config } = require('dotenv');
const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const schema = require('./schema/schema')

const app = express();

app.use(cors());

const PORT = process.env.PORT

mongoose.connect(`mongodb+srv://Emmanuel:${process.env.PASSWORD}@emmanuellearn.2fofu.mongodb.net/graphQlLearn?retryWrites=true&w=majority`)
mongoose.connection.once('open', () => {
  console.log('connected to db')
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));


app.get('/', (req, res, next) => {
  console.log('get')
  res.json({message: 'Working'})
})

  app.listen( PORT || 8000 , () => {
  console.log(`Listening on port ${ PORT ? PORT : '8000'}`)
})

