// var five = require("johnny-five"),
//   fsr;

// (new five.Board()).on("ready", function() {

//   // Create a new `fsr` hardware instance.
//   fsr = new five.Sensor({
//     pin: "A0",
//     freq: 25
//   });


//   // Scale the sensor's value to the LED's brightness range
//   fsr.scale([0, 255]).on("data", function() {

//     // set the led's brightness based on force
//     // applied to force sensitive resistor
//     console.log(this.scaled);
//   });
// });


var opts = {
  lines: 12, // The number of lines to draw
  angle: 0, // The length of each line
  lineWidth: 0.15, // The line thickness
  pointer: {
    length: 0.8, // The radius of the inner circle
    strokeWidth: 0.035, // The rotation offset
    color: '#000000' // Fill color
  },
  limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
  colorStart: '#6FADCF',   // Colors
  colorStop: '#8FC0DA',    // just experiment with them
  strokeColor: '#E0E0E0',   // to see which ones work best for you
  generateGradient: true
};

var target = document.getElementById('foo'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 3000; // set max gauge value
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(1250); // set actual value