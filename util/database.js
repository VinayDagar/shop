const mongodb = require('mongodb');

const MongoClient  = mongodb.MongoClient;

let _db;
const MongoConnect = callback =>{
  MongoClient.connect('mongodb://localhost:27017/vinayDagar', (err, client) => {
    if(err){
      console.log(err)
    }
    
    _db = client.db();
    console.log('Connected');
     return callback();
  });
}

const getDb = ()=>{
  if(_db){
    return _db
  }
  throw 'No database found'
}

exports.mongoConnect = MongoConnect;
exports.getDb = getDb;