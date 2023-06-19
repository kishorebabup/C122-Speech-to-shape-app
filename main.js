x = 0;
y = 0; 

draw_circle = "";
draw_rectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function setup(){
  canvas = createCanvas(900, 600);
}

function start(){
document.getElementById("status").innerHTML = "System is listening please speak.";
recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "System has recognised the speech as " + content;

    if(content == "Circle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "System has started drawing a circle.";
        draw_circle = "set";
    }

    if(content == "Rectangle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "System has started drawing a rectangle.";
        draw_rectangle = "set";
    }
}

function draw(){
    if(draw_circle == "set"){
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "System has drawn the circle.";
    draw_circle = "";
    }

    if(draw_rectangle == "set"){
        rect(x, y, 50, 70);
        document.getElementById("status").innerHTML = "System has drawn the rectangle.";
        draw_rectangle = "";
        }
}