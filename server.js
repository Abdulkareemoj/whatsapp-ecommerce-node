process.env = require('./.env.js')(process.env.NODE_ENV || 'development');
const port = process.env.PORT || 5000;
const express = require('express');

//all the business logic lies here so its imported as one file 
let indexRoutes = require('./routes/index.js');

const main = async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use('/', indexRoutes);

    //because its not supposed to be accesesed as a site we send a 404 error
    app.use('*', (req, res) => res.status(404).send('404 Not Found'));
    
    app.listen(port, () =>
        console.log(`App now running and listening on port ${port}`)
    );
};
main();