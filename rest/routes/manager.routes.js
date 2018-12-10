const {Router} = require('express');
const {managerController} = require('../controllers/Manager.controller');

class ManagerRouter {
    constructor() {
        this.__router = Router();

        this.__configure();
    }

    getRoutes() {
        return this.__router;
    }

    __configure() {

        this.__router.delete('/:name', async (req, res) => {
            const {name} = req.params;

            await managerController.deleteOne(name);
            res.status(200).end();
        });

        this.__router.post('/', async (req, res) => {
            const {body} = req;

            await managerController.create(body);
            res.status(201).end();
        });


        this.__router.put('/:name', async (req, res) => {
            const {body, params: {name}} = req;

            await managerController.updateOne(name, body);
            res.status(200).end();
        });

        this.__router.get('/', async (req, res) => {
            res.json(await managerController.findAll());
        });
    }
}

exports.managersRouter = new ManagerRouter();
