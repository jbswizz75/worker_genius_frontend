const Certification = require('../../models/certification')
// const JWT = require('../../jwt.js')
// const jwt = new JWT()
/**
 * Create
 * @class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.CertificationModel = connect.model('Certification', Certification)
    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/api/v1/certification/show/:slug', (req, res) => {
      const { slug } = req.params
      let query = this.CertificationModel.where({slug: slug})
      query.findOne(function (_, certification) {
        if (certification) {
          res.status(200).json(certification || {})
        }
      }).catch(err => {
        res.status(500).json({
          'code': 500,
          'message': err
        })
      })
    })
  }

  /**
   * run
   */
  run () {
    this.middleware()
  }
}

module.exports = Show
