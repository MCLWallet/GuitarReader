/**
 * Created by MCL on 10.06.16.
 */
/*
var midi, data, cmd;
var channel, type, note, velocity;

// Request MIDI Access
if (navigator.requestMIDIAccess){
    navigator.requestMIDIAccess({sysex:false}).then(onMIDISuccess, onMIDIFailure);
}
else{
    alert("No MIDI support in your browser.");
}


function onMIDISuccess(midiAccess){
    console.log("MIDI Access Object", midiAccess);

    midi = midiAccess;
    var inputs = midi.inputs.values();

    for (var input = inputs.next(); input && !input.done; input = inputs.next()){
        input.value.onmidimessage = onMIDIMessage;
    }

}

function onMIDIFailure(e){
    console.log("No access to MIDI devices"+e);
}

function onMIDIMessage(message){
    data = message.data;
    cmd = data[0] >> 4;
    channel = data[0] & 0xf;
    type = data[0] & 0xf0;
    note = data[1];
    velocity = data[2];
    console.log("Note tracked")
    console.log("Channel", channel);
    console.log("Type", type);
    console.log("Note", note);
    console.log("Velocity", velocity);
}


*/

var notes;                                                      // Array with all notes information
var data;                                                       // Array with filtered notes information
var notesCount = 0;                                             // counter for notes-array positions

var stats,
    stats_E,
    stats_A,
    stats_d,
    stats_g,
    stats_b,
    stats_e;

var sessionSaved = false,
    recording = false;

var csvHeader = new Array("id", "channel", "note", "receivedTime", "velocity");
var sep = ",";                                                  // element seperator for CSV-file
var str;

var heatmapData;

function recordSession(){
    notes = new Array();
    data = new Array();
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
                console.log(e);
                notes[notesCount] = e;
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
            data[i] = new Array(5);
            data[i][0] = i;                                         // id
            switch (notes[i]["channel"]) {                          // string-name
                case 6:
                    data[i][1] = "E";
                    break;
                case 5:
                    data[i][1] = "A";
                    break;
                case 4:
                    data[i][1] = "d";
                    break;
                case 3:
                    data[i][1] = "g";
                    break;
                case 2:
                    data[i][1] = "b";
                    break;
                case 1:
                    data[i][1] = "e'";
                    break;
                default:
                    data[i][1] = "N/A";
                    break;
            }
            data[i][2] = notes[i]["note"]["number"];                        // MIDI-note number
            data[i][3] = (notes[i]["receivedTime"] - firstTime)/1000;      // Received Time (in sec)
            data[i][4] = notes[i]["velocity"];                              // Velocity
        }
        str = arrayToCSVString(csvHeader, data, sep);                        // converts "data" into the CSV-compatible string "str"
        stats_E = createStats(data, "E");
        stats_A = createStats(data, "A");
        stats_d = createStats(data, "d");
        stats_g = createStats(data, "g");
        stats_b = createStats(data, "b");
        stats_e = createStats(data, "e'");
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
        sessionSaved = true;
        recording = false;
    }
    else {
        window.alert("Record a session first!");
    }

}

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
 * TODO: Power-Chords Array
 * TODO: Barre-Chords Array
 * TODO: Funk-Chords Array
 * TODO: Open-Chords Array
 *
 *
 * TODO: d3 visualizations (timeline, heatmap)
 *
 */

