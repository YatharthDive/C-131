img="";
status1=""
function preload(){
    img=loadImage("desk.jpg")
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
    text("desk",130,100)
    noFill()
    stroke("red")
    rect(125,90,400,250)
}
function back(){
    window.location.href= "index.html";
}