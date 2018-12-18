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

        this.__router.delete('/:id', async (req, res) => {
            const {id} = req.params;

            await projectController.deleteOne(id);
            res.status(200).end();
        });

        this.__router.post('/', async (req, res) => {
            const {body} = req;

            await projectController.create(body);
            res.status(201).end();
        });


        this.__router.put('/:id', async (req, res) => {
            const {body, params: {id}} = req;

            await projectController.updateOne(id, body);
            res.status(200).end();
        });

        this.__router.get('/', async (req, res) => {
            res.json(await projectController.findAll());
        });
    }
}

exports.projectsRouter = new ProjectRouter();
