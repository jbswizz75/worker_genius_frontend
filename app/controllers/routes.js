// Users
// const CreateUser = require('./users/create')
// const ShowUser = require('./users/show')
// const DeleteUser = require('./users/delete')
// const UpdateUser = require('./users/update')
// const ListUser = require('./users/list')

// Certifications
const CreateCertification = require('./certifications/create')
// const ShowCertification = require('./certifications/show')
// const ListCertification = require('./certifications/list')
// const UpdateCertification = require('./certifications/update')
// const DeleteCertification = require('./certifications/delete')

module.exports = {
  // users: {
  //   CreateUser,
  //   ShowUser, 
  //   DeleteUser,
  //   UpdateUser
  // },
  certifications: {
    CreateCertification
    // ShowCertification, 
    // UpdateCertification,
    // DeleteCertification,
    // ListCertification
  }
}
