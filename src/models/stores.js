import { Schema, model } from 'mongoose'

const StoreScema = {
  name: {
    type: String,
    maxlength: 250,
    require: true,
  },
  street: {
    type: String,
    maxlength: 250,
    require: false,
  },
  city: {
    type: String,
    maxlength: 250,
    require: false,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users',
      select: false
    },
  ],
}
const Store = model(
  'stores',
  new Schema(StoreScema, {
    timestamps: true,
    versionKey: false,
  })
)

export default Store
