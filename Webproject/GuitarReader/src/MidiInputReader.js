
// Array where all MIDI sessions are saved
var sessions = [];

// Array with all notes information
var notesOn;
var notesOff;

// Array with filtered notes information
var filteredNotes;

// Array with chords information
var chords;

// counter for notes-array positions
var notesOnCount = 0;
var notesOffCount = 0;

// Statistics about each String
var stats,
    stats_E,
    stats_A,
    stats_d,
    stats_g,
    stats_b,
    stats_e;

var maxString;

var barreChords;

var sessionSaved = false,
    recording = false;

var csvHeader = new Array("id", "channel", "note", "receivedTime", "velocity");
var sep = ",";                                                  // element seperator for CSV-file
var str;

var heatmapData;
var streamGraphData;
var barChartData;

var scatterplotData;

// Number of sessions played
var numSessions = 0;

var sessionBeginning = false;

/**
 *
 */
function recordSession(){
    notesOn = [];
    notesOff = [];
    filteredNotes = [];
    notesOnCount = 0;
    notesOffCount = 0;

    // Check if Session is already recording
    if (!recording) {

        // Prepare Status text
        var status = d3.select("#status");
        status.select("rect").remove();
        status.select("text").remove();
        status.append("circle")
            .attr("r", 10)
            .attr("cx", 15)
            .attr("cy", 10)
            .attr("fill", "#d62728");
        status.append("text")
            .attr("x", 35)
            .attr("y", 14)
            .text("Recording Session");
        // Change button colors in the UI
        var recordButton = d3.select("#record")
            .attr("style", "background-color: #d62728;");
        var visButton = d3.select("#visBut")
            .attr("style", "background-color: #1D4C6E;");

        // WebMidi saves the played notes into the array "notesOn"
        WebMidi.enable(function(err){
            if (err) console.log("WebMidi could not be enabled");
            var input = WebMidi.inputs[0];

            input.addListener("noteon", "all", function(e){
                if (preludeOver){
                    notesOn[notesOnCount] = new Object(2);
                    notesOn[notesOnCount].rawData = e;
                    notesOn[notesOnCount].timecode = context.currentTime;
                    notesOnCount++;
                }

            });
            input.addListener("noteoff", "all", function(e){
                if (preludeOver){
                    notesOff[notesOffCount] = new Object(2);
                    notesOff[notesOffCount].rawData = e;
                    notesOff[notesOffCount].timecode = context.currentTime;
                    notesOffCount++;
                }

            });

        });
        recording = true;
        sessionSaved = false;
        visRequested = false;
    }
    else {
        window.alert("Already recording!");
    }
}

/**
 *
 */
function saveSession(){
    if (recording && !sessionSaved){
        var status = d3.select("#status");
        status.select("circle").remove();
        status.select("text").remove();
        status.append("rect")
            .attr("width", 20)
            .attr("height", 20)
            .attr("x", 4)
            .attr("y", 2);
        status.append("text")
            .attr("x", 35)
            .attr("y", 15)
            .text("Session saved");

        var recordButton = d3.select("#record")
            .attr("style", "background-color: #1D4C6E;");

        var stopButton = d3.select("#stop")
            .attr("style", "background-color: #123045;");

        // Preparing dataset for csv and line graph
        for (var i = 0; i < notesOn.length;i++){
            filteredNotes[i] = new Array(5);
            filteredNotes[i][0] = i;                                         // id
            switch (notesOn[i]["rawData"]["channel"]) {                          // string-name
                case 6:
                    filteredNotes[i][1] = "E";
                    break;
                case 5:
                    filteredNotes[i][1] = "A";
                    break;
                case 4:
                    filteredNotes[i][1] = "d";
                    break;
                case 3:
                    filteredNotes[i][1] = "g";
                    break;
                case 2:
                    filteredNotes[i][1] = "b";
                    break;
                case 1:
                    filteredNotes[i][1] = "e'";
                    break;
                default:
                    filteredNotes[i][1] = "N/A";
                    break;
            }

            //filteredNotes[i][1] = notesOn[i]["channel"];
            filteredNotes[i][2] = notesOn[i]["rawData"]["note"]["number"];                        // MIDI-note number
            filteredNotes[i][3] = ((notesOn[i]["rawData"]["receivedTime"])/1000)-firstBeat;      // Received Time (in sec)
            filteredNotes[i][4] = notesOn[i]["rawData"]["velocity"];                              // Velocity

        }
        str = arrayToCSVString(csvHeader, filteredNotes, sep);                        // converts "filteredNotes" into the CSV-compatible string "str"
        stats_E = createStats(filteredNotes, "E");
        stats_A = createStats(filteredNotes, "A");
        stats_d = createStats(filteredNotes, "d");
        stats_g = createStats(filteredNotes, "g");
        stats_b = createStats(filteredNotes, "b");
        stats_e = createStats(filteredNotes, "e'");
        stats = new Array(stats_E, stats_A, stats_d, stats_g, stats_b, stats_e);




        /*
        chords = aggregateChords();
        streamGraphData = prepareStreamGraphData(chords);
        barChartData = prepareBarChartData(chords);
        */
        maxString = getMaxString();
        scatterplotData = prepareScatterplotData();
        var temp = sessions;
        sessions = temp.concat(scatterplotData);
        heatmapData = prepareHeatmapData();

        console.log("sessions", sessions);


        sessionSaved = true;
        recording = false;
        preludeOver = false;
        numSessions++;
        preludeCounter = 0;

    }
    else {
        window.alert("Record a session first!");
    }

}

