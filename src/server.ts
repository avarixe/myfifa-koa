import 'dotenv/config'
import app from './app/app'
import dataSource from './database/database.source'

// Process.env will always be comprised of strings, so typecast the port to a number
const PORT: number = Number(process.env.PORT) || 3000

dataSource.initialize()
  .then(() => { app.listen(PORT) })
  .catch(console.error)
