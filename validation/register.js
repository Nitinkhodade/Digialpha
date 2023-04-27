const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.fname = !isEmpty(data.fname) ? data.fname : "";
    data.lname = !isEmpty(data.lname) ? data.lname : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    if (Validator.isEmpty(data.fname)) {
        errors.fname = "First Name is required";
    }
    if (Validator.isEmpty(data.lname)) {
        errors.lname = "Last Name is required";
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
 
    return {
        errors,
        isValid: isEmpty(errors)
    };
};