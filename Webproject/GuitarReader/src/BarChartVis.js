
function barChartVis(){
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 500,
        height = 300;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height-margin.bottom, margin.top]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .innerTickSize(-width)
        .outerTickSize(0)
        .tickPadding(10);

    var svg = d3.select("body").select("#barChartElement").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + (margin.left) + "," + margin.top + ")");


    x.domain(barChartData.map(function(d) { return d.key; }));
    y.domain([0, d3.max(barChartData, function(d) { return d.value; })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (height-margin.bottom) + ")")
        .attr("stroke-width", 2)
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .attr("stroke-width", 2)
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Amount");

    svg.selectAll(".bar")
        .data(barChartData)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.key); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height-margin.bottom - y(d.value); })
        .attr("onmouseover", function(d){ return "onMouseEnterBar("+ d.key+")";});

    function type(d) {
        d.value = +d.value;
        return d;
    }
}

