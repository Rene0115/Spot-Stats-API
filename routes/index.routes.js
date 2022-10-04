/* eslint-disable import/extensions */
import express from 'express';
import spotifyRouter from './spotify.route.js';

const router = express.Router();
router.use('/spotify', spotifyRouter);

export default router;
