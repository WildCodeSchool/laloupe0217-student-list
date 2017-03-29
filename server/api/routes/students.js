import express from 'express';
import Student from '../models/student.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var student = new Student();

    router.post('/', Auth.isAdministrator, student.create);

    router.get('/', Auth.hasAuthorization, student.getAll);

    app.use('/students', router);

};
