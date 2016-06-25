
/*
   Algorithm modified
 http://bl.ocks.org/tjdecke/5558084

 */
function heatmapVis(){
    var width = 1024,
        height = 512,
        margins = {
            top: 20,
            right:20,
            bottom: 20,
            left: 20
        };
    var gridSize = Math.floor((width-margins.left-margins.right)/22);
    var legendWidth = gridSize*2;
    var buckets = 9;
    var colorLegend = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494"];
    var strings = ["e", "b", "g", "d", "A", "E"];
    var frets = new Array(22);
    for (var f = 0; f<=22; f++) frets[f] = f;


    var svg = d3.select("body").append("svg")
        .attr("id", "heatmap"+numVis)
        .attr("width", width)
        .attr("height", height)
        .attr("transform", "translate(0,"+(margins.left-margins.top)+")")
        .attr("class", "fadeIn");


    var stringLabels = svg.selectAll(".stringLabel")
        .data(strings).enter()
        .append("text")
        .text(function(d){return d;})
        .attr("x", margins.left)
        .attr("y", function(d,i){ return 10+margins.top + margins.bottom + i * gridSize;});

    var fretLabels = svg.selectAll(".fretLabel")
        .data(frets).enter()
        .append("text")
        .text(function(d){return d;})
        .attr("x", function(d,i){ return 16+margins.left + margins.right + i * gridSize;})
        .attr("y", margins.top);

    var colorScale = d3.scale.quantile()
        .domain([0, buckets-1, d3.max(heatmapData, function(d){ return d.amount;})])
        .range(colorLegend);

    var cards = svg.selectAll(".note")
        .data(heatmapData, function(d) {return d.string+":"+ d.fret;});

    cards.append("title");

    cards.enter().append("rect")
        .attr("x", function(d) { return 44+margins.left+margins.right+(d.fret -1) * gridSize;})
        .attr("y", function(d) { return 6+margins.top+(d.string -1) * gridSize;})
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("class", "hour bordered")
        .attr("width", gridSize)
        .attr("height", gridSize)
        .style("fill", colorLegend[0]);

    cards.transition().duration(1000)
        .style("fill", function(d) { return colorScale(d.amount); });

    cards.select("title").text(function(d) { return d.amount; });

    cards.exit().remove();

    var legend = svg.selectAll(".legend")
        .data([0].concat(colorScale.quantiles()), function(d) { return d; });

    legend.enter().append("g")
        .attr("class", "legend");

    legend.append("rect")
        .attr("x", function(d, i) { return margins.left+margins.right+legendWidth * i; })
        .attr("y", 350)
        .attr("width", legendWidth)
        .attr("height", gridSize / 2)
        .style("fill", function(d, i) { return colorLegend[i]; });

    legend.append("text")
        .attr("class", "mono")
        .text(function(d) { return "≥ " + Math.round(d); })
        .attr("x", function(d, i) { return legendWidth * i+margins.left+50; })
        .attr("y", 350 + gridSize);

    legend.exit().remove();

}