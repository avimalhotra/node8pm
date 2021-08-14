const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');

    // Connection URL
const url = 'mongodb://localhost:27017';

// Enter Database Name
const dbName = 'demo';

 // Create a new MongoClient
 const client = new MongoClient(url,{ useUnifiedTopology: true });


// insert

/* const insertDocuments = function(db, callback) {
    // Get the documents collection
const collection = db.collection('cars');

    // Insert some documents
collection.insertMany([
    { name:"alto 800", type:"hatchback",price:350000, fuel:"petrol"},
    { name:"alto K10", type:"hatchback",price:400000, fuel:"petrol"},
], function(err, result) {
    
    assert.equal(err, null);
    //assert.strictEqual(1, result.result.n);
    assert.strictEqual(2, result.insertedCount);
    console.log("Inserted two documents in collection");
    callback(result);
});
}  */  


/* const findDocuments = function(db, callback) {
   
    // Get the documents collection
    const collection = db.collection('cars');
   
     // Find some documents
    collection.find({name:"baleno"}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
    });
} */

/* const updateDocument = function(db, callback) {
 
    // Get the documents collection
    const collection = db.collection('cars');
  
    // Update document where x is 5, set y equal to 8
    collection.updateOne({ price :800000 }
    , { $set: { price : 820000 } }, function(err, result) {
       
    assert.equal(err, null);
    assert.equal(1, result.modifiedCount);
    console.log("Updated the document");
    callback(result);
  });  
}   */  



client.connect((err)=>{
  assert.equal(null, err);
  console.log("Connected successfully to db server");

  const db = client.db(dbName);
  client.close();
  
  /* insertDocuments(db, function() {
    client.close();
  }); */

  /* findDocuments(db,()=>{
      client.close();
  }) */

  /* updateDocument(db,()=>{
    client.close();
}) */


});