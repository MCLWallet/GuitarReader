
// Starts the live guitar session
function record(){ recordSession();};
// Saves the session data into the array "filteredNotes"
function save(){ saveSession() };
// Downloading the session data as .csv
function download(){ downloadSession() };
// Starts the visualization (line graph)
function vis(){
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

