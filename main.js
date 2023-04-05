function preload() {
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 600, 200, 640, 400);
    circle(200, 600, 300);
    ellipse(60, 60, 100, 45);
    rect(1550, 50, 300, 400);
    circle(1600, 700, 100);
}

function take_snapshot() {
    save('picture.png')
}