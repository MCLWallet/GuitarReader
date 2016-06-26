
var numVis = 1;                                             // amount of requested visualizations
var visRequested = false;


// Starts the visualization (line graph)
function visLineGraph(){
    var width = 1024,
        height = 512,
        margins = {
            top: 20,
            right:20,
            bottom: 20,
            left: 54
        };
    var stringNames = ["E (6th String)", "A (5th String)", "d (4th String)",
        "g (3th String)", "b (2th String)", "e (1th String)"];
    var colorLegend = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"];
    var colorLegend2 = ["#004490", "#0374B3", "#0EB1D6", "#078AC2", "#76DBEC", "#60B1D9"];


    var x = d3.scale.linear().range([margins.left, width-margins.right]);
    var y = d3.scale.linear().range([height - margins.top, margins.bottom]);
    var xScale = x.domain([0, filteredNotes[filteredNotes.length-1][3]]);
    var yScale = y.domain([1, filteredNotes.length/3]);
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .innerTickSize(-height)
        .outerTickSize(0)
        .tickPadding(10);
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .innerTickSize(-width)
        .outerTickSize(0)
        .tickPadding(10);

    var svg = d3.select("body").append("svg")
        .attr("id", "line"+numVis)
        .attr("width", width)
        .attr("height", height+50)
        .attr("transform", "translate(0,"+(height-margins.bottom)+")")
        .attr("class", "fadeIn");

    svg.append("g")
        .attr("id", "xAxis"+numVis)
        .attr("class", "axis")
        .attr("transform", "translate(0,"+ (height-margins.bottom)+")")
        .call(xAxis);
    svg.append("g")
        .attr("id", "yAxis"+numVis)
        .attr("class", "axis")
        .attr("transform", "translate("+(margins.left)+",0)")
        .call(yAxis);

    svg.append("text")
        .attr("x", 50-height/2)
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("times played");

    svg.append("text")
        .attr("x", (width/2)+70)
        .attr("y", height+10)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("time (in sec)");

    var line = d3.svg.line()
        .x(function(d){ return xScale(d.time);})
        .y(function(d){ return yScale(d.played);})
        .interpolate("basis");


    for (var j = 0; j<6; j++){
        svg.append("path")
            .attr("id", stringNames[j])
            .attr("d", line(stats[j]))
            .attr("stroke", colorLegend[j])
            .attr("stroke-width", 2)
            .attr("fill", "none");
    }

    var legend = svg.append("g");

    legend.append("rect")
        .attr("width", 140)
        .attr("height", 120)
        .attr("transform", "translate(80,20)")
        .attr("fill", "white")
        .attr("stroke", "black");

    var pos = 35;
    for (var k = 0; k<6; k++){
        legend.append("circle")
            .attr("r", 8)
            .attr("fill", colorLegend[k])
            .attr("cx", 95)
            .attr("cy", pos);
        legend.append("text")
            .attr("x", 112)
            .attr("y", pos+5)
            .text(stringNames[k])
        pos += 18;
    }

    numVis++;
}

function mousemove(stats) {
    var x0 = x.invert(d3.mouse(this)[0]),
        i = bisectDate(stats, x0, 1),
        d0 = stats[i - 1],
        d1 = stats[i],
        d = x0 - d0.time > d1.time - x0 ? d1 : d0;
    focus.attr("transform", "translate(" + x(d.time) + "," + y(d.played) + ")");
    focus.select("text").text(formatCurrency(d.played));
}

function getMaxStrings(){
  var max = 0;
  if (stats_E.length>=max) max=stats_E.length;
  if (stats_A.length>=max) max=stats_A.length;
  if (stats_d.length>=max) max=stats_d.length;
  if (stats_g.length>=max) max=stats_g.length;
  if (stats_b.length>=max) max=stats_b.length;
  if (stats_e.length>=max) max=stats_e.length;
  return max;
}
