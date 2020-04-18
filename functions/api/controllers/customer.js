const {firebase} = require('../../config/firebase');
const logger = require('../../config/logger');
const verifyUserExists = require('../services/userService') 
const userExists = async (req, res) => {
      const validation = await verifyUserExists('angelo.sv@iqplus.no')

}
        

module.exports = userExists;
