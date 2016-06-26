var notes;                                                      // Array with all notes information
var filteredNotes;                                                       // Array with filtered notes information
var chords;                                                     // Array with chords information
var notesCount = 0;                                             // counter for notes-array positions
var notesOffCount = 0;
var stats,
    stats_E,
    stats_A,
    stats_d,
    stats_g,
    stats_b,
    stats_e;

var barreChords;

var sessionSaved = false,
    recording = false;

var csvHeader = new Array("id", "channel", "note", "receivedTime", "velocity");
var sep = ",";                                                  // element seperator for CSV-file
var str;

var heatmapData;
var streamGraphData;

function recordSession(){
    notes = new Array();
    filteredNotes = new Array();
    notesCount = 0;
    if (!recording) {
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
        // WebMidi saves the played notes into the array "notes"
        WebMidi.enable(function(err){
            if (err) console.log("WebMidi could not be enabled");
            var input = WebMidi.inputs[0];
            input.addListener("noteon", "all", function(e){
                //console.log("NoteOn "+notesCount+":",e);
                notes[notesCount] = e;

                /*
                if (notesCount>=20 && notesCount%20==0){
                    var barreNotes = [];
                    var test = getBarreChords(1, notesCount, barreNotes);
                    console.log("Recursion Array", test);

                }
                */

                notesCount++;
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


        // Preparing dataset for csv and line graph
        var firstTime = 0;
        for (var i = 0; i < notes.length;i++){
            if (i==0) firstTime = notes[i]["receivedTime"];
            filteredNotes[i] = new Array(5);
            filteredNotes[i][0] = i;                                         // id
            switch (notes[i]["channel"]) {                          // string-name
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

            //filteredNotes[i][1] = notes[i]["channel"];
            filteredNotes[i][2] = notes[i]["note"]["number"];                        // MIDI-note number
            filteredNotes[i][3] = (notes[i]["receivedTime"] - firstTime)/1000;      // Received Time (in sec)
            filteredNotes[i][4] = notes[i]["velocity"];                              // Velocity

        }
        str = arrayToCSVString(csvHeader, filteredNotes, sep);                        // converts "filteredNotes" into the CSV-compatible string "str"
        stats_E = createStats(filteredNotes, "E");
        stats_A = createStats(filteredNotes, "A");
        stats_d = createStats(filteredNotes, "d");
        stats_g = createStats(filteredNotes, "g");
        stats_b = createStats(filteredNotes, "b");
        stats_e = createStats(filteredNotes, "e'");
        stats = new Array(stats_E, stats_A, stats_d, stats_g, stats_b, stats_e);


        // preparing the heatmap dataset
        heatmapData = new Array(132);
        var noteIterate = 64,               // starting with high e ...
            stringIterate = 1,              // ... on the high e-string
            fretIterate = 0;
        for (var j = 0; j<132; j++){
            heatmapData[j] = new Object();
            heatmapData[j].string = stringIterate;
            heatmapData[j].fret = fretIterate;
            heatmapData[j].amount = countNoteOnFret(noteIterate, stringIterate);
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

        chords = aggregateChords();
        streamGraphData = prepareStreamGraphData(chords);
        console.log("streamGraphData", streamGraphData);


        sessionSaved = true;
        recording = false;
    }
    else {
        window.alert("Record a session first!");
    }

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
    console.log("max", max);
    var count = 0;
    for (var j = 0; j < max; j++){
        console.log("count", count);
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
                if (arr[k]["key"]=="undefined") undefinedCount++;
                if (arr[k]["key"]=="BC") barreCount++;
                if (arr[k]["key"]=="SN") singleCount++;
            }
        }
        result.push({"key":"PC", "time":j, "value":pcCount});
        result.push({"key":"other", "time":j, "value":otherCount});
        result.push({"key":"undefined", "time":j, "value":undefinedCount});
        result.push({"key":"BC", "time":j, "value":barreCount});
        result.push({"key":"SN", "time":j, "value":singleCount});
    }

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
    for (var i = 0; i<notes.length; i++){

        if (notes[i]["channel"]==string && notes[i]["note"]["number"] == note) {
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
 * TODO: Funk-Chords Array (nice to have)
 * TODO: Open-Chords Array (not essential for presentation)
 *
 * TODO: find undefined PowerChords Bug
 *
 *
 */
