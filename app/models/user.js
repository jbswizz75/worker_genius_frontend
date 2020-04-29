const mongoose = require('mongoose')
// const JWT = require('../jwt')
// const jwt = new JWT()
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const slugify = require('slugify')

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  hash: String,
  type: [String],
  address: String,
  vat_company: String,
  id: ObjectId,
  slug: String,
  profile_consultation_counter: Number,
  profile_picture: String
}, {
  collection: 'users', 
  minimize: false, 
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

UserSchema.method.generateSlug = function () {
  this.slug = slugify(`${this.first_name} ${this.last_name}`)
}
UserSchema.method.getFullName = function () {
  return `${this.first_name} ${this.last_name}`
}
// UserSchema.methods.generateAuthToken = async function () {
//   // Generate an auth token for the user
//   const user = this
//   const token = jwt.JWTgenerator(user)
//   user.token = token
//   await user.save()
//   return token
// }

module.exports = UserSchema
