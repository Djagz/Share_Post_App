var userController = require('../controllers/userController');
var informationController = require('../controllers/informationController');

var path = require('path');

module.exports = function(app) {

    app.post('/user', function(req, res)
        {
            console.log("API Running...");
            userController.create(req, res)});
    // app.get('/email', userController.findEmail);
    /*app.post('/userlogin', userController.userlogin)

    app.post('/information', informationController.create);
    app.get('/information/:id', informationController.showmine);
    app.get('/information', informationController.showall);
    app.put('/information/:id', informationController.update);
    app.delete('/information/:id', informationController.delete)*/
    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./myAngularApp/dist/index.html"))
    });
}