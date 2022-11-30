import { Request, Response } from 'express'
import formidable from 'formidable'
import bcrypt from 'bcrypt'

import User, { DatabaseUserInterface } from '../schemas/User'

class UserController {
  public index (req: Request, res: Response): Response {
    return res.send(req.user)
  }

  public store (req: Request, res: Response): void {
    const form = formidable({ multiples: true })

    form.parse(req, async (fields, files) => {
      const { email } = files
      const user = await User.findOne({ email })
      if (user != null) {
        res.sendStatus(400)
      } else {
        files.password = await bcrypt.hash(files.password as string, 10)
        await User.create(files)
        res.json('created').status(201)
      }
    })
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const user = await User.deleteOne(req)
    return res.json(user)
  }

  public async login (req: Request, res: Response): Promise<Response> {
    interface RequestBody {
      email: string
      password: string
    }
    const { email, password } = req.body as RequestBody

    const user: DatabaseUserInterface | null = await User.findOne({ email })
    if (user == null) return res.send('User do not exist')
    const userExists: boolean = await bcrypt.compare(password, user.password)
    if (!userExists) return res.send('Wrong Password')
    if (userExists) return res.send('Logged in')
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const user = await User.updateOne(req)
    return res.json(user)
  }
}

export default new UserController()
