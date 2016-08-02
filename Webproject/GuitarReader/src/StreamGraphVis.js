
/**
* Inspired by: http://bl.ocks.org/WillTurman/4631136
*
*/
function streamGraphVis(){
    var streamGraphColors = ["#045A8D", "#2B8CBE", "#74A9CF", "#A6BDDB"/*, "#D0D1E6", "#F1EEF6"*/];
    var strokeColor = streamGraphColors[0];
    //console.log("streamGraphData", streamGraphData);

    var varName = d3.keys(streamGraphData).filter(function(d){return d.key});
    //console.log("varName", varName);

    var margin = {top: 30, right: 80, bottom: 30, left: 30};
    var width = 700;
    var height = 400;

    var ordinal = d3.scale.ordinal()
        .domain(["Power Chords", /*"other", "undefined"*/ "Barre Chords", "Single Notes"])
        .range(streamGraphColors);

    var tooltip = d3.select("body")
        .append("div")
        .attr("class", "remove")
        .style("position", "absolute")
        .style("z-index", "20")
        .style("visibility", "hidden")
        .style("top", "30px")
        .style("left", "55px");

    var x = d3.scale.linear()
        .range([margin.left, width- margin.left - margin.right]);

    var y = d3.scale.linear()
        .range([height, margin.top]);

    var z = d3.scale.ordinal()
        .range(streamGraphColors);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y);

    var yAxisr = d3.svg.axis()
        .scale(y);

    var stack = d3.layout.stack()
        .offset("silhouette")
        .values(function(d) { return d.values; })
        .x(function(d) { return d.time; })
        .y(function(d) { return d.value; });

    var nest = d3.nest()
        .key(function(d) { return d.key; });


    var area = d3.svg.area()
        .interpolate("cardinal")
        .x(function(d) { return x(d.time); })
        .y0(function(d) { return y(d.y0); })
        .y1(function(d) { return y(d.y0 + d.y); });

    var svg = d3.select("body").select("#streamGraphElement").append("div").attr("id", "stream").append("svg")
        .attr("id", "streamGraphVis"+numVis)
        .attr("width", width+ margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom+60)
        .attr("style", "border-style: solid; border-width:1px")
        .append("g")
        .attr("id", "layers")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    var graph = function(dat){
        dat.forEach(function(d){
            d.value = +d.value;
        })
    };

    var layers = stack(nest.entries(streamGraphData));
    //console.log ("layers", layers);


    x.domain([0, d3.max(streamGraphData, function(d){ return d.time})]);
    y.domain([0, d3.max(streamGraphData, function(d) { return d.y0 + d.y; })]);

    svg.selectAll(".layer")
        .data(layers)
        .enter().append("path")
        .attr("id", function(d){ return d.key;})
        .attr("class", "layer")
        .attr("d", function(d) { return area(d.values); })
        .style("fill", function(d, i) { return z(i); });

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .attr("stroke-width", 2)
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + (width - margin.left - margin.right) + ", 0)")
        .attr("stroke-width", 2)
        .call(yAxis.orient("right"));

    svg.append("g")
        .attr("class", "y axis")
        .attr("stroke-width", 2)
        .attr("transform", "translate(" + (margin.left) + ", 0)")
        .call(yAxis.orient("left"));


    svg.append("g")
        .attr("class", "legendOrdinal")
        .attr("transform", "translate("+(width - margin.right+20)+", "+margin.top+")");

    var legendOrdinal = d3.legend.color()
        .shape("path", d3.svg.symbol().type("triangle-up").size(150)())
        .shapePadding(10)
        .scale(ordinal);

    svg.select(".legendOrdinal")
        .call(legendOrdinal);

    svg.append("text")
        .attr("x", 0)
        .attr("y", 0)
        .attr("font-weight", "bold")
        .attr("font-size", "18")
        .text("Types of Chords/Notes played over time");

    svg.append("line")
        .attr("x1", -20)
        .attr("y1", 8)
        .attr("x2", width+70)
        .attr("y2", 8)
        .attr("style", "stroke:rgb(0,0,0);stroke-width:1");

    svg.append("text")
        .attr("x", -160)
        .attr("y", -18)
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .style("font-weight", "bold")
        .text("times played");

    svg.append("text")
        .attr("x", 240)
        .attr("y", -640)
        .attr("transform", "rotate(90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .style("font-weight", "bold")
        .text("times played");

    svg.append("text")
        .attr("x", 350)
        .attr("y", 440)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .style("font-weight", "bold")
        .text("time (in sec)");





}

/**
 *
 * @param id
 */
function onMouseEnterBar(id){
    //console.log("id", id);
    document.getElementById(id.id).fill = "black";
    /*
    var svg = d3.select("#streamGraphElement");
    svg.select("#"+id).transition()
        .duration(250)
        .attr("opacity", 0.6);
        */
}
