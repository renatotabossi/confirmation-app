import express from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import flash from 'express-flash'

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
    // const SESSION_SECRET: string = (process.env.SESSION_SECRET as string)

    this.express.use(express.json())
    this.express.use(cors({ origin: 'http://localhost:3000', credentials: true }))
    this.express.use(session({
      secret: 'secretcode',
      resave: true,
      saveUninitialized: true
    }))
    this.express.use(cookieParser('secretcode'))
    this.express.use(flash())
    this.express.use(passport.initialize())
    this.express.use(passport.session())
  }

  private async database (): Promise<void> {
    try {
      const response = await mongoose.connect('mongodb://localhost:27017/tsnode')
      console.log('conectado ao localhost:27017', 'collection', response.connections[0].name)
    } catch (error) {
      console.log(error)
    }
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
