const { Pool } = require('pg')

let pool 

if (!process.env.NODE_ENV) {
  pool = new Pool({
    user: 'ncolby', 
    database: 'fce', 
    host: 'localhost',
    password: 'password',
    port: 5434
  })
} else {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    host: 'trainers-r-us-api.herokuapp.com',
    ssl: {
      rejectUnauthorized: false
    }
  })
}


module.exports = pool
