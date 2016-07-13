// Starts the live guitar session
function record(){
    startMetronome();
    recordSession();
    console.log("bpm", bpm);
}

// Saves the session data into the array "filteredNotes"
function save(){
    stopMetronome();
    saveSession();

}

// Downloading the session data as .csv
function download(){ downloadSession() };
// Starts the visualization (line graph)
function vis(){
    if(sessionSaved && !visRequested) {
        var stopButton = d3.select("#stop")
            .attr("style", "background-color: #1D4C6E;");
        var visButton = d3.select("#visBut")
            .attr("style", "background-color: #123045;");

        visLineGraph();
        heatmapVis();
        streamGraphVis();
        barChartVis();
        visRequested = true;

    }
    else if(visRequested){
        window.alert("Vis already exists!");
    }

    else{
        window.alert("Record a session first!");
    }

};

