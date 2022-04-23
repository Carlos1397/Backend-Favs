import { Router } from "express";
const routes = Router()
import * as authController from "../controllers/auth.controller"
routes.post('/login', authController.login)
routes.post('/register', authController.register)
export default routes;