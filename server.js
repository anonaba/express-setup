const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const app = require('./app')

// server start
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log('Listing to port ' + PORT))
