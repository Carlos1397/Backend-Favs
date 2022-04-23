import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import favsRoutes from "./routes/favs.routes"
import authRoutes from "./routes/auth.routes"
const app = express();


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));


app.use(morgan('dev'));
app.use(express.json());
app.set('pkg', pkg)


app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        description: app.get('pkg').description
    })
})




app.use('/api/favs', favsRoutes)
app.use('/auth/local', authRoutes)
export default app