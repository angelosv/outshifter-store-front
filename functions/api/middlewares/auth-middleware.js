const admin = require('firebase-admin')

const getAuthToken = (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
      ) {
        req.authToken = req.headers.authorization.split(' ')[1];
      } else {
        req.authToken = null;
      }
      next();
}

 const checkIfAuthenticated = (req, res, next) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      console.log(authToken)
      const userInfo = await admin
        .auth()
        .verifyIdToken(authToken);
      console.log(userInfo)
      req.authId = userInfo.uid;
      return next();
    } catch (error) {
        res.status(401)
        .send({ error: 'You are not authorized to make this request' });
    }
  });




   };
   

async function checkIfAuthenticated2(req,res, next){
  var authToken = '';
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    authToken  = req.headers.authorization.split(' ')[1];
  } else {
     authToken = null;
  }

  try {
    console.log(authToken)
    const userInfo = await admin
      .auth()
      .verifyIdToken(authToken);
    console.log(userInfo)
    //res.status(201).send(userInfo);

  } catch (error) {
      res.status(401).send({ error: 'You are not authorized to make this request' });
  }

  next()

}

   module.exports = checkIfAuthenticated2;