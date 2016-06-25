
function getPowerChords(i){
    var lastReceived = notes[i]["receivedTime"];
    var deltaTime = lastReceived-notes[i-1]["receivedTime"];
    var firstNote = notes[i-1]["note"]["number"];
    var secondNote = notes[i]["note"]["number"];

    var element;

    switch (notes[i]["channel"]){
        case 6:
            if (notes[i-1]["channel"]==5 && deltaTime<=15){
                if (firstNote-secondNote==7) element = {"key":"PC", "time":lastReceived};
                else element = {"key":"other", "time":lastReceived};
            }
            else element = {"key":"undefined", "time":lastReceived};
            break;
        case 5:
            if (deltaTime<=15){
                if (notes[i-1]["channel"]==6){
                    if (secondNote-firstNote==7) element = {"key":"PC", "time":lastReceived};
                    else element = {"key":"other", "time":lastReceived};
                }
                else if (notes[i-1]["channel"]==4){
                    if (firstNote-secondNote==7) element = {"key":"PC", "time":lastReceived};
                    else element = {"key":"other", "time":lastReceived};
                }
            }
            else element = {"key":"undefined", "time":lastReceived};
            break;
        case 4:
            if ((notes[i-1]["channel"]==5) && deltaTime<=15){
                if (secondNote-firstNote==7) element = {"key":"PC", "time":lastReceived};
                else element = {"key":"other", "time":lastReceived};
            }
            else element = {"key":"undefined", "time":lastReceived};
            break;
        default:
            element = {"key":"undefined", "time":lastReceived};
            break;
    }
    if (element==null) {
        element = {"key":"undefined", "time":lastReceived};


    }
    return element;
}


function getBarreChords(){
    var chord = [40,47,52,56,59,64];
    // 20 possible BarreChords
    var firstTime = notes[0]["receivedTime"]

    var sampleSize = randomBetween(10, 20);
    var note, channel;
    var count = 0;
    var i;
    if (count+sampleSize<notes.length){
        while (count<notes.length){
            if (count+sampleSize>=notes.length) break;
            //console.log("Time of measurement", (notes[count]["receivedTime"]-firstTime)/1000);
            var samples = [];
            // Save note samples that will be analyzed for barre chords
            for (i=count; i<count+sampleSize; i++){
                samples.push(notes[i]);
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
            console.log("Average Delta Time", avrgDeltaTime);
            if (avrgDeltaTime<=400){
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
                                if (samples[s]["note"]["number"]==chord[3]){
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
                    if (potential>=6){
                        console.log("BarresFound", chord);
                    }
                    for (var c = 0; c<6; c++) chord[c]+=1;
                }
                chord = [40,47,52,56,59,64];
            }
            sampleSize = randomBetween(10,20);
            count += sampleSize;
        }
    }

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