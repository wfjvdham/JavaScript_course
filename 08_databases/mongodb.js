let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mydb";

// Create database with two users
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   console.log("Connected to the database!");
//   let dbo = db.db("mydb");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     dbo.collection("customers").insertMany([{
//       name: "Wim",
//       age: "32",
//     }, {
//       name: "Piet",
//       age: "66",
//     }], function(err){
//       console.log("Customers inserted!");
//       db.close();
//     });
//   });
// });

// Find documents using some filter
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   console.log("Connected to the database!");
//   let dbo = db.db("mydb");
//   // retrieve a collection reference
//   dbo.collection('customers', function(err, collectionref) { 
//     var cursor = collectionref.find({name: "Wim"});
//     cursor.toArray(function(err, docs) {
//         console.log(JSON.stringify(docs));
//     });
//   });
// });

// Delete documents from database
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   console.log("Connected to the database!");
//   let dbo = db.db("mydb");
//   // retrieve a collection reference
//   dbo.collection('customers', function(err, collectionref) { 
//     collectionref.deleteMany({name: "Piet"});
//   });
// });

// Update documents
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  console.log("Connected to the database!");
  let dbo = db.db("mydb");
  // retrieve a collection reference
  dbo.collection('customers', function(err, collectionref) { 
    scollectionref.updateOne(
      { "name" : "Wim" },
      { $set: { "age" : "29" } }
   );
  });
});