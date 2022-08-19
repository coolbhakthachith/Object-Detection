img ="";
status1="";
objects=[];

function preload(){
    img= loadImage('5.jpg');
}
function setup(){
    cannvas =createCanvas(640, 420);
    cannvas.center();
    objectDetector =ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="STATUS : DECTECTING OBJECT !!!";
}

function modelLoaded(){
console.log("MODEL LOADED !!!!!!!!!!!");
status1 =true;
objectDetector.detect(img,got_result);
}

function got_result(error, results){
if(error){
    console.error();
}
console.log(results);
objects =results;
}

function draw(){
image(img,0,0,640, 420);

if(status1 !=""){
    for (i =0; i<=objects.length; i++){
        document.getElementById("status").innerHTML="STATUS :OBJECT DECTECTED !!!";
    
    fill("#ff1900");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label+"  "+percent+"%",objects[i].x+15, objects[i].y+15);
    noFill();
    stroke("#ff1900");
    rect(objects[i].x, objects[i].y, objects[i].height, objects[i].width);
    }
}
}