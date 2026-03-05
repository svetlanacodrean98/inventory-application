const express = require("express");
const app = express();
const drinkRouter = require("./routes/drinkRouter");
const snackRouter = require("./routes/snackRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/drinks", drinkRouter);
app.use("/snacks", snackRouter);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if(error) {
        throw error;
    }
    console.log(`Listening on port ${PORT}...`);
})