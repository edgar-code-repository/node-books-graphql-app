const expressApp = require('./app');
const port = 4001;
const message = "App running on port:";

expressApp.listen(port, () => {
    console.log(message + " " + port);
});
