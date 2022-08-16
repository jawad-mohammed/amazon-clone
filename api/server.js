const express = require('express');
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/',require('./controller/routes'))





app.listen(8083,console.log(`server is listening on 8083`))