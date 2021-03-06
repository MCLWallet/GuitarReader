


var numVis = 1;                                             // amount of requested visualizations
var visRequested = false;


/**
 * Initiates the Line Graph view
 * analyzed dataset: filteredNotes
 */
function visLineGraph(){
    var width = 700,
        height = 460,
        margins = {
            top: 30,
            right:20,
            bottom: 30,
            left: 54
        };
    var stringNames = ["E (6th String)", "A (5th String)", "d (4th String)",
        "g (3th String)", "b (2th String)", "e (1th String)"];
    var colorLegend = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"];
    //var colorLegend2 = ["#004490", "#0374B3", "#0EB1D6", "#078AC2", "#76DBEC", "#60B1D9"];

    var ordinal = d3.scale.ordinal()
        .domain(stringNames)
        .range(colorLegend);

    var x = d3.scale.linear().range([margins.left, width-margins.right]);
    var y = d3.scale.linear().range([height-margins.bottom, margins.top+margins.bottom]);
    var xScale = x.domain([0, filteredNotes[filteredNotes.length-1][3]]);
    var yScale = y.domain([1, maxString]);
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .innerTickSize(-height+margins.top+margins.bottom+30)
        .outerTickSize(0)
        .tickPadding(10);
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .innerTickSize(-width+margins.right+margins.left)
        .outerTickSize(0)
        .tickPadding(10);

    var svg = d3.select("body").select("#lineGraphElement").append("svg")
        .attr("id", "line"+numVis)
        .attr("width", width+margins.left+margins.right)
        .attr("height", height+margins.top+margins.bottom)
        .attr("transform", "translate(0,"+(height-margins.bottom)+")")
        .attr("style", "border-style: solid; border-width:1px");
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

    // axis descriptions
    svg.append("text")
        .attr("x", 40-height/2)
        .attr("y", 8)
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .style("font-weight", "bold")
        .text("times played");
    svg.append("text")
        .attr("x", (width/2)+50)
        .attr("y", height+10)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .style("font-weight", "bold")
        .text("time (in sec)");

    // adding lines
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

    // vis headline
    svg.append("text")
        .attr("x", 50)
        .attr("y", 30)
        .attr("font-weight", "bold")
        .attr("font-size", "18")
        .text("Strings played over time");

    svg.append("line")
        .attr("x1", 10)
        .attr("y1", 38)
        .attr("x2", width+margins.right+margins.left-20)
        .attr("y2", 38)
        .attr("style", "stroke:rgb(0,0,0);stroke-width:1");


    // adding color legend
    var legend = svg.append("g");
    legend.append("rect")
        .attr("width", 120)
        .attr("height", 140)
        .attr("transform", "translate(70,60)")
        .attr("fill", "white")
        .attr("stroke", "black");
    svg.append("g")
        .attr("class", "legendOrdinal")
        .attr("transform", "translate(85,75)");
    var legendOrdinal = d3.legend.color()
        .shape("path", d3.svg.symbol().type("triangle-up").size(60)())
        .shapePadding(10)
        .scale(ordinal);
    svg.select(".legendOrdinal")
        .call(legendOrdinal);


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


// TODO: fix tick axis bug
