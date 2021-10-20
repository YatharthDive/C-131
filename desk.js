img = "";
status1 = ""
objects = []

function preload() {
    img = loadImage("desk.jpg")
}

function setup() {
    C1 = createCanvas(640, 420)
    C1.center()
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML="status : Detecting Object"
}

function modelLoaded() {
    console.log("model Loaded")
    status1 = true
    objectDetector.detect(img, gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        objects=results
    }

}

function draw() {
    image(img, 0, 0, 640, 420)
    if(status1!=""){
        for(var I=0;I<objects.length;I++){
            document.getElementById("status").innerHTML="status : Detected Object"
            fill("red")
            percent=floor(objects[I].confidence*100)
            text(objects[I].label+" "+percent+"%", objects[I].x, objects[I].y)
            noFill()
            stroke("red")
            rect(objects[I].x,objects[I].y,objects[I].width,objects[I].height)
        }
    }
}
function back(){
    window.location.href= "index.html";
}