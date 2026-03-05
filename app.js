const express = require("express");
const app = express();
const path = require("node:path");
const drinkRouter = require("./routes/drinkRouter");
const snackRouter = require("./routes/snackRouter");
const indexRouter = require("./routes/indexRouter");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/drinks", drinkRouter);
app.use("/snacks", snackRouter);
app.use("/", indexRouter);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if(error) {
        throw error;
    }
    console.log(`Listening on port ${PORT}...`);
})