function toLaunch(URL) {
    window.location = URL;
}

function playMusic(id) {

    var myMusic= document.getElementById(id);
    //myMusic.play();

}

function launch() {

    var rocket = document.getElementById("rkt");
    var pos = 0;
    var id = setInterval(frame, 10);

    function frame() {
        if (pos === 350) {
            clearInterval(id);
        } else {
            pos--;
            rocket.style.top = pos + 'px';
        }
    }

    changeScene('space.html');
}

function changeScene(URL){
    setTimeout( function() { window.location = URL }, 6000 );
}

function narrateLaunch(){

    var s1 = "Welcome Commander! You'll be flying on one of Elon Musk's new Starship rockets!";
    var s2 = "As the mission commander of the first manned mission to Mars, you have to be ready for anything.";
    var s3 = "I'm sure that after a semester of learning space flight mechanics, you're ready for this.";
    var s4 = "Blast off whenever you're ready!";

    var text = document.getElementById("text");
    text.innerHTML = s1;
    setTimeout(function(){text.innerHTML = s2}, 6000);
    setTimeout(function(){text.innerHTML = s3}, 12000);
    setTimeout(function(){text.innerHTML = s4}, 18000);
}

function narrateDock(){

    var s1 = "OK Commander, we can hear you fine now, but keep in mind that as you get farther from Earth, you can't" +
        " get help from Mission Control immediately.";
    var s2 = "Now that you've made it into Earth's orbit, you should rendezvous with the ISS " +
        "to pick up extra fuel and supplies";
    var s3 = "Say something intelligent about mass ratio or something here.";
    var s4 = "When you see the ISS come into view, use the controls to fire your boosters.";

    var text = document.getElementById("text");
    text.innerHTML = s1;
    setTimeout(function(){text.innerHTML = s2}, 6000);
    setTimeout(function(){text.innerHTML = s3}, 12000);
    setTimeout(function(){text.innerHTML = s4}, 18000);
}

function dockISS(){
    var iss = document.getElementById("viewObject");


    setTimeout(function() {
        iss.src = "images/iss.png";
        var size = 0;
        var id = setInterval(frame, 10);

        function frame() {
            if (size === 300) {
                clearInterval(id);
            } else {
                size++;
                iss.style.width = size + 'px';
            }
        }
    },
    20000);
}

function makeControls(){
    var button1 = document.getElementById("input1");
    var button2 = document.getElementById("input3");

    button1.value = "Thrust Forward";
    button2.value = "Thrust Backward";

    button1.onclick = function () {
        window.location = 'dockExp.html';
    };

    button2.onclick = function () {
        narrateEmergency();
    };
}

function narrateEmergency(){
    var s1 = "For the love of Pluto! Something has gone wrong! " +
        "None of the crew knows what to do, so you have to ask Mission Control for help!";
    var s2  = "Type the answer into the text area and press 'Enter' when you get it. Ask for help before the timer runs out!";
    var text = document.getElementById("text");

    text.innerHTML = s1;
    setTimeout(function () {text.innerHTML = s2}, 4000);
    makeEmergencyControls();
}

function makeEmergencyControls(){

    var text = document.getElementById("text");

    var button1 = document.getElementById("input1");
    var button2 = document.getElementById("input3");
    var input = document.getElementById("input2");

    var answer = "Houston, we have a problem."

    input.addEventListener("keypress", function(event) {

            if (event.code === 'Enter'  && input.value === answer) {
                console.log("correct");
                clearInterval(id);
                countdown.innerHTML = "";
                //setTimeout(questionTwo, 3500);
            }
            else if (event.code === 'Enter' && input.value !== "answer") {
                window.location = 'delayExp.html';
            }
        }
    );


    button1.value = "            ";
    button2.value = "Mission Control";

    var react;

    button1.onclick = function () { };

    button2.onclick = function () {
        react = time;
        text.innerHTML = "Waiting for a reply...This could be a while."
        console.log(react);
    };


    var countdown = document.getElementById("view");

    var time = 40;
    var delay = 30;
    var id = setInterval(frame, 1000);

    function frame() {

        if (time === 0) {
            window.location = 'delayExp.html';
            clearInterval(id);
        } else {
            setTimeout(function () {
                time--;
                react--;
                delay--;
            }, 1000);
        }
        countdown.innerHTML = time.toString();

        if(delay === 0 && time > 0){
            text.innerHTML = "The answer is: \n" + answer;
        }
    }
}