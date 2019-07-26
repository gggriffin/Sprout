// const db = require('../models');

const googleCallback = async (req, res) => {
  const { token } = req.user;
  console.log(req.user);

  // TODO: This is a good location to complete any actions for a user. You have a valid Google user at this point

  if (process.env.NODE_ENV === 'production') {
    res.redirect(`/?token=${token}`);
  }

  res.redirect(`http://localhost:3000?token=${token}`);
};

module.exports = {
  googleCallback,
};
