const express = require("express");

const sqlite3 = require("sqlite3").verbose();

const { resolve } = require("path");

const db = new sqlite3.Database(
  resolve(__dirname, "../../bin/pb/pocketbase/pb_data/data.db")
);

const router = express.Router();

router.get("/products", (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) {
      console.error(err.message);

      res.status(500).json({
        error: "An error occurred",
      });
    }
    res.json({
      message: "List of products",
      data: rows,
    });
  });
});

router.post("/products", (req, res) => {
  const { name, price } = req.body;

  db.run(
    "INSERT INTO products (name, price) VALUES (?, ?)",
    [name, price],
    function cb(err) {
      if (err) {
        console.log(`Error running sql: ${err}`);

        res.status(500);
        res.json({
          message: "Internal Server Error",
        });
      }

      res.json({
        message: `product ${this.lastID} added`,
      });
    }
  );
});

module.exports = router;
