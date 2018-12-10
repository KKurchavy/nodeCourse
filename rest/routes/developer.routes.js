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

        this.__router.delete('/:name', async (req, res) => {
            const {name} = req.params;

            await developerController.deleteOne(name);
            res.status(200).end();
        });

        this.__router.post('/', async (req, res) => {
            const {body} = req;
            
            await developerController.create(body);
            res.status(201).end();
        });


        this.__router.put('/:name', async (req, res) => {
            const {body, params: {name}} = req;
            console.log(body);

            await developerController.updateOne(name, body);
            res.status(200).end();
        });

        this.__router.get('/', async (req, res) => {
            res.json(await developerController.findAll());
        });
    }
}

exports.developersRouter = new DevelopersRouter();
