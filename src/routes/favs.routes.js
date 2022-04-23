import { Router } from "express";

const routes = Router()
import * as favsControllers from '../controllers/favs.controllers'

import { authToken } from '../middlewares'
routes.post('/', authToken, favsControllers.createFavs)

routes.get('/', favsControllers.getFavs)

routes.get('/:id', favsControllers.getFavsById)

routes.put('/:id', authToken, favsControllers.updateFavsById)

routes.delete('/:id', authToken, favsControllers.deleteFavsById);


export default routes;