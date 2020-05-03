const auth = require('../../config/firebase');

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
    auth.auth().createUserWithEmailAndPassword('email@sdsd.es', 'password').catch(function(error) {

      });
    getAuthToken(req, res, async () => {
       try {
         const { authToken } = req;
   //      const userInfo = await firebase().signInWithEmailAndPassword('email@see.es', 'password')
         
         console.log('estoy aqui en el middleware', userInfo);

         return next();
       } catch (e) {

         return res
           .status(401)
           .send({ error: 'You are not authorized to make this request' });
       }
     });
   };
   
   module.exports = checkIfAuthenticated;