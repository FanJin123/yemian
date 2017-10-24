var express = require('express');
var router = express.Router();
var fs=require("fs");
/* GET home page. */
var data=fs.readFileSync("public/fw.txt","utf-8");
var num=data.toString().slice(-1);
router.get('/', function(req, res, next) {
  var num2=num++;
  fs.writeFileSync("public/fw.txt","页面刷新："+num2)
  res.send("页面刷新："+num2)
});
router.get('/f', function(req, res, next) {
  var num2=num++;
  fs.readFile("public/fw.txt","utf-8",function(err,data){
  	if(err){
  		console.log(err)
  	}else{
  		console.log(data)
  		fs.writeFile('public/fj.txt','fanjin页面:'+num2,function(err){
  			if(err){
  				console.log(err)
  			}
  		})
  		res.render('lm',{title:data})
  	}
  })
});

module.exports = router;

