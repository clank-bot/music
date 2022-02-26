music1 = "";
music2 = "";

rightX = "0";
rightY = "0";
leftX = "0";
leftY = "0";

leftscore = 0;

song_variable = "";

// function preload(){
//     music1 = loadsound("music.mp3");
//     music2 = loadsound("music2.mp3");
// }

function setup(){
    canvas = createCanvas(600,600);
    canvas.center();

    camera = createCapture(VIDEO);
    camera.hide();

    poseNet = ml5.poseNet(camera, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        leftX = results[0].pose.left.x;
        leftY = results[0].pose.left.y;
        console.log("leftX = " + leftX + "leftY = " + leftY);
        rightX = results[0].pose.right.x;
        rightY = results[0].pose.right.y;
        console.log("rightX = " + rightX + "rightY = " + rightY);

        leftscore = results[0].pose.keypoints[9].score;
    }
    
}

function modelLoaded(){
    console.log("poseNet has been initialised!!!");
}

function draw(){
    image(camera, 0, 0, 600, 600);

    document.getElementById(song_variable).innerHTML = music.mp3;
    fill("red");
    stroke("black");

    if(scoreleft > 0.2){
        circle(leftWristX, leftWristY, 20);
        stop();
        if(song_variable == false){
            // i dont know how to turn on song

            document.getElementById("song_name").innerHTML = "Now Playing Peter-Pan";
        }
     }     

}

isPlaying();{
    song_variable.isPlaying();
}

stop();{
    song_variable.stop();
}