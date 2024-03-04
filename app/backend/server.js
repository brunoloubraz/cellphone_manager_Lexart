const app = require('./app')

const port = process.env.APP_PORT || 3001

app.listen(port, () => console.log('Server runing on port ', port))