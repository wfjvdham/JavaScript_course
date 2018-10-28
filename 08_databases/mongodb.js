let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  let dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    dbo.collection("customers").insertOne({
      name: "Wim",
      age: "32",
    }, function(err){
      console.log("Customer inserted!");
      db.close();
    });
  });
});

// let url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   let dbo = db.db("mydb");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// }); 