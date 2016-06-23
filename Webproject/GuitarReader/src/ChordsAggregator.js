
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
    var lastReceived = notes[i]["receivedTime"];
    var deltaTime = lastReceived-notes[i-1]["receivedTime"];
    var firstNote = notes[i-1]["note"]["number"];
    var secondNote = notes[i]["note"]["number"];

    var element;




}
