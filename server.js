let express = require('express'); // Express Server
let bodyParser = require('body-parser'); // Post Body Request
let exphbs = require('express-handlebars'); 
var db = require("./models"); 

let PORT = process.env.PORT || 8080; 
let app = express();

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(express.static("public")); 

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/Controller.js")(app);


app.listen(PORT, ()=>{
    console.log(`App listening on PORT ${PORT}`);
})
