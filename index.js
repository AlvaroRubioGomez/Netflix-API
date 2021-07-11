const { graphql, buildSchema } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./demo/lib/resolvers')

const app = express()
const port = process.env.port || 3000

// Define the demo schema
const typeDefs = readFileSync(    
    join(__dirname, 'demo', 'lib', 'schema.demo.graphql'),
    'utf-8'
  )
const schema = makeExecutableSchema({ typeDefs, resolvers })

// Inject graphqlHTTP in our app
app.use('/graphql/demo', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

// Up our server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/graphql/demo`);
})