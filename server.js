// for heroku
if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
//___________________
//Dependencies
//___________________
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
const Books = require("./models/bookData.js");
const show = console.log;
show("im cool");
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000; // for heroku
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI; // you need to let heroku determine the path
// Connect to Mongo
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Error / success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", MONGODB_URI));
db.on("disconnected", () => console.log("mongo disconnected"));
// open the connection to mongo
db.on("open", () => {});
//___________________
//Middleware
//___________________
//use public folder for static assets
app.use(express.static("public"));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
app.use(express.json()); // returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride("_method")); // allow POST, PUT and DELETE from a form
//___________________
// Routes
//___________________
//localhost:3000
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// =============================================
//
//              * RESTFUL ROUTES *
//       "Representational State Transfer"
//
// =============================================

/*                      THE BIG 5 REQUESTS
• GET ==> the user asks for information from a server
• POST ==> sending data to a server
• PUT ==> sending data to a server with the intention of changing (but really more like replacing) something that already exists
• DELETE ==> request to remove data from a server
• PATCH ==> you want to make a small change (misspelling, inventory #, or similar) to something that already exists (as opposed to PUT, that technically replaces the object)
*/

/*                        I.N.D.U.C.E.S.
    INDEX  |  NEW  |  DESTROY  |  UPDATE  | CREATE |  EDIT  |  SHOW  |
*/

// INDEX | GET Request | Presentational Route | ==> Display a list of all orders
app.get("/books", (req, res) => {
  Books.find({}, (err, allBooks) => {
    if (err) {
      res.send(err);
    } else {
      res.render("Index", {
        books: allBooks,

        // *** ANY OTHER INFO WE NEED TO PASS AS PROPS?
      });
    }
  });
});
// *** COME BACK AND CREATE A 404 that we pass as our ERR

// NEW | GET Request | Presentational Route | ==> Return an HTML form for creating a new order
app.get("/books/new", (req, res) => {
  res.render("New");
});

// DESTROY | DELETE Request | Functional Route | ==> Delete a specific order
// "/<nameOfResource>/:id"

// UPDATE | PUT Request | Functional Route | ==> Update a specific order
// "/<nameOfResource>/:id"

// CREATE | POST Request | Functional Route | ==> Create a new order
app.post("/books", (req, res) => {
  Books.create(req.body, (err, createdBook) => {
    err ? res.send(err) : res.redirect("/books");

    // *** COME BACK AND CREATE A 404 that we pass as our ERR

    console.log(createdBook);
  });
});

// EDIT | GET Request | Presentational Route | ==> Return an HTML form for editing an order
// "/<nameOfResource>/:id/edit"

// SHOW | GET Request | Presentational Route | ==> Display a specific order
// "/<nameOfResource>/:id"
app.get("/books/:id", (req, res) => {
  Books.findById(req.params.id, (err, foundBook) => {
    if (err) {
      res.send(err);
    } else {
      res.render("Show", {
        book: foundBook,
      });
    }
  });
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log("Listening on port:", PORT));
