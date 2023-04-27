const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateUpdateUserInput(data) {
    let errors = {};
    data.fname = !isEmpty(data.fname) ? data.fname : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    if (Validator.isEmpty(data.fname)) {
        errors.fname = "Name field is required";
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
