function setup()
{
    canvas = createCanvas(650,480);
	canvas.parent("canvas");
    video = createCapture(VIDEO);
    video.size(600,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelloaded);
}

function modelloaded()
{
    console.log("Model Loaded")
}