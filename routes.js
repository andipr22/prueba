/**
 * Created by apaezros on 18/04/2016.
 */
module.exports = function(app){
    app.use('/login', require('./controllers/login.controller'));
    app.use('/register', require('./controllers/register.controller'));
    app.use('/app', require('./controllers/app.controller'));
    app.use('/api/users', require('./controllers/api/users.controller'));
}