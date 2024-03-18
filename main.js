song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX  = 0;
rightWristY = 0;

function preLoad()
{
    song = loadMusic("Aukaat.mp3");
    song = loadMusic("Jatt_Vailly.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY)

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY)
    }
}