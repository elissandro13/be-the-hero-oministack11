const express = require('express');
const connection = require('./database/connection');

const OngController = require('./controllers/ongController');
const IncidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/profileController');
const SessionController = require('./controllers/sessionController');
const routes = express.Router();

// routes.get('/ongs', async(req,res) => {
//     const ongs = await connection('ongs').select('*');
//     return res.json(ongs);
// });
routes.post('/sessions', SessionController.create)
routes.get('/ongs', OngController.index);
routes.post('/ongs',OngController.create); 

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;