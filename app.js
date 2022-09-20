let indexRoutes = require('./routes/index.js');

const main = async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use('/', indexRoutes);
    app.use('*', (req, res) => res.status(404).send('404 Not Found'));
    app.listen(port, () =>
        console.log(`App now running and listening on port ${port}`)
    );
};
main();