Status = "";
traffic = "";

function preload(){
    traffic = loadImage("3.jpg");
}

function setup(){
    canvas = createCanvas(660,350);
    canvas.center();
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(traffic,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(traffic,0,0,660,350);
}