const models = require('../models')
const { argv } = require('yargs')
const mode = argv.reset || false // overwrite if true, add tables if false

const createTables = async () => {
  for (table in models) {
    await models[table].sync({ force: mode })
  }
  console.log(mode ? 'Database reset' : 'Database tables setup')
}

createTables()