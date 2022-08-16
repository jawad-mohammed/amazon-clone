const Pool = require("pg").Pool;

const pool = new  Pool({
    user:'postgres',
    host:'localhost',
    database:'amazon_clone',
    password:'@Ravind95',
    port:'5432'
})

module.exports = pool