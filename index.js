const express = require('express')

const app = express()

app.get(
  "/",
  (request, response) => {
    console.log('current time is: ', new Date().toUTCString())
    console.log('received request headers: ', request.headers)
    response.end('mock response')
  }
)

app.listen(
  process.env.PORT || 5000,
  () => console.log('server started')
)
