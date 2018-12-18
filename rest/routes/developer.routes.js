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

        this.__router.delete('/:id', async (req, res) => {
            const {id} = req.params;

            await developerController.deleteOne(id);
            res.status(200).end();
        });

        this.__router.post('/', async (req, res) => {
            const {body} = req;
            
            await developerController.create(body);
            res.status(201).end();
        });


        this.__router.put('/:id', async (req, res) => {
            const {body, params: {id}} = req;

            await developerController.updateOne(id, body);
            res.status(200).end();
        });

        this.__router.get('/', async (req, res) => {
            res.json(await developerController.findAll());
        });
    }
}

exports.developersRouter = new DevelopersRouter();
