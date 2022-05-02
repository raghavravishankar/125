function preload()
{
    song = loadSound("Satisfy Imran Khan.mp3");
    song = loadSound("Tera Baap Aaya.mp3");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}