var fs = require('fs');
var five = require("johnny-five");
var force_sensor;

(new five.Board()).on("ready", function() {

  	force_sensor = new five.Sensor({
  		pin: "A0",
    	freq: 25
  	});

  	window.setInterval(function(){
  		var date = new Date();
  		var month = date.getMonth();
  		var day = date.getDay();
  		var year = date.getYear();

  		force_sensor.scale([0, 255]).on("data", function() {
  			var obj = {
				Date: day + ' - ' + month + ' - ' + year,
				Weight: this.scaled
			};

			var json = JSON.stringify(obj);
			fs.writeFile('../data.json', json, 'utf8', callback);

    		console.log(this.scaled);
  		});
  	}, 60000);
});