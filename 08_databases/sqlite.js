let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('mydb.db');

// Create Table  
db.serialize(function() {  
  db.run("CREATE TABLE IF NOT EXISTS Users (Name TEXT, Age INTEGER)");  
});

// Insert into Table  
db.serialize(function() {  
  db.run("INSERT into Users(Name,Age) VALUES ('Mushtaq',24)");  
  db.run("INSERT into Users(Name,Age) VALUES ('Fazil',23)");  
}); 

// Select All Data  
db.serialize(function() {  
  db.all("SELECT * from Users", function(err,rows) {  
    if(err) {  
      console.log(err);  
    } else {  
      console.log(rows);  
    }  
  });  
});  

db.serialize(() => {
  db.each(`SELECT Name as name,
                  Age as age
           FROM Users`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.name + "\t" + row.age);
  });
});

//Perform UPDATE operation  
//db.run("UPDATE table_name where condition");        

//Perform DELETE operation  
//db.run("DELETE * from table_name where condition");  

db.close();