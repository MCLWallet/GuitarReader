
// the maximum of times a session has lasted
var maxTime = 0;
// most successful session that gets compared on
var groundTruth = 0;

/**
 * Inititates the Scatterplot View
 * analyzed dataset: sessions
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

    var x = d3.scale.linear().domain([1, maxTimeInSessions()]).range([margins.left, width-margins.right]),
        y = d3.scale.linear().domain([1, numSessions]).range([margins.top, height-margins.bottom*2]);

    var xAxis = d3.svg.axis().scale(x).orient("bottom")
            .ticks(maxTimeInSessions())
            .innerTickSize(-height+margins.top+margins.bottom)
            .outerTickSize(0)
            .tickPadding(10)
            .tickFormat(d3.format("d")),
        yAxis = d3.svg.axis().scale(y).orient("left")
            .ticks(numSessions)
            .tickFormat(d3.format("d"));

    var zoomBeh = d3.behavior.zoom()
        .x(x)
        .y(y)
        .scaleExtent([0, 500])
        .on("zoom", zoom);

    var svg = d3.select("#scatterplot")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .call(zoomBeh);



    // adding axes
    svg.append("g")
        .attr("class", "xAxis")
        .attr("transform", "translate(0, "+(height-margins.bottom)+")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "yAxis")
        .attr("transform", "translate("+(margins.left-margins.right)+", 0)")
        .call(yAxis);



    var r = d3.scale.linear()
        .domain([0,5])
        .range([5,10]);

    svg.selectAll("circle")
        .data(sessions).enter()
        .append("circle")
        .attr("class", "circle")
        .attr("cx", function(d){ return x(d.time);})
        .attr("cy", function(d){ return y(d.session_ID);})
        .attr("r", function(d){ return r(d.duration);})
        .attr("fill", function(d){
            if (d.velocity<0.33) return "#7FA504";
            else if (d.velocity >= 0.33 && d.velocity < 0.66) return "#F2CE29";
            else if (d.velocity >= 0.66 && d.velocity < 1.0) return "#F48809";
            else if (d.velocity == 1.0) return "#D62B03";
            else return "black";
        });

    // TODO: improve scatterplot design (grids, lines, zoom in, interaction, etc)
    // TODO: tick in times not seconds
    // TODO: MIDI player
    // TODO: color coding => duration ???

    function zoom(){
        svg.select(".xAxis").call(xAxis);
        svg.select(".yAxis").call(yAxis);

        svg.selectAll(".circle")
            .attr("transform", transform);
    }

    function transform(d) {
        return "translate(" + x(d.time) + "," + y(d.session_ID) + ")";
    }


}



/**
 * Returns the duration of the longest session
 * @returns {number} duration of the longest session
 */
function longestSession(){
    var result = 0;
    for (var i = 0; i < sessions.length; i++){
        if (result<sessions[i].receivedTime) result = sessions[i].receivedTime;
    }
    return result;
}

/**
 * Returns the maximum time a session had
 * @returns {number} max Time
 */
function maxTimeInSessions(){
    var result = 0;
    for (var i = 0; i < sessions.length; i++){
        if (result<sessions[i].time) result = sessions[i].time;
    }
    return result;
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
                result[count] = new Object(4);
                result[count].session_ID = i+1;
                result[count].time = timeCounter;
                result[count].amount = noteCounter;
                result[count].quality = 0;
                noteCounter = 1;
                timeCounter++;
                count++;
            }
            if (j==sessions[i].length-1){
                result[count] = new Object(4);
                result[count].session_ID = i+1;
                result[count].time = timeCounter;
                result[count].amount = noteCounter;
                result[count].quality = 0;
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
                result[count].quality = 1;
                count++;
            }
        }

    }
    //compareSessions();
    return result;
}
