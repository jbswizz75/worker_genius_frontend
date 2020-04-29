const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const mixed = Schema.Types.Mixed
const slugify = require('slugify')

const CertificationSchema = new mongoose.Schema({
  title: String,
  slug: String,
  timeout: Number,
  description: String,
  Id: ObjectId,
  project: mixed,
  prerequisites: [String],
  picture: String,
  languages: [String],
  creator: String, // will take the Id of the creator,
  creationDate: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
}, {
  collection: 'certifications', 
  minimize: false, 
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})
CertificationSchema.methods.generateSlug = async function () {
  this.slug = slugify(this.title.replace(/:/g, '')).toLowerCase()
  // await this.save()
  return this
}

CertificationSchema.methods.generatePicture = async function () {
  this.picture = '../../assets/images/code_js.jpg'
  // await this.save()
  return this
}

module.exports = CertificationSchema
