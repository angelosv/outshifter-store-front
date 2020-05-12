const admin = require('firebase-admin')

async function checkUser(req, res, next){
    const email = req.body.data_order.customer.email
    try{
    const user = await admin.auth().getUserByEmail(email)
    console.log(user.uid)
    req.useruid = user.uid
    
}catch (error){
    const user = await createUser(email)
    req.useruid = user.uid

}
next()
}

async function createUser(email){
try{
const userCreated = await admin.auth().createUser({email})
console.log(userCreated)
const userUid = userCreated.uid
console.log(userUid)

return userUid
}catch(error){
    console.log(error.message);

}
}


module.exports = checkUser;


