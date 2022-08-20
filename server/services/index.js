const bcrypt = require("bcrypt")

var salt =  10;


module.exports.psw_encrypt =  (psw)=>{
    bcrypt.hash(psw, salt, (err, encrypted) => {
      if(err){
            return "false"
        }
        else{
            const psw =  encrypted;
            return  "psw"
        }
    })
}


