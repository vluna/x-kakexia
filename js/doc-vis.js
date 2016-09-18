/*
 * HISTORY SECTION
 * Draws the graph in history screen according to the value in the
 * json file
 */
var margin = {top: 60, right: 120, bottom: 70, left: 20},
    width = window.innerWidth - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom,
    mean;

// Parse the date / time
var parseDate = d3.time.format("%Y-%m").parse;

var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickFormat(d3.time.format("%Y-%m"));

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("#history-doc").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data-doctor.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.value = +d.value;
    });
  
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, (d3.max(data, function(d) { return d.value; }))+20]);
  
  mean = d3.mean(data,function(d) { return + d.value });

  $('.average-weight').html(mean.toFixed(2) +'(Kg)');

  console.log("MEAN: " +mean);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Kg");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#00a368")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });
});