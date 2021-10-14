img="";
status1=""
function preload(){
    img=loadImage("Air Conditioner.jpg")
}
function setup(){
C1=createCanvas(640,420)
C1.center()
objectDetector=ml5.objectDetector("cocossd",modelLoaded)
}
function modelLoaded(){
    console.log("model Loaded")
    status1=true
    objectDetector.detect(img,gotResults)
}
function gotResults(error,results) {
    if (error) {
        console.log(error)
    }
    console.log(results)
}
function draw(){
    image(img,0,0,640,420)
    fill("red")
    text("AC",130,100)
    noFill()
    stroke("red")
    rect(130,20,390,230)
}
function back(){
    window.location.href= "index.html";
}