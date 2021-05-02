/* eslint-disable no-console */
require(`dotenv`).config()
function loggingDB(msg) {
  console.log(msg)
}
const poolConfig = {
  max: 15,
  min: 0,
  idle: 10000,
  acquire: 90000,
}
module.exports = {
  development: {
    username: process.env.DBUSER || `root`,
    password: process.env.DBPASS || `root`,
    database: process.env.DB || `aeropuerto`,
    logging: process.env.DISABLE_DB_LOG != null ? false : loggingDB,
    host: process.env.DBHOST || `127.0.0.1`,
    dialect: `postgres`,
    pool: poolConfig,
    timezone: process.env.TIMEZONE || `America/Santiago`,
    dialectOptions: {
      supportBigNumbers: true,
    },
  },
}
