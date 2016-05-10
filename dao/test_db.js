var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var dbObj;

exports.connect = function(dbUrl, callback){
	if(dbObj) callback()
		mongoClient.connect(dbUrl,function(err, db){
			if(err){
				console.log("Error connecting to kb-db");
			}
			else{
				console.log('Connection established to kb-db');
				dbObj=db;
				callback();
			}
		});
}
exports.get = function() {return dbObj}
