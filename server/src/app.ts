import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes'

class App {
  public express: express.Application

  constructor () {
    this.express = express()

    this.database().catch(e => console.log(e))
    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private async database (): Promise<void> {
    mongoose.connect('mongodb://localhost:27017/tsnode')
      .catch(error => console.log(error))
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
