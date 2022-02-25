const User = require('../users/user-model');
const { findBy } = require('../users/user-model');

// username must not exist already in the `users` table
// On FAILED registration due to the `username` being taken,
// the response body should include a string exactly as follows: "username taken".
//  
const checkUsernameAvail = async (req, res, next) => {
    try{
        const user = await User.findBy(req.body.username);
        if(user) {
            next({ status: 401, message:'username taken'});
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
}

//username and password must be provided
//On FAILED registration due to `username` or `password` missing from the request body,
// the response body should include a string exactly as follows: "username and password required".

//On FAILED login due to `username` or `password` missing from the request body,
//the response body should include a string exactly as follows: "username and password required".

const validateEntry = (req, res, next) => {
    try{
        if(
        !req.body.username || 
        !req.body.username.trim() || 
        !req.body.password || 
        !req.body.password.trim()
        ) {
            next({status: 401, message: 'username and password required'});
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
}


//to login, username must exist in the db
//On FAILED login due to `username` not existing in the db, or `password` being incorrect,
//the response body should include a string exactly as follows: "invalid credentials".

const checkUsernameExists = async (req, res, next) => {
    try{
        const user = await User.findBy(req.body.username)
        if (!user) {
            next({ status: 401, message: 'invalid credentials'})
        } else {
            req.user = user;
            next();
        }
    } catch (err) {
        next(err)
    }
}


    module.exports = {
        checkUsernameAvail,
        validateEntry,
        checkUsernameExists
    }