const passport = require('passport')


exports.isAuth =(req, res, done) => {
    return passport.authenticate('jwt');
}



exports.sanitizeUser = (user) =>{
    return{id:user.id,role:user.role}
}


exports.cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZThmNTIyNjA4NmUyOTExOGMyMjU3NiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzEwMTkyOTkzfQ.JOF6VkSj1L9bFtR0MofIxZs2jc-4reUgFuAJGLsysi4`
    return token;
};