/**
 * Prepares the heatmap data
 * @returns {Array} heatmapData
 */
function prepareHeatmapData(){
    var result = new Array(132);
    var noteIterate = 64,               // starting with high e ...
        stringIterate = 1,              // ... on the high e-string
        fretIterate = 0;
    for (var j = 0; j<132; j++){
        result[j] = new Object(4);
        result[j].string = stringIterate;
        result[j].fret = fretIterate;
        result[j].amount = countNoteOnFret(noteIterate, stringIterate);
        result[j].noteNumber = noteIterate;
        if (fretIterate==21){
            fretIterate = 0;
            if (stringIterate==2) noteIterate -= 25;
            else noteIterate -= 26;
            stringIterate++;
        }
        else{
            fretIterate++;
            noteIterate++;
        }
    }
    return result;
}

/**
 * Prepares the sessions dataset
 * @returns {Array} sessions
 */
function prepareScatterplotData(){
    var result = [];
    var count = 0;

    var beatsPerSecond = bpm/60;
    var beatDuration = 1/beatsPerSecond;
    var timeDuration = beatDuration*4;

    console.log("timeDuration", timeDuration);

    for (var i = 0; i<notesOn.length; i++){
        for (var j = i; j<notesOff.length; j++){
            if (notesOff[j]["rawData"]["channel"]==notesOn[i]["rawData"]["channel"]){
                if (notesOff[j]["rawData"]["note"]["number"]==notesOn[i]["rawData"]["note"]["number"]){
                    result[count] = new Object(8);
                    result[count].session_ID = numSessions+1;
                    result[count].noteNumber = notesOff[j]["rawData"]["note"]["number"];
                    result[count].note = notesOff[j]["rawData"]["note"]["name"];
                    result[count].velocity = notesOn[i]["rawData"]["velocity"];
                    result[count].receivedTime = notesOn[i]["timecode"]-firstBeat;
                    result[count].duration = notesOff[j]["timecode"]-notesOn[i]["timecode"];
                    result[count].time = ((result[count].receivedTime)/timeDuration)+1;
                    result[count].string = notesOff[j]["rawData"]["channel"];
                    count++;
                    break;
                }
            }
        }
    }

    return result;

}

/**
 * Creates the array that is compatible for the streamgraph visualization
 * @param arr StreamGraph Data
 */
