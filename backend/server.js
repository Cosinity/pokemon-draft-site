const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const userController = require('./controllers/userController');


app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../frontend/src/index.html'));
});

app.post('/signup', userController.signUp, (req, res) => {
  console.log('Signed up successfully');
  return res.status(200).json();
});

app.post('/login', userController.logIn, (req, res) => {
  console.log('Logged in successfully');
  return res.status(200).json(res.locals.username);
});



// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

// global error handler 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'an error occurred'}
  };
  const errorObj = Object.assign({}, defaultErr);
  errorObj.message.err = err;
  console.log('ERROR: ', errorObj.message);

  return res.status(errorObj.status).send(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});