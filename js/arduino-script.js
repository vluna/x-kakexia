var fs = require('fs');
var five = require("johnny-five");
var force_sensor, force_sensor_2;
var force_applied, force_applied_2;

(new five.Board()).on("ready", function() {

  	force_sensor = new five.Sensor({
  		pin: "A0",
    	freq: 25
  	});

  	force_sensor_2 = new five.Sensor({
  		pin: "A1",
    	freq: 25
  	});

  	//setTimeout(function(){
  		var date = new Date();
  		var month = date.getMonth();
  		var day = date.getDay();
  		var year = date.getYear();

  		force_sensor.scale([0, 255]).on("data", function() {


  			force_applied = this.scaled;
    		console.log("Force 1: " + this.scaled);
  		});


  		force_sensor_2.scale([0, 255]).on("data", function() {
  	// 		var obj = {
			// 	Date: day + ' - ' + month + ' - ' + year,
			// 	Weight: this.scaled
			// };

			// var json = JSON.stringify(obj);
			// fs.writeFile('../data.json', json, 'utf8', function(err) {
			//     if (err) throw err;
			//     console.log('complete');
			//     });

  			force_applied_2 = this.scaled;
    		console.log("Force 2: " + this.scaled);
    		var average = (force_applied + force_applied_2) / 2;

    		  	var obj = {
				Date: day + ' - ' + month + ' - ' + year,
				Weight: average
			};

			var json = JSON.stringify(obj);
			fs.writeFile('../data.json', json, 'utf8', function(err) {
			    if (err) throw err;
			    console.log('complete');
			    });


  		});

  		//console.log("Average: " + (force_applied + force_applied_2) / 2);
  	//}, 1000);
});