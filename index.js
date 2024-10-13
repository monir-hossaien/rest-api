require('dotenv').config()
const app = require('./app');
const PORT = process.env.PORT;




//error route handling
app.use((req, res)=>{
    res.send('<h1>404 not found</h1>')
})
// server run
app.listen(PORT, (req, res)=>{
    console.log(`Server run success on http://localhost:${PORT}`)
})