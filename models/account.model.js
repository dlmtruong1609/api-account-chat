/* eslint-disable no-const-assign */
module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define('Account', {
    phone: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    avatar: {
      type: Sequelize.STRING
    },
    active: {
      type: Sequelize.BOOLEAN
    },
    password: {
      type: Sequelize.STRING
    },
    list_friend_id: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    list_friend_request: {
      type: Sequelize.STRING,
      get: function () {
        return JSON.parse(this.getDataValue('list_friend_request'))
      },
      set: function (val) {
        return this.setDataValue('list_friend_request', JSON.stringify(val))
      }
    },
    list_phone_book: {
      type: Sequelize.STRING,
      get: function () {
        return JSON.parse(this.getDataValue('list_phone_book'))
      },
      set: function (val) {
        return this.setDataValue('list_phone_book', JSON.stringify(val))
      }
    },
    role: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE
    }
  })
  return Account
}
