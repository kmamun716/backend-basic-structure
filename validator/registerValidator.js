const validator = require('validator');

const validate = (user) =>{
    let error = {};

    if(!user.name){
        error.name = 'Please Provide Your Name';
    };

    if(!user.email){
        error.email = 'Please Provide Your Valid Email';
    }else if(!validator.isEmail(user.email)){
        error.email = "Please Provide a Valid Email"
    };

    if(!user.password){
        error.password = 'Please Provide a Password'
    }else if(user.password.length < 6){
        error.password = 'Password Must be greater then 6 character'
    };

    if(!user.confirmPassword){
        error.confirmPassword = 'Please Provide Confirmation Password'
    }else if(user.password !== user.confirmPassword){
        error.confirmPassword = 'Password and Confirm Password not matched'
    };

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
};

module.exports = validate;