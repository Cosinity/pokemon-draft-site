// set up database 
const db = require('../dbModel.js');
const bcrypt = require('bcrypt');
const saltFactor = 10;
const userController = {};

userController.signUp = (req, res, next) => {
  const { username, password } = req.body;
  bcrypt.hash(password, saltFactor, (err, hash) => {
    const signupQuery = '';
    db.query(signupQuery, [username, hash])
      .then(() => {
        console.log('User created');
        return next();
      })
      .catch(error => {
        console.log('Username already exists');
        return next(error);
      });
    if (err){
      return next(err);
    }
  });
};

userController.logIn = (req, res, next) => {
  const { username } = req.body;
  const query = '';
  db.query(query, [username])
    .then(dbResponse => {
      if (dbResponse.rows[0] === undefined) {
        return res.status(401).json({ message: 'no username found' });
      } else {
        // if record is found, compare hashed password
        const { password } = dbResponse.rows[0];
        bcrypt.compare(req.body.password, password, (err, result) => { 
          if (err) { 
            return next({
              log: `userController.verifyUser: ERROR: Error comparing password: ${err}`,
              message: { err: 'Error comparing password' },
            });
          }
          if (result) {
            //if passwords match send back username
            res.locals.username = username;
            return next();
          }
          else {
            // if passwords don't match, return 401 status
            return res.status(401).json({ message: 'incorrect password' });
          }
        });
      }
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = userController;
