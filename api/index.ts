import express from 'express'
import bodyParser from 'body-parser'

const port = process.env.PORT || 3000

const app = express()

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})