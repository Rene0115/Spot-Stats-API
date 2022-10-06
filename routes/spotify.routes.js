/* eslint-disable import/extensions */
import express from 'express';
import spotifyController from '../controllers/spotify.controller.js';

const spotifyRouter = express.Router();

spotifyRouter.get('/', spotifyController.requestAuthorization);

export default spotifyRouter;
