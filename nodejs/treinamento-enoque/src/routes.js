const express = require("express");
const EnderecoController = require("./app/controllers/EnderecoController");
const UsuarioController = require("./app/controllers/UsuarioController");
const PopulacaoController = require("./app/controllers/PopulacaoController");
const EstadoCivilController = require("./app/controllers/EstadoCivilController");
const SessionsController = require("./app/controllers/SessionController");
const authMiddleware = require("./app/middlewares/auth");

const routes = express.Router();

const InfoController = require("./app/controllers/InfoController");

routes.get("/", InfoController.index);

// Rotas referentes a ENDEREÇOS
routes.post("/enderecos", EnderecoController.store);
routes.get("/enderecos/:id", EnderecoController.show);
routes.put("/enderecos/:id", EnderecoController.update);

// Rotas referentes a USUÁRIOS
routes.post("/usuarios", UsuarioController.store);
routes.get("/usuarios/:id", UsuarioController.show);
routes.get("/usuarios", UsuarioController.index);

//Rotas referentes a POPULAÇÕES
routes.post("/populacoes", PopulacaoController.store);
routes.get("/populacoes/:id", PopulacaoController.show);
routes.get("/populacoes", PopulacaoController.index);

// Rotas referentes a ESTADO CIVIL
routes.post("/estados-civis", EstadoCivilController.store);
routes.get("/estados-civis", EstadoCivilController.index);
routes.put("/estados-civis/:id", EstadoCivilController.update);

// Rota de SESSÃO
routes.post("/sessions", SessionsController.store);

// Todas as rotas que vem depois desse middleware entram na verificação de autorização.
routes.use(authMiddleware);
routes.get("/enderecos", EnderecoController.index);

module.exports = routes;