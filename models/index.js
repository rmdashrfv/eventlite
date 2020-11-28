const { Sequelize, DataTypes: { STRING, INTEGER, JSONB, BOOLEAN, TIME } } = require('sequelize')
// const sequelize = new Sequelize('postgres://user:password@localhost/database)
const sequelize = new Sequelize('postgres://mlaw:cjiaang11@localhost/eventlite')

// const ModelName = sequelize.define(tablename, { columns })
const User = sequelize.define('users', {
  email: {
    type: STRING,
    allowNull: false
  },
  password: {
    type: STRING,
    allowNull: false
  }
})

const Event = sequelize.define('events', {
  title: {
    type: STRING,
    allowNull: false
  },
  startsAt: {
    type: TIME,
    allowNull: false
  },
  location: {
    type: STRING,
    allowNull: false
  },
  metadata: {
    type: JSONB, // unstructured data for later
    allowNull: true
  }
})

module.exports = {
  User: User,
  Event: Event
}