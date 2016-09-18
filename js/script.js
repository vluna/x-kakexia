var total_weight;

var opts = {
    lines: 12, // The number of lines to draw
    angle: 0, // The length of each line
    lineWidth: 0.15, // The line thickness
    pointer: {
        length: 0.8, // The radius of the inner circle
        strokeWidth: 0.035, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'true',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',   // to see which ones work best for you
    generateGradient: true
};

var target = document.getElementById('weight'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 300; // set max gauge value
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(1);

setInterval(function() {
    $.getJSON('../data.json', function(data) {
        total_weight = data.Weight.toFixed(2)/2;
        gauge.animationSpeed = 1;
        if(total_weight < 1) {
            gauge.set(1); // set actual value
            $('.current-weight').html('0(Kg)');
        } else {
            gauge.set(total_weight); // set actual value
            $('.current-weight').html(total_weight+ '(Kg)');
        }
    });
}, 500);



// // set the dimensions of the canvas
// var margin = {top: 20, right: 20, bottom: 70, left: 40},
//     width = 600 - margin.left - margin.right,
//     height = 300 - margin.top - margin.bottom;


// // set the ranges
// var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

// var y = d3.scale.linear().range([height, 0]);

// // define the axis
// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom")


// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left")
//     .ticks(10);


// // add the SVG element
// var svg = d3.select("body").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", 
//           "translate(" + margin.left + "," + margin.top + ")");


// // load the data
// d3.json("data.json", function(error, data) {

//     data.forEach(function(d) {
//         d.Letter = d.Letter;
//         d.Freq = +d.Freq;
//     });
  
//   // scale the range of the data
//   x.domain(data.map(function(d) { return d.Letter; }));
//   y.domain([0, d3.max(data, function(d) { return d.Freq; })]);

//   // add axis
//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis)
//     .selectAll("text")
//       .style("text-anchor", "end")
//       .attr("dx", "-.8em")
//       .attr("dy", "-.55em")
//       .attr("transform", "rotate(-90)" );

//   svg.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
//     .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 5)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Frequency");


//   // Add bar chart
//   svg.selectAll("bar")
//       .data(data)
//     .enter().append("rect")
//       .attr("class", "bar")
//       .attr("x", function(d) { return x(d.Letter); })
//       .attr("width", x.rangeBand())
//       .attr("y", function(d) { return y(d.Freq); })
//       .attr("height", function(d) { return height - y(d.Freq); });

// });




$('#menu-questionaire').click(function(){
    $('#chat').css("display", "none");
    $('#menu-chat').removeClass("nav-menu-selected");

    $('#questionaire').css("display", "inline");
    $('#menu-questionaire').addClass("nav-menu-selected");

    $('#home').css("display", "none");
    $('#menu-home').removeClass("nav-menu-selected");

    $('#history').css("display", "none");
    $('#menu-history').removeClass("nav-menu-selected");

    //// With Animation
    // $('#chat').fadeOut(100);
    // $('#menu-chat').removeClass("nav-menu-selected");

    // $('#questionaire').fadeIn(500);
    // $('#menu-questionaire').addClass("nav-menu-selected");

    // $('#home').fadeOut(100);
    // $('#menu-home').removeClass("nav-menu-selected");

    // $('#history').fadeOut(100);
    // $('#menu-history').removeClass("nav-menu-selected");
});

$('#menu-history').click(function(){
    $('#chat').css("display", "none");
    $('#menu-chat').removeClass("nav-menu-selected");

    $('#questionaire').css("display", "none");
    $('#menu-questionaire').removeClass("nav-menu-selected");

    $('#home').css("display", "none");
    $('#menu-home').removeClass("nav-menu-selected");

    $('#history').css("display", "inline");
    $('#menu-history').addClass("nav-menu-selected");

    //// With Animation
    // $('#chat').fadeOut(100);
    // $('#menu-chat').removeClass("nav-menu-selected");

    // $('#questionaire').fadeOut(100);
    // $('#menu-questionaire').removeClass("nav-menu-selected");

    // $('#home').fadeOut(100);
    // $('#menu-home').removeClass("nav-menu-selected");

    // $('#history').fadeIn(500);
    // $('#menu-history').addClass("nav-menu-selected");
});

$('#menu-home').click(function(){
    $('#chat').css("display", "none");
    $('#menu-chat').removeClass("nav-menu-selected");

    $('#questionaire').css("display", "none");
    $('#menu-questionaire').removeClass("nav-menu-selected");

    $('#home').css("display", "inline");
    $('#menu-home').addClass("nav-menu-selected");

    $('#history').css("display", "none");
    $('#menu-history').removeClass("nav-menu-selected");

    //// With Animation
    // $('#chat').fadeOut(100);
    // $('#menu-chat').removeClass("nav-menu-selected");

    // $('#questionaire').fadeOut(100);
    // $('#menu-questionaire').removeClass("nav-menu-selected");

    // $('#home').fadeIn(500);
    // $('#menu-home').addClass("nav-menu-selected");

    // $('#history').fadeOut(100);
    // $('#menu-history').removeClass("nav-menu-selected");
});

$('#menu-chat').click(function(){
    $('#chat').css("display", "inline");
    $('#menu-chat').addClass("nav-menu-selected");

    $('#questionaire').css("display", "none");
    $('#menu-questionaire').removeClass("nav-menu-selected");

    $('#home').css("display", "none");
    $('#menu-home').removeClass("nav-menu-selected");

    $('#history').css("display", "none");
    $('#menu-history').removeClass("nav-menu-selected");

    //// With Animation
    // $('#chat').fadeIn(500);
    // $('#menu-chat').addClass("nav-menu-selected");

    // $('#questionaire').fadeOut(100);
    // $('#menu-questionaire').removeClass("nav-menu-selected");

    // $('#home').fadeOut(100);
    // $('#menu-home').removeClass("nav-menu-selected");

    // $('#history').fadeOut(100);
    // $('#menu-history').removeClass("nav-menu-selected");
});