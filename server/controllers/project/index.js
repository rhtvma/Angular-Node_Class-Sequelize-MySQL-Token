const express = require('express'),
    ProjectController = require('./project.controller');

let conf = require('../../config.json'),
    credentials = require('../../credentials_non_commit.json');

class ProjectRouter {
    constructor() {
        for (let key in credentials) {
            if (!(conf[key] instanceof Object))
                conf[key] = {};
            conf[key] = JSON.parse(JSON.stringify(credentials[key]));
        }
        this.config = conf;
        this._projectController = new ProjectController();

        this.router = express.Router();

        this.router.route('/projects')
            .get(this._projectController.getCountryList.bind(this._projectController));

        this.router.route(this.config.routes.project.projectList)
            .get(this._projectController.projectList.bind(this._projectController));

        // this.router.route(this.config.routes.user.getUser)
        //     .get(this._projectController.validatePotentialMatchesStatus.bind(this._projectController),
        //         this._projectController.potentialMatchesStatus.bind(this._projectController));
        //

    }

    get router() {
        return this._router;
    }

    set router(_router) {
        this._router = _router;
    }
}

module.exports = {
    ProjectRouter: ProjectRouter
};