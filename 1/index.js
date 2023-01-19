function setup() {
createCanvas(500,500);
}

function draw() {
background('blue');

ellipse(mouseX,mouseY,80,80);

recta();
}

function recta() {
for(let i = 0; i<100;++i){
rect(100,mouseY,10,10);
}
}
