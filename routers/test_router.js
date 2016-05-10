var express = require('express');
var router = express.Router();
var db = require('../dao/test_db');


router.route("/").get(function(req,res){res.send('{"hi":"bye"}')});
router.route("/hi").get(function(req,res){
	db.get().collection('test').find({"name":"rahul.go"}).toArray(function(err,result){
		if(!err){
			res.send(result);
		}
	})
})
module.exports = router

