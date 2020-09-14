const express = require('express');
const exphbs = require('express-handlebars');
// Requires the 'express-session' module
const session = require(`express-session`);
const path = require('path');
const helmet = require('helmet')
const cors = require('cors')
const author = require('./routes/author');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());

// use for req.body

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/users', author);

app.get('/', (req, res) => {
    res.send("home");
});

app.get('/api/get/:table', (req, res) => {
    res.send(req.params.table);
});



const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'userDB'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
    // connection.query(
    //     "INSERT INTO userName (userName, pass) VALUES ('Bob', '123')",
    //     function(err, results) {
    //         console.log(results); // results contains rows returned by server
    //     })
    // createBlogPost('JohnWick', 'hello guys');
    // createBlogPost('Bob', 'hello guys');
    // createBlogComment('jack', 'the comment', 1)
    // createBlogComment('JohnWick', 'the comment2', 2)




    // with placeholder
    connection.query(
        "SELECT * FROM userName",
        function(err, results) {
            console.log(results);
        }
    );

});
// simple query
function createBlogPost(name, post) {
    connection.query(
        `INSERT INTO blogPost(userName,post) VALUES("${name}","${post}")`,
        function(err, results) {
            console.log(results);
        }
    );
}

function createBlogComment(name, comment, blogPostId) {
    connection.query(
        `INSERT INTO blogComment(userName,comment, blogPostId) VALUES('${name}','${comment}','${blogPostId}')`,
        function(err, results) {
            console.log(results);
        }
    );
}
// drop table blogPost;
// CREATE TABLE blogPost(
//   id INTEGER(11) AUTO_INCREMENT NOT NULL,
//   post VARCHAR(1000),
//   userName VARCHAR(100),
//   timeStamp datetime DEFAULT CURRENT_TIMESTAMP, 
//   PRIMARY KEY (id)
// );
// drop table blogComment;
// CREATE TABLE blogComment(
//   id INTEGER(11) AUTO_INCREMENT NOT NULL,
//   comment VARCHAR(1000),
//   userName VARCHAR(100),
//   timeStamp datetime DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (id)
// );

// Routes
// =============================================================
app.use(require('./routes'));


app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});