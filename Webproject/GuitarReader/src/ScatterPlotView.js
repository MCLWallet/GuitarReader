
// the maximum of times a session has lasted
var maxTime = 0;
// most successful session that gets compared on
var groundTruth = 0;

/**
 * Inititates the Scatterplot View
 * analyzed dataset: sessions
 */
function scatterplot(){
    var width = 1040,
        height = 300,
        margins = {
            top: 70,
            right:50,
            bottom: 50,
            left: 100
        };

    var svg = d3.select("#scatterplot")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "border-style: solid; border-width:1px");

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


    // adding axes
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0, "+(height-margins.bottom)+")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate("+(margins.left-margins.right)+", 0)")
        .call(yAxis);


    var r = d3.scale.linear()
        .domain([0,3])
        .range([8,12]);

    var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    svg.selectAll("circle")
        .data(sessions).enter()
        .append("circle")
        .attr("class", "circle")
        .attr("cx", function(d){ return x(d.time);})
        .attr("cy", function(d){ return y(d.session_ID);})
        .attr("r", function(d){ return r(d.duration);})
        .attr("title", function(d) {return "SP"+ d.string+":"+ d.noteNumber;})
        .attr("fill", function(d){
            if (d.note=="C") return "#1E088C";
            else if (d.note == "C#") return "#1EA08C";
            else if (d.note == "D") return "#20A844";
            else if (d.note == "D#") return "#8AA844";
            else if (d.note == "E") return "#F7F504";
            else if (d.note == "F") return "#F7D304";
            else if (d.note == "F#") return "#E57E31";
            else if (d.note == "G") return "#E72B03";
            else if (d.note == "G#") return "#7A1702";
            else if (d.note == "A") return "#BF239B";
            else if (d.note == "A#") return "#46007F";
            else if (d.note == "B") return "#670086";
            else return "black";
        })
        .on("mouseover", function(d){
            var circle = d3.select(this);
            var string = circle.attr("title").charAt(2);
            var note = circle.attr("title").substr(4,5);

            var rect = d3.select(("#HM-"+string+"-"+note));
            rect.attr("class", "hour bordered animated shake");

            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html("Note: "+d.note)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");

        })
        .on("mouseout", function(){
            var circle = d3.select(this);
            var string = circle.attr("title").charAt(2);
            var note = circle.attr("title").substr(4,5);

            var rect = d3.select(("#HM-"+string+"-"+note));
            rect.attr("class", "hour bordered");

            tooltip.transition()
                .duration(500)
                .style("opacity", 0);

        });

    svg.append("text")
        .attr("x", 50)
        .attr("y", 30)
        .attr("font-weight", "bold")
        .attr("font-size", "18")
        .text("Session Scatterplot");

    svg.append("line")
        .attr("x1", 10)
        .attr("y1", 38)
        .attr("x2", width+30)
        .attr("y2", 38)
        .attr("style", "stroke:rgb(0,0,0);stroke-width:1");

    // axis descriptions
    svg.append("text")
        .attr("x", 15-height/2)
        .attr("y", 10)
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .style("font-weight", "bold")
        .text("session");
    svg.append("text")
        .attr("x", (width/2)+15)
        .attr("y", height-20)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .style("font-weight", "bold")
        .text("bars");

    // TODO: improve scatterplot design (grids, lines, zoom in, interaction, etc)



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
/*
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
*/