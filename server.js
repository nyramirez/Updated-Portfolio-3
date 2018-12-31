let express = require("express");
let app = express();

app.use(express.static("public"));

let PORT = process.env.PORT || 3000;

app.use(express.urlencoded ({extended: true}));
app.use(express.json());

require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("Application running on http://localhost:" + PORT)
});