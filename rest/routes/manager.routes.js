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
        this.__router.get('/:name', (req, res) => {
            const {name} = req.params;

            res.json(
                managerController.findOne(name)
            );
        });

        this.__router.delete('/:name', (req, res) => {
            const {name} = req.params;

            managerController.deleteOne(name);
            res.status(200).end();
        });

        this.__router.post('/', (req, res) => {
            const {body} = req;

            managerController.create(body);
            res.status(201).end();
        });


        this.__router.put('/:name', (req, res) => {
            const {body, params: {name}} = req;

            managerController.updateOne(name, body);
            res.status(200).end();
        });

        this.__router.get('/', (req, res) => {
            res.json(managerController.findAll());
        });
    }
}

exports.managersRouter = new ManagerRouter();
