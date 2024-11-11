import base from "./base.ts";
import users from "./users.ts";
import auth from "./auth.ts";
import { validateToken } from "../middlewares/validToken.ts";
const version = "/api/v1" 

export const routes = (app) => {
  app.use('/', base);
  app.use(version+'/users', validateToken, users);
  app.use(version+'/auth', auth);
}