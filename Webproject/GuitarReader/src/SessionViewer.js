
// the maximum of times a session has lasted
var maxTime = 0;
// most successful session that gets compared on
var groundTruth = 0;

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
        .attr("fill", function(d){
            switch(d.quality){
                case 0:
                    return "black";
                case 1:
                    return "red";
                case 2:
                    return "yellow";
                case 3:
                    return "green";
                default:
                    return "black";
            }
        })

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
    compareSessions();
    return result;
}

/**
 * Compares the recorded sessions with the ground truth and changes the quality parameter
 */
function compareSessions(){

    for (var i = 0; i < sessions.length; i++){
        if (i==groundTruth) continue;
        var currentTime = 1;

        var rhythmQuality = 0;
        var melodyQuality = 0;
        var noteCounter = 0;
        for (var j = 0; j < sessions[i].length; j++){
            // Is the note on time (+/- 0.03 sec tolerance) ?
            if (sessions[i][j].receivedTime<=sessions[groundTruth][j].receivedTime+0.03
                || sessions[i][j].receivedTime>=sessions[groundTruth][j].receivedTime-0.03){
                rhythmQuality++;
            }
            else rhythmQuality--;
            // Is it the right note? TODO: Watch out for chords!
            if (sessions[i][j].note==sessions[groundTruth][j].note) melodyQuality++;
            else melodyQuality--;
            // Do you play the note long enough?
            if (sessions[i][j].duration<=sessions[groundTruth][j].duration+0.02
                || sessions[i][j].duration>=sessions[groundTruth][j].duration-0.02) {
                rhythmQuality++;
            }
            else rhythmQuality--;
            noteCounter++;

            if (j+1 != sessions[i].length && sessions[i][j+1].time == currentTime+1){
                // Calculate the quality of the time (ratio points/amount of notes)
                var quality = (rhythmQuality+melodyQuality)/noteCounter;
                console.log("quality", quality);
                var scatterQuality;
                if (quality>=1) scatterQuality = 3;                         // perfect
                if (quality>=0.3 && quality<1) scatterQuality = 2;          // OK
                if (quality<0.3) scatterQuality = 1;                        // terrible
                for (var k = 0; k < scatterplotData.length; k++){
                    if (scatterplotData[k].session_ID==i+1){
                        if (scatterplotData[k].time==currentTime) scatterplotData[k].quality = scatterQuality;
                    }
                }
                // setting back help variables for next iteration
                rhythmQuality = 0;
                melodyQuality = 0;
                noteCounter = 0;
                currentTime++;
            }

        }

    }
}