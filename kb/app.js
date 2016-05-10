var app = require('express')();
var dbObj = require('./dao/test_db');
var router = require('./routers/test_router');
var dbUrl = "mongodb://localhost:27017/mydb";

app.use("/",router);
app.use("/beer",router);

dbObj.connect(dbUrl,function(err){
	if(err){
		console.log("Error initializing app");
		process.exit(1);
	}
	else{
		app.listen(3000);
		console.log("Yo! I'm up and running");
	}
});
