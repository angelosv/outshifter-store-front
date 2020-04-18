


const verifyUserExists = async (email) => {
email = 'angelo.sv@iqplus.no';
    logger.debug(`Verify existing user by email: ${JSON.stringify(email)}`);
    let status = 404;
    try {
        const userregistred = await firebase.auth().getUserByEmail(email);
        console.warn(userregistred);

    } catch (error){
        if (error.code === 'auth/user-not-found'){
            res.status(500).json({
                message:  error.code
            })

            return false
            
        }
    }
}

module.exports = verifyUserExists