const jwt = require('jsonwebtoken');
const secret = "youllneverguessthis";

module.exports = (req, res, next) => {

  try {
    const token = req.headers.authorization;

    if (token) {
      jwt.verify(token, secret, (err, decodedToken) => {
        if (err) {
          res.status(401).json({ you: "whoopsie" });
        } else {
          req.decodedJwt = decodedToken;
          console.log(req.decodedJwt);
          next();
        }
      })
    } else {
      throw new Error('You shall not pass!');
    }
  } catch (err) {
    res.status(401).json({ error: err.message });
  }

};
