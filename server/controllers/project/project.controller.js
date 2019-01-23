const Services = require('../../services');
let conf, queries;
const logg = new Services.LoggerService('Signup', true).logger,
    async = require('async');
const Project = require('../../models').project;
const Users = require('../../models').users;

class ProjectController {
    constructor() {
        this.dbService = new Services.DBService();
    }

    getCountryList(req, res, next) {
        try {
            return Project
                .all()
                .then((countryResult) => {
                    logg.info('Potential Matches Status completed successfully.');
                    // res.locals.resp = {result: 'OK', status: ((((data[0] || [])[0] || [])).result)};
                    if (countryResult.length > 0) {
                        res.status(200).json({
                            status: 1,
                            msg: "Success",
                            data: countryResult
                        });
                        console.timeEnd('Potential Matches Status request');
                    } else {
                        res.status(200).json({
                            data: [],
                            msg: "No Record Found",
                            status: 2
                        });
                    }
                })
                .catch((err) => {
                    console.timeEnd('Potential Matches Status request');
                    logg.error(`${err.code} ${err.message}`);
                    res.status(200).json({
                        data: [],
                        msg: err.message || "Code error",
                        status: 3
                    });
                });
        } catch (err) {

        }
    }


    projectList(req, res, next) {

        Project.belongsTo(Users, {targetKey: 'id', foreignKey: 'profile'});

        try {
            return Project.findAll({
                include: [{
                    model: Users
                }]
            }).then((countryResult) => {
                logg.info('Potential Matches Status completed successfully.');
                // res.locals.resp = {result: 'OK', status: ((((data[0] || [])[0] || [])).result)};
                if (countryResult.length > 0) {
                    res.status(200).json({
                        status: 1,
                        msg: "Success",
                        data: countryResult
                    });
                    console.timeEnd('Potential Matches Status request');
                } else {
                    res.status(200).json({
                        data: [],
                        msg: "No Record Found",
                        status: 2
                    });
                }
            })
                .catch((err) => {
                    console.timeEnd('Potential Matches Status request');
                    logg.error(`${err.code} ${err.message}`);
                    res.status(200).json({
                        data: [],
                        msg: err.message || "Code error",
                        status: 3
                    });
                });
        } catch
            (err) {

        }
    }

    validatePotentialMatchesStatus(req, res, next) {
    }


    potentialMatchesStatus(req, res, next) {
    }

}

module
    .exports = ProjectController;