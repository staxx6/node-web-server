const db = require('./db');

module.exports.handleSignup = (email, password) => {
    // Check if emal already exists
    db.saveUser({
        email, password
    });
    // Send the welcome email
};
