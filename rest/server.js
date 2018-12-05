const express = require('express');
const bodyParser = require('body-parser');

const {developersRouter} = require('./routes/developer.routes');
const {managersRouter} = require('./routes/manager.routes');
const {projectsRouter} = require('./routes/project.routes');

const app = express();

app.use(bodyParser.json());
app.use('/developers', developersRouter.getRoutes());
app.use('/managers', managersRouter.getRoutes());
app.use('/projects', projectsRouter.getRoutes());
app.use('/', express.static(__dirname + '/game'));

app.listen(8080, () => console.log('we are on 8080'));