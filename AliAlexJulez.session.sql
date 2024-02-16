/*INSERT INTO users2 (username, email, passwordHash, tokenKey) VALUES ("hei", "hei@hei.com", "passordetmitt", );*/

/*INSERT INTO books (title, author, year, relations) VALUES ("Boken om Bob", "Bob", 2002, "hei");*/

/*SELECT users2.username, books.title
FROM users2
JOIN user_book_rel ON users2.id = user_book_rel.user_id
JOIN books ON user_book_rel.book_id = books.id
WHERE users2.username = 'username';*/

SELECT * from _collections;
