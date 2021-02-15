const express = require("express");
const bodyParser = require("body-parser");
const helmet = require('helmet')
const morgan = require('morgan')
const db = require("./app/models");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("✅ Connected to the database!");
    })
    .catch(err => {
        console.log("❌ Cannot connect to the database!", err);
        process.exit();
    });

require("./app/routes/trip.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});