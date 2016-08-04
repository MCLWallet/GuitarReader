
function barChartVis(){
    var margin = {top: 40, right: 20, bottom: 30, left: 40},
        width = 484,
        height = 390;

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
        .attr("style", "border-style: solid; border-width:1px")
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
        .attr("x", -40)
        .attr("y", 10)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .style("font-weight", "bold")
        .text("times played");

    svg.selectAll(".bar")
        .data(barChartData)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.key); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height-margin.bottom - y(d.value); })
        .attr("onmouseover", function(d){ return "onMouseEnterBar("+ d.key+")";});

    svg.append("text")
        .attr("x", 0)
        .attr("y", -10)
        .attr("font-weight", "bold")
        .attr("font-size", "18")
        .text("Types of Chords/Notes played (total)");

    svg.append("line")
        .attr("x1", -30)
        .attr("y1", 0)
        .attr("x2", 500)
        .attr("y2", 0)
        .attr("style", "stroke:rgb(0,0,0);stroke-width:1");

    function type(d) {
        d.value = +d.value;
        return d;
    }
}



/**
 *
 * @param arr
 */
function prepareBarChartData(arr){
    var result;

    var pcCount = 0,
        //otherCount = 0,
        barreCount = 0,
        singleCount = 0;
    for (var k = 0; k < arr.length; k++){
        if (arr[k]["key"]=="PC") pcCount++;
        //if (arr[k]["key"]=="other") otherCount++;
        if (arr[k]["key"]=="BC") barreCount++;
        if (arr[k]["key"]=="SN") singleCount++;
    }
    result = [{"key":"PC", "value":pcCount},
        //{"key":"other", "value":otherCount},
        {"key":"BC", "value":barreCount},
        {"key":"SN", "value":singleCount}
    ];


    return result;
}

