import app from "./app"
import './database'
const port = 4000
app.listen(port, () => {
    console.log("listening on port " + port
    )
})
console.log('server listen on port ' + port);