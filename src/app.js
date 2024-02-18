
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const { resolve } = require("path");

require("dotenv").config();

const middlewares = require("./middlewares");

const db = new sqlite3.Database(
  resolve(__dirname, "../bin/pb/pocketbase/pb_data/data.db")
);

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.get("/books", (req, res) => {
  // NOTE: We need to get the ID from the query string in the request object
  const { id } = req.query;

  if (id) {
    db.get("SELECT * FROM books WHERE id = ?", [id], (err, rows) => {
      if (err) {
        console.log("Error running sql: " + err);

        res.status(500);
        res.json({
          message: "Internal Server Error",
        });
      }

      res.json({
        message: "list of products",
        data: rows,
      });
    });

    return;
  }

  // We need to run a sql query against our pocketbase DB to get all the products
  db.all("SELECT * FROM books", (err, rows) => {
    if (err) {
      console.log("Error running sql: " + err);

      res.status(500);
      res.json({
        message: "Internal Server Error",
      });
    }

    res.json({
      message: "all books",
      data: rows,
    });
  });
});

app.post("/books", (req, res) => {
  const { title, author, year } = req.body;

  db.run(
    "INSERT INTO books (title, author, year) VALUES (?, ?, ?)",
    [title, author, year],
    function cb(err) {
      if (err) {
        console.log(`Error running sql: ${err}`);

        res.status(500);
        res.json({
          message: "Internal Server Error",
        });
      }

      res.json({
        message: `book ${this.lastID} added`,
      });
    }
  );
});

app.delete("/books", (req, res) => {
  const { id } = req.query;

  db.run("DELETE FROM books WHERE id = ?", [id], (err) => {
    if (err) {
      console.log(`Error running sql: ${err}`);

      res.status(500);
      res.json({
        message: "Internal Server Error",
      });
    }

    res.json({
      message: `book ${id} deleted`,
    });
  });
});

app.get("/users", (req, res) => {

  // We need to run a sql query against our pocketbase DB to get all the products
  db.all("SELECT * FROM users2", (err, rows) => {
    if (err) {
      console.log("Error running sql: " + err);

      res.status(500);
      res.json({
        message: "Internal Server Error",
      });
    }

    res.json({
      message: "all users",
      data: rows,
    });
  });
});

module.exports = app;