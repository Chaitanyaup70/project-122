function preload(){

}
function draw(){
    background("yellow");    
    document.getElementById("span").innerHTML="The width and height of the square will be "+diff+" px";
    fill("black");
    stroke("red");
}
function setup(){
    canvas=createCanvas(600,475);
    canvas.position(650,171);
    camera=createCapture(VIDEO);

    poseNet=ml5.poseNet(camera,modeloaded);
    poseNet.on('pose',gotResult);
    
}
function modeloaded(){
    console.log("model loaded sucsesfully")
}