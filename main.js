song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX  = 0;
rightWristY = 0;
leftWristScore = 0;
song1 = "Aukaat.mp3";
song2 = "Jatt_Vailly.mp3";

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

    fill('#7B68EE');
    stroke('#6A5ACD')

    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX, leftWristY, 15);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = "  + volume;
    song.setVolume(volume);
    rightWrist = "Aukaat.mp3".isPlaying();
    leftWrist = "Jatt_vailly.mp3".isPlaying();
    }
    if(song1 = 'true')
    {
        rightWrist = "Aukaat.mp3".isPlaying();
    }
    else
    {
        rightWrist = "Aukaat.mp3".isPlaying(false);
    }
    if(song2 = 'true')
    {
        rightWrist = "Jatt_Vailly.mp3".isPlaying();
    }
    else
    {
        rightWrist = "Jatt_Vailly.mp3".isPlaying(false);
    }
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
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY)

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY)
    }
}