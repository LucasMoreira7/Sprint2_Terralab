import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { Userscontroller } from "./controllers/UsersController";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/**
 * Tipos de parâmetros 
 * Route Params => Parametros de rotas
 * http://localhost:3333/settings/1
 * query Params => filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * body Params =>
 */
const settingsController = new SettingsController();

const usersController = new Userscontroller();

const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.get("/settings/:username", settingsController.findByUsername);

routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);

routes.get("/messages/:id", messagesController.showByUser);


export {routes};
