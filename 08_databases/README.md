Database
========================================================

> A database is an organized collection of data, stored and accessed electronically.

Many different options but the two popular combinations with JavaScript are:

1. SQL Database, for example [SQLite](http://www.sqlitetutorial.net/sqlite-nodejs)
1. [MongoDB](https://www.mongodb.com/)

WE only look at the [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations for now because those are the most basic for a persistent storage.

SQLite
========================================================

- An SQL database is structured like one or multiple tables
- The types and the structure needs to be defined before

## Commands

SQLite uses SQL query language where the most important SQL verbs are:

### Create

- `CREATE TABLE` to create a new table  
- `INSERT` to insert new data

### Read

- `SELECT` to specify which columns you want from a table
- `FROM` to specify from which table you want to retrieve data
- `WHERE` to specify some conditions for your selection
  
### Update  

- `UPDATE` to change some existing data

### Delete

- `DELETE` to delete some data


In `sqlite.js` you can find some examples using the verbs from above.

## `serialize()`

When the order of the queries is important you have to use the `serialize()` function. This function will ensure that the queries run in order.

## GUI

[DB Browser for SQLite](http://sqlitebrowser.org/)

MongoDB
========================================================

> Is a NoSQL document-oriented database

- No need to define a structure or types before
- Stores (JSON) documents
- Does not uses tables

MongoDB is very flexible and unstructured. To add some structure the schema's from [mongoose](https://mongoosejs.com/) can be used.

## Starting MongoDB

Windows

`C:\Program Files\MongoDB\Server\3.2\bin\mongod`

**Ubuntu**

`sudo service mongod start`

## Commands

### Create

- `db.createCollection()` to create a collection
- `db.collection.insertMany()` to insert multiple documents
- `db.collection.insertOne()` to insert one document

### Read

- `db.inventory.find( {} )` to get all documents
- `db.inventory.find( { status: "D" } )` to get the documents that match the conditions

### Update

- `db.collection.updateOne()` to update one document
- `db.collection.updateMany()`  to update many documents
- `db.collection.replaceOne()` replace one document

### Delete

- `db.collection.deleteOne()` to delete one document
- `db.collection.deleteMany()` to delete many documents

In `mongodb.js` you can find some examples using the verbs from above.

## GUI

[RoboMongo](https://robomongo.org/)