function prepareStreamGraphData(arr){
    var result = [];

    var max = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i]["time"] > max) max = arr[i]["time"];
    }
    max = Math.round(max);
    //console.log("max", max);
    var count = 0;
    for (var j = 0; j < max; j++){
        //console.log("count", count);
        count++;
        var pcCount = 0,
            otherCount = 0,
            undefinedCount = 0,
            barreCount = 0,
            singleCount = 0;
        for (var k = 0; k < arr.length; k++){
            if (arr[k]["time"]>=j && arr[k]["time"]<j+1){
                if (arr[k]["key"]=="PC") pcCount++;
                if (arr[k]["key"]=="other") otherCount++;
                //if (arr[k]["key"]=="undefined") undefinedCount++;
                if (arr[k]["key"]=="BC") barreCount++;
                if (arr[k]["key"]=="SN") singleCount++;
            }
        }
        result.push({"key":"PC", "time":j, "value":pcCount});
        result.push({"key":"other", "time":j, "value":otherCount});
        //result.push({"key":"undefined", "time":j, "value":undefinedCount});
        result.push({"key":"BC", "time":j, "value":barreCount});
        result.push({"key":"SN", "time":j, "value":singleCount});
    }

    return result;
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

/**
 *
 * @param arr
 */
function consoleOutChordStats(arr){
    var pcCount = 0,
        otherCount = 0,
        undefinedCount = 0,
        barreCount = 0,
        singleCount = 0;
    for (var k = 0; k<arr.length;k++){
        if (chords[k]["key"]=="PC") pcCount++;
        if (chords[k]["key"]=="other") otherCount++;
        if (chords[k]["key"]=="undefined") undefinedCount++;
        if (chords[k]["key"]=="BC") barreCount++;
        if (chords[k]["key"]=="SN") singleCount++;

    }
    console.log("Chords", chords);
    console.log("Power Chords", pcCount);
    console.log("Other", otherCount);
    console.log("Undefined", undefinedCount);
    console.log("Barre Chords", barreCount);
    console.log("Single Notes", singleCount);
}

/**
 *
 */
function downloadSession(){
    if (sessionSaved){
        var blob = new Blob([str], {type:"text/plain;charset=utf-8"});
        saveAs(blob, "guitarData.csv");
        var blob2 = new Blob()
    }
    else{
        window.alert("Record a session first!");
    }
}

function getMaxString(){
    var result = 0;
    var max_E = 0,
        max_A = 0,
        max_d = 0,
        max_g = 0,
        max_b = 0,
        max_e = 0;
    for(var i = 0; i<notesOn.length; i++){
        switch (notesOn[i]["rawData"]["channel"]) {
          case 6:
              max_E++;
              break;
          case 5:
              max_A++;
              break;
          case 4:
              max_d++;
              break;
          case 3:
              max_g++;
              break;
          case 2:
              max_b++;
              break;
          case 1:
              max_e++;
              break;
          default:
              break;
        }
    }
    result = Math.max(max_E, max_A, max_d, max_g, max_b, max_e);
    return result;
}

/**
 * Converts an array to a CSV-compatible string
 *
 * @param header CSV-Header
 * @param arr Array that will be converted into a CSV-string
 * @param sep element seperator (for example: ",", ";", "|"
 * @returns {String} CSV-compatible string
 */
function arrayToCSVString(header, arr, sep){
    var str = new String;
    if (header.length>0){
        str = header.join(sep);
        str += "\n";
    }

    for (var i = 0; i < arr.length; i++){
        str += arr[i].join(sep);
        str += "\n";
    }
    return str;
}

/**
 *
 * @param arr
 * @param note
 * @returns {Array}
 */
function createStats(arr, note){
    var stats = new Array();
    var num = 0;
    for (var i = 0; i<arr.length; i++){
        stats[i] = new Object();

        if (arr[i][1]==note) {
            stats[num] = new Object();
            stats[num].time = arr[i][3];
            stats[num].played = num+1;
            num++;
        }

    }
    return stats;
}

/**
 *
 * @param note
 * @param string
 * @returns {number}
 */
function countNoteOnFret(note, string){
    var count = 0;
    for (var i = 0; i<sessions.length; i++){

        if (sessions[i]["string"]==string && sessions[i]["noteNumber"] == note) {
            count++;
        }
    }
    return count;
}

/**
 *
 * @param arr
 * @param t
 * @returns {number}
 */
function getIndexOfTime(arr, t){
    for (var i = 0; i< arr.length; i++){
        if (arr[i].time==t){
            return i;
        }
    }
}


/**
 *
 * TODO: Interaction between graphs/vis (Hover over, Focus, ...)
 * TODO: Comparism Vis between sessions
 *
 *
 */
