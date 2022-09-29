img=""
status = ""

function preload(){
    img = loadImage("dog_cat.jpg");

}
function setup(){
    canvas = createCanvas( 640, 420);
    canvas.position(250, 180);
    objectDetector = ml5.objectDetector('cocssd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting object";
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
  


}