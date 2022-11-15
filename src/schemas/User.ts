import { Schema, model, Document } from 'mongoose'

interface UserIntefarce extends Document {
  email?: string
  firstName?: string
  lastName?: string
}

export default model<UserIntefarce>('User', new Schema({
  email: String,
  firstName: String,
  lastName: String
},
{ timestamps: true }
)
)
