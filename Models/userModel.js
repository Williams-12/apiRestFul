const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Schema de l'utilisateur
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// le hashage du moot de passe avant l'enregistrement
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    };
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Comparaison des mots de passe
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;