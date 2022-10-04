/* eslint-disable import/extensions */
import express from 'express';
import spotifyController from '../controllers/spotify.controller.js';

const spotifyRouter = express.Router();

spotifyRouter.get('/login', spotifyController.test);

export default spotifyRouter;
