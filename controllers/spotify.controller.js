/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
class SpotifyController {
  requestAuthorization(req, res) {
    const client_id = process.env.CLIENT_ID;
    let url = process.env.AUTHORIZE;
    const redirect_uri = 'http://localhost:5000';
    const encoded = encodeURI(redirect_uri);
    console.log(encoded);
    url += `?client_id=${client_id}`;
    url += '&response_type=code';
    url += `&redirect_uri=${encoded}`;
    url += '&show_dialogue=true';
    url += '&scope=user-read-private user-read-email user-modify-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private playlist-modify-private playlist-modify-public user-follow-read user-follow-modify';

    return res.send({
      data: url
    });
  }
}

export default new SpotifyController();
