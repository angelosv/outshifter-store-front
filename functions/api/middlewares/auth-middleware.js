const admin = require('firebase-admin')

const TokenVerification = async (req, res, next)=>{
  const token = req.headers.authorization;
  try{
const response = await admin.auth().verifyIdToken(token);
if (response){
  const user = await admin.auth().getUser(reponse.uid);
  req.user = user;
  return next()

}
return res.status(401).send('Not authorized');

  }catch (error){
if(error.code === 'auth/id-token-revoked') {
  return res.status(401).send(error.code)
}
return res.status(401).send('Not authorized');

  }
}


   module.exports = TokenVerification;