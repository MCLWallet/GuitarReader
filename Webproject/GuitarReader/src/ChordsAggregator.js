/**
 *
 * @returns {Array}
 */
function aggregateChords(){
    var chords = [];
    var powerChords = getPowerChords();
    var barreChords = getBarreChords();

    chords = powerChords.concat(barreChords);
    return chords;
}


/**
 *
 * @returns {Array}
 */
function getPowerChords(){
    var powerArray = [];

    for (var i = 1; i<notesOn.length; i++){
        var lastReceived = notesOn[i]["receivedTime"];
        var deltaTime = lastReceived-notesOn[i-1]["receivedTime"];
        var firstNote = notesOn[i-1]["note"]["number"];
        var secondNote = notesOn[i]["note"]["number"];

        var element;

        switch (notesOn[i]["channel"]){
            case 6:
                if (notesOn[i-1]["channel"]==5 && deltaTime<=15){
                    if (firstNote-secondNote==7) element = {"key":"PC", "time":(lastReceived/1000)};
                    else element = {"key":"other", "time":(lastReceived/1000)};
                }
                else element = {"key":"undefined", "time":(lastReceived/1000)};
                break;
            case 5:
                if (deltaTime<=15){
                    if (notesOn[i-1]["channel"]==6){
                        if (secondNote-firstNote==7) element = {"key":"PC", "time":(lastReceived/1000)};
                        else element = {"key":"other", "time":(lastReceived/1000)};
                    }
                    else if (notesOn[i-1]["channel"]==4){
                        if (firstNote-secondNote==7) element = {"key":"PC", "time":(lastReceived/1000)};
                        else element = {"key":"other", "time":(lastReceived/1000)};
                    }
                }
                else element = {"key":"undefined", "time":(lastReceived/1000)};
                break;
            case 4:
                if ((notesOn[i-1]["channel"]==5) && deltaTime<=15){
                    if (secondNote-firstNote==7) element = {"key":"PC", "time":(lastReceived/1000)};
                    else element = {"key":"other", "time":(lastReceived/1000)};
                }
                else element = {"key":"undefined", "time":(lastReceived/1000)};
                break;
            default:
                element = {"key":"undefined", "time":(lastReceived/1000)};
                break;
        }
        if (element==null) {
            element = {"key":"undefined", "time":(lastReceived/1000)};


        }
        powerArray.push(element);
    }
    return powerArray;
}

/**
 *
 * @returns {Array}
 */
function getBarreChords(){
    var chord = [40,47,52,56,59,64];
    // 20 possible BarreChords
    var firstTime = notesOn[0]["receivedTime"];

    var sampleSize = randomBetween(10, 15);                          // Sampling between 8-15
    var note, channel;
    var count = 0;
    var i;
    var barreCounted = 0;
    var barreArray = [];

    if (count+sampleSize<notesOn.length){
        // Start sampling process
        while (count<notesOn.length){
            if (count+sampleSize>=notesOn.length) break;
            var timeOfMeasurement = (notesOn[count]["receivedTime"]-firstTime)/1000;
            //console.log("Time of measurement", timeOfMeasurement);
            var samples = [];
            // Save note samples that will be analyzed for barre chords
            for (i=count; i<count+sampleSize; i++){
                samples.push(notesOn[i]);
            }
            // Save the all the delta times between the notes in one array for calculation the average delta time
            var deltaTimes = [];
            var delta, avrgDeltaTime;
            for (var j=0; j<sampleSize-1;j++){
                var jumper = 1;
                while (j+jumper<sampleSize){

                    delta = samples[j+jumper]["receivedTime"] - samples[j]["receivedTime"];
                    deltaTimes.push(delta);
                    jumper++;
                }
            }
            avrgDeltaTime = avrg(deltaTimes);
            //console.log("Average Delta Time", avrgDeltaTime/1000);

            // The average delta time of 400ms is a good indicator that a chord has been played
            if (avrgDeltaTime<=400){
                // Starting with an open E Barre-Chord and going through every possible Barre chord
                for (var k = 0; k<20;k++){
                    var potential = 0;
                    for (var s = 0; s<samples.length; s++){
                        switch(samples[s]["channel"]){
                            case 6:
                                if (samples[s]["note"]["number"]==chord[0]){
                                    potential++;
                                }
                                break;
                            case 5:
                                if (samples[s]["note"]["number"]==chord[1]){
                                    potential++;
                                }
                                break;
                            case 4:
                                if (samples[s]["note"]["number"]==chord[2]){
                                    potential++;
                                }
                                break;
                            case 3:
                                if (samples[s]["note"]["number"]==chord[3] || samples[s]["note"]["number"]==chord[3]-1){
                                    potential++;
                                }
                                break;
                            case 2:
                                if (samples[s]["note"]["number"]==chord[4]){
                                    potential++;
                                }
                                break;
                            case 1:
                                if (samples[s]["note"]["number"]==chord[5]){
                                    potential++;
                                }
                                break;
                            default:
                                break;
                        }

                    }
                    // We found 6 notes that indicate a Barre chord and save it to the array
                    if (potential>=6){
                        var barresFound = Math.round(potential/6);
                        barreCounted+=Math.round(potential/6);
                        //console.log("BarresFound", chord);
                        //console.log("How Many?", Math.round(potential/6));
                        for (var b = 0; b<barresFound; b++){
                            barreArray.push({"key":"BC", "time":timeOfMeasurement});
                        }
                    }

                    for (var c = 0; c<6; c++) chord[c]+=1;
                }
                chord = [40,47,52,56,59,64];
            }
            // Otherwise we interpret those notes as "single notes played" (SN)
            else {
                for (var n = 0; n<sampleSize; n++){
                    barreArray.push({"key":"SN", "time":timeOfMeasurement});
                }
            }
            sampleSize = randomBetween(10,15);
            count += sampleSize;
        }
    }
    return barreArray;

}

/**
 * Simple summation function
 * @param i end of summation
 * @returns {number} result of summation
 */
function summation(i){
    var result=0;
    for (var k = 1; k<=i; k++){
        result+=k;
    }
    return result;
}

/**
 * Calculates the average of an array
 * @param arr array with numbers
 * @returns {number} average
 */
function avrg(arr){
    var result = 0;
    for (var i = 0; i<arr.length; i++){
        result += arr[i];
    }
    return (result/arr.length);
}

/**
 * Generates a random number between a minimum and a maximum
 * @param min minimum limit
 * @param max maximum limit
 * @returns {number} random number
 */
function randomBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
