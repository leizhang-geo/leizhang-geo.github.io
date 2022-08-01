let cols, rows;
let scale = 15;
let w = 1500;
let h = 1500;
let terrian = [];
let flying = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  cols = w / scale;
  rows = h / scale;
}

function draw() {
  flying -= 0.02;
  yoff = flying;
  for (let y = 0; y < rows; y++) {
    terrian[y] = [];
    xoff = 0;
    for (let x = 0; x < cols; x++) {
      terrian[y][x] = map(noise(xoff, yoff), 0, 1, -120, 120);
      xoff += 0.1;
    }
    yoff += 0.1;
  }

  background(0);
  stroke(255);
  noFill();
  rotateX(PI/3);
  translate(-w/2, -h/2+100);
  
  for (let y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      vertex(x*scale, y*scale, terrian[y][x]);
      vertex(x*scale, (y+1)*scale, terrian[y+1][x]);
    }
    endShape();
  }

}