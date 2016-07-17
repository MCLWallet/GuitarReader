
// the maximum of times a session has lasted
var maxTime = 0;

/**
 * Inititates the Scatterplot View
 */
function scatterplot(){
    var width = 940,
        height = 300,
        margins = {
            top: 20,
            right:20,
            bottom: 20,
            left: 100
        };

    var svg = d3.select("#scatterplot")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    var x = d3.scale.linear().domain([1, maxTime]).range([margins.left, width-margins.right]),
        y = d3.scale.linear().domain([1, sessions.length]).range([margins.top, height-margins.bottom*2]);

    var xAxis = d3.svg.axis().scale(x).orient("bottom")
            .ticks(maxTime)
            .tickFormat(d3.format("d")),
        yAxis = d3.svg.axis().scale(y).orient("left")
            .ticks(sessions.length)
            .tickFormat(d3.format("d"));

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0, "+(height-margins.bottom)+")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate("+(margins.left-margins.right)+", 0)")
        .call(yAxis);

    var r = d3.scale.linear()
        .domain([0,d3.max(scatterplotData, function (d){
            return d.amount;
        })])
        .range([0,12]);

    svg.selectAll("circle")
        .data(scatterplotData).enter()
        .append("circle")
        .attr("class", "circle")
        .attr("cx", function(d){ return x(d.time);})
        .attr("cy", function(d){ return y(d.session_ID);})
        .attr("r", function(d){ return r(d.amount);})

}




/**
 * Prepares the Scatterplot data consisting of time nr (x-axis), session id (y-axis) and amount of notes
 * @returns {Array} Scatterplot Array
 */
function prepareScatterplotData(){
    var result = [];
    var count = 0;
    for (var i = 0; i < sessions.length; i++){
        var timeCounter = 1;
        var noteCounter = 0;
        for (var j = 0; j < sessions[i].length; j++){
            if (sessions[i][j].time==timeCounter){
                noteCounter++;
            }
            else if (sessions[i][j].time==timeCounter+1){
                result[count] = new Object(3);
                result[count].session_ID = i+1;
                result[count].time = timeCounter;
                result[count].amount = noteCounter;
                noteCounter = 1;
                timeCounter++;
                count++;
            }
            if (j==sessions[i].length-1){
                result[count] = new Object(3);
                result[count].session_ID = i+1;
                result[count].time = timeCounter;
                result[count].amount = noteCounter;
                count++;
                if (maxTime<timeCounter) maxTime = timeCounter;
            }

        }
    }

    // Check if there are sessions that were shorter than the longest session and append their datasets
    for (var k = 0; k < sessions.length; k++){
        var lastTime = sessions[k][sessions[k].length-1].time;
        if (maxTime>lastTime){
            while (lastTime<=maxTime){
                lastTime++;
                result[count] = new Object(3);
                result[count].session_ID = k+1;
                result[count].time = lastTime;
                result[count].amount = 0;
                count++;
            }
        }

    }




    return result;

}