/**
 * Created by MCL on 16.06.16.
 */


var record = document.getElementById("recordbutton");
var save = document.getElementById("savebutton");
var download = document.getElementById("download-csv");
var vis = document.getElementById("visbutton");


// Starts the live guitar session
record.onclick = function(){ recordSession();};
// Saves the session data into the array "filteredNotes"
save.onclick = function(){ saveSession() };
// Downloading the session data as .csv
download.onclick = function(){ downloadSession() };
// Starts the visualization (line graph)
vis.onclick = function(){
    if(sessionSaved && !visRequested) {
        visLineGraph();
        heatmapVis();
        streamGraphVis();
        visRequested = true;

    }
    else if(visRequested){
        window.alert("Vis already exists!");
    }

    else{
        window.alert("Record a session first!");
    }

};

