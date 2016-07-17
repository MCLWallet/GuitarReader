
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
        y = d3.scale.linear().domain([1, sessions.length+1]).range([margins.top, height-margins.bottom]);

    var xAxis = d3.svg.axis().scale(x).orient("bottom")
        .ticks(maxTime)
        .tickFormat(function(d){
            return d.time;
        }),
        yAxis = d3.svg.axis().scale(y).orient("left")
            .ticks(sessions.length)
            .tickFormat(function(d, i){
                return "Session "+ d.session_ID;
            });

    svg.data(sessions).enter()
        .append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0, "+(height-margins.bottom)+")")
        .call(xAxis);

    svg.data(sessions).enter()
        .append("g")
        .attr("class", "axis")
        .attr("transform", "translate("+(margins.left)+", 0)")
        .call(yAxis);



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
        var lastTime = sessions[i][sessions[i].length-1].time;
        for (var j = 0; j < sessions[i].length; j++){
            console.log("j", j);
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
                console.log("Hallo");

                result[count] = new Object(3);
                result[count].session_ID = i+1;
                result[count].time = timeCounter;
                result[count].amount = noteCounter;
                count++;
                if (maxTime<timeCounter) maxTime = timeCounter;
            }

        }
    }




    return result;

}