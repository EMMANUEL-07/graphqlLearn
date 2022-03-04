const { config } = require('dotenv');
const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')

require('dotenv').config()

const schema = require('./schema/schema')

const app = express();

mongoose.connect(`mongodb+srv://Emmanuel:${process.env.PASSWORD}@emmanuellearn.2fofu.mongodb.net/graphQlLearn?retryWrites=true&w=majority`)
mongoose.connection.once('open', () => {
  console.log('connected to db')
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));


app.get('/', (req, res, next) =>{
  res.send('Working')
})

app.listen(4000, () => {
  console.log('Listening on port 4000')
})