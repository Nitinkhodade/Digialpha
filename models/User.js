const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
  
UserSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

UserSchema.set('toJSON', {
    virtuals: true
});

module.exports = User = mongoose.model("users", UserSchema);
