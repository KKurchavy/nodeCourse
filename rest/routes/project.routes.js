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
        this.__router.get('/:name', (req, res) => {
            const {name} = req.params;

            res.json(
                projectController.findOne(name)
            );
        });

        this.__router.delete('/:name', (req, res) => {
            const {name} = req.params;

            projectController.deleteOne(name);
            res.status(200).end();
        });

        this.__router.post('/', (req, res) => {
            const {body} = req;

            projectController.create(body);
            res.status(201).end();
        });


        this.__router.put('/:name', (req, res) => {
            const {body, params: {name}} = req;

            projectController.updateOne(name, body);
            res.status(200).end();
        });

        this.__router.get('/', (req, res) => {
            res.json(projectController.findAll());
        });
    }
}

exports.projectsRouter = new ProjectRouter();
