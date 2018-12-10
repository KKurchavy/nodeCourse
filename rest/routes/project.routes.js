const {Router} = require('express');
const {projectController} = require('../controllers/Project.controller');

class ProjectRouter {
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

            await projectController.deleteOne(name);
            res.status(200).end();
        });

        this.__router.post('/', async (req, res) => {
            const {body} = req;

            await projectController.create(body);
            res.status(201).end();
        });


        this.__router.put('/:name', async (req, res) => {
            const {body, params: {name}} = req;

            await projectController.updateOne(name, body);
            res.status(200).end();
        });

        this.__router.get('/', async (req, res) => {
            res.json(await projectController.findAll());
        });
    }
}

exports.projectsRouter = new ProjectRouter();
