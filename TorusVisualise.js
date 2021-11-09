const R = 2;
const r = 0.5;
let phi = 0;
const phiSpeed = 0.01;
let points = [];
let slider = 0;

function setup() {
	slider = createSlider(0, 10, 0, 0);
	createCanvas(500, 500, WEBGL);
}

function draw() {
	background(100);
	orbitControl(2, 2, 2); //You can move around with your mouse, click and drag 
	stroke(0, 0, 255);
	strokeWeight(4);
	line(-1000, 0, 0, 1000, 0, 0);
	stroke(255, 0, 0);
	line(0, -1000, 0, 0, 1000, 0);
	stroke(0, 255, 0);
	line(0, 0, 0, 0, 0, 1000);
	noFill();
	scale(50, 50, 50);
	let noiseMax = slider.value();

	for (let theta = 0; theta < TWO_PI; theta += radians(10)) {
		const xoff = (R + r * cos(theta)) * cos(phi) * noiseMax;
		const zoff = (R + r * cos(theta)) * sin(phi) * noiseMax;
		const yoff = r * sin(theta) * noiseMax;
		//vertex(xoff, yoff, zoff);
		points.push([xoff, yoff, zoff]);
	}

	phi += phiSpeed;

	stroke(255);
	points.forEach(([x, y, z]) => {
		point(x, y, z);
	});

	if (phi >= TWO_PI) {
		phi = 0; //debugging
		console.log("REAPEAT");
	}

	while (points.length >500) {
		points.shift();
	}
}
