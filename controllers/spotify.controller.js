/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import querystring from 'querystring';
import generateRandomString from '../random.string.js';

class SpotifyController {
  login(req, res) {
    const stateKey = 'spotifyAuthState';
    const state = generateRandomString(16);
    const scope = 'user-read-private user-read-email';
    res.cookie(stateKey, state);
    res.redirect(`https://accounts.spotify.com/authorize?${
      querystring.stringify({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope,
        redirect_uri: process.env.REDIRECT_URI,
        state
      })}`);
  }
  callback(req, res) {
    
  }
}

export default new SpotifyController();
