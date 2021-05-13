const express = require('express')

const app = express()

app.get(
  "/",
  (request, response) => {
    console.log('received request headers: ', request.headers)
    response.end('mock response')
  }
)

app.listen(
  3000,
  () => console.log('server started')
)