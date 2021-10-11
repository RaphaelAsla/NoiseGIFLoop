const R = 2;
const r = 0.5;
let phi = 0;
//let noiseMax = 5;
const phiSpeed = 0.01;
let slide = 0;

function setup() {
	createCanvas(800, 800);
	slide = createSlider(0, 10, 0, 0);
}

function draw() {

	background(0);
	push();
	translate(width / 2, height / 2);
	noFill();
	strokeWeight(1.5);
	let noiseMax = slide.value();
	beginShape();
	for (let theta = 0; theta < 2 * PI; theta += radians(1)) {
		const xoff = (R + r * cos(theta)) * cos(phi) * noiseMax;
		const zoff = (R + r * cos(theta)) * sin(phi) * noiseMax;
		const yoff = r * sin(theta) * noiseMax;
		var range = map(noise(xoff + 999, yoff + 999, zoff + 999), 0, 1, 50, 200);
		let x = range * cos(theta);
		let y = range * sin(theta);
		stroke(255);
		vertex(x, y);
	}
	endShape(CLOSE);
	pop();

	phi += phiSpeed;

	if (phi >= TWO_PI) {
		phi = 0; //debugging
		console.log("REAPEAT");
	}

	noStroke();
	fill(255);
	rect(0, height - 10, (phi / TWO_PI) * width, 5);
}
