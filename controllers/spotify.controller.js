/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import generateRandomString from '../random.string.js';

class SpotifyController {
  test(req, res) {
    const test = generateRandomString(19);
    if (!test) {
      return res.send({
        message: 'error'
      });
    }
    return res.status(200).send({
      success: true,
      data: test
    });
  }
}

export default new SpotifyController();
