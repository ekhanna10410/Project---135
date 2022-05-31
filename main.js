video = "";

function setup()
{
    video = createVideo('video.mp4');
    video.hide();
    
    canvas = createCanvas(480, 380);
    canvas.center();
}

function start() 
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}

function draw() {
    image(video, 0, 0, 480, 380);
}