Database
========================================================

> A database is an organized collection of data, stored and accessed electronically.

Many different options but the two popular combinations with JavaScript are:

1. SQL Database, for example [SQLite](http://www.sqlitetutorial.net/sqlite-nodejs)
1. [MongoDB](https://www.mongodb.com/)

SQLite
========================================================

- An SQL database is structured like one or multiple tables
- The types and the structure needs to be defined before
- Uses SQL query language where the most important SQL verbs are: 
  - `SELECT` to specify which columns you want from a table
  - `FROM` to specify from which table you want to retrieve data
  - `WHERE` to specify some conditions for your selection
  - `INSERT` to insert new data
  - `DELETE` to delete some data
  - `UPDATE` to change some existing data
  - `CREATE TABLE` to create a new table

In `index.js` you can find some examples using the verbs from above.

## `serialize()`

When the order of the queries is important you have to use the `serialize()` function. This function will ensure that the queries run in order.

MongoDB
========================================================

> Is a NoSQL document-oriented database

- No need to define a structure or types before
- Stores (JSON) documents
- Does not uses tables


## Starting MongoDB

Windows



Ubuntu

`sudo service mongod start`