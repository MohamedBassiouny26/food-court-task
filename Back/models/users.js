let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    user_name: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    permission: { type: Number, enum: [0, 1], required: true } //0 =general user ,1=admin
})
const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;