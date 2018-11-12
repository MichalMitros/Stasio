let stasio;
let prev = 0;
let slider;
let sum = 0;
let showSlider = false;
let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  slider = createSlider(0.002, 0.035, 0.017, 0.00025);
  slider.position(20, -50);
  slider.style("width", "175px");
  
  stasio = new Stasio(createDances());
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);

  let vol = mic.getLevel();
  let delta = vol-prev;
  if(delta < 0) {
    delta = 0;
  }
  sum++;
  if(delta>slider.value() && sum > 7) {
    sum = 0;
    stasio.next_tick();
    stasio.random_dance();
  }
  prev = vol;
  stasio.show();
  
  textSize(32);
  fill(0, 102, 153, 51);
	text('BETA', 30, windowHeight-30);
  textSize(10);
  text(' build 5.1', 30, windowHeight-15);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  stasio = new Stasio(createDances());
}

function keyPressed() {
  if(key == ' ') {
    if(showSlider) {
      showSlider = false;
      slider.position(20, -50);
    } else {
      showSlider = true;
      slider.position(20, 20);
    }
  }
}