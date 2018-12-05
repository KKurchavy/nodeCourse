const {Router} = require('express');
const {developerController} = require('../controllers/Developer.controller');

class DevelopersRouter {
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
                developerController.findOne(name)
            );
        });

        this.__router.delete('/:name', (req, res) => {
            const {name} = req.params;
            developerController.deleteOne(name);
            res.status(200).end();
        });

        this.__router.post('/', (req, res) => {
            const {body} = req;
            console.log(body);
            developerController.create(body);
            res.status(201).end();
        });


        this.__router.put('/:name', (req, res) => {
            const {body, params: {name}} = req;
            console.log(body);

            developerController.updateOne(name, body);
            res.status(200).end();
        });

        this.__router.get('/', (req, res) => {
            res.json(developerController.findAll());
        });
    }
}

exports.developersRouter = new DevelopersRouter();
