import { Schema, model } from 'mongoose'

export interface UserInterface {
  email: string
  firstName: string
  lastName: string
  password: string
}
export interface DatabaseUserInterface {
  email: string
  firstName: string
  lastName: string
  password: string
  _id: string
}

export default model<UserInterface>('User', new Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
},
{ timestamps: true }
)
)
