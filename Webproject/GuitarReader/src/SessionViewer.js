/**
 * Created by MCL on 15.07.16.
 */

/**
 * Inititates the Scatterplot View
 */
function scatterplot(){
    var width = 1000,
        height = 460,
        margins = {
            top: 20,
            right:20,
            bottom: 20,
            left: 50
        };
}


/**
 * Prepares the Scatterplot data consisting of time nr (x-axis), session id (y-axis) and amount of notes
 * @returns {Array} Scatterplot Array
 */
function prepareScatterplotData(){
    var result = [];

    // TODO: Prepare Scatterplot Data

    var count = 0;

    for (var i = 0; i < sessions.length; i++){

        var timeCounter = 1;
        var noteCounter = 0;

        for (var j = 0; j < sessions[i].length; j++){
            result[count] = new Object(3);

            if (sessions[i][j].time==timeCounter){
                noteCounter++;
            }
            else{
                result[count].session_ID = i+1;
                result[count].time = timeCounter;
                result[count].amount = noteCounter;
                noteCounter = 0;
                timeCounter++;
                count++;
            }
        }
    }




    return result;

}