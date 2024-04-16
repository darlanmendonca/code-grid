import express from 'express'
import bodyParser from 'body-parser'
import grid from './grid/grid.routes'

const port = process.env.PORT || 3000

const app = express()

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/grid', grid)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})