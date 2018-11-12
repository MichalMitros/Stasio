class Stasio {

  constructor(setup) {
    this.d = floor((height*0.9)/15);
    this.height = this.d*15;
    this.width = this.d*7;
    this.x = width/2 - this.width/2;
    this.y = height/2 - this.height/2;
    this.tick = 0;
    this.type = 0;
    // okoL, okoP, ustaL, ustaS, ustaP, rekaLL, rekaLD,
    // rekaPL, rekaPD, nogaLK, nogaLS, nogaPK, nogaPS
    this.setup = setup;
  }

  random_dance() {
    if(random() < 0.05) {
      this.next_dance();
    }
  }

  next_dance() {
    this.type++;
    if(this.type == this.setup.length) {
      this.type = 0;
    }
    this.tick = 0;
  }

  next_tick() {
    this.tick++;
    if(this.tick == this.setup[this.type].length) {
      this.tick = 0;
    }
  }

  show() {
    push();
    translate(this.x, this.y);
    strokeWeight(7);
    stroke(255);
    fill(0);
    this.show_head();
    this.show_body();
    this.show_arms();
    this.show_legs();
    pop();
  }

  show_head() {
    ellipse(this.d*3.5, this.d*3, this.d*4, this.d*4);
		strokeWeight(4);
		line(this.d*this.setup[this.type][this.tick][2][0],
      this.d*this.setup[this.type][this.tick][2][1],
      this.d*this.setup[this.type][this.tick][3][0],
      this.d*this.setup[this.type][this.tick][3][1]);
    line(this.d*this.setup[this.type][this.tick][3][0],
      this.d*this.setup[this.type][this.tick][3][1],
      this.d*this.setup[this.type][this.tick][4][0],
      this.d*this.setup[this.type][this.tick][4][1]);
		strokeWeight(10);
		point(this.d*this.setup[this.type][this.tick][0][0],
      this.d*this.setup[this.type][this.tick][0][1]);
    point(this.d*this.setup[this.type][this.tick][1][0],
      this.d*this.setup[this.type][this.tick][1][1]);
		strokeWeight(7);
  }

  show_arms() {
    line(this.d*3.5, this.d*7,
      this.d*this.setup[this.type][this.tick][5][0],
      this.d*this.setup[this.type][this.tick][5][1]);
    line(this.d*this.setup[this.type][this.tick][5][0],
      this.d*this.setup[this.type][this.tick][5][1],
      this.d*this.setup[this.type][this.tick][6][0],
      this.d*this.setup[this.type][this.tick][6][1]);
    line(this.d*3.5, this.d*7,
      this.d*this.setup[this.type][this.tick][7][0],
      this.d*this.setup[this.type][this.tick][7][1]);
    line(this.d*this.setup[this.type][this.tick][7][0],
      this.d*this.setup[this.type][this.tick][7][1],
      this.d*this.setup[this.type][this.tick][8][0],
      this.d*this.setup[this.type][this.tick][8][1]);
  }

  show_legs() {
    line(this.d*3.5, this.d*11.5,
      this.d*this.setup[this.type][this.tick][9][0],
      this.d*this.setup[this.type][this.tick][9][1]);
    line(this.d*this.setup[this.type][this.tick][9][0],
      this.d*this.setup[this.type][this.tick][9][1],
      this.d*this.setup[this.type][this.tick][10][0],
      this.d*this.setup[this.type][this.tick][10][1]);
    line(this.d*3.5, this.d*11.5,
      this.d*this.setup[this.type][this.tick][11][0],
      this.d*this.setup[this.type][this.tick][11][1]);
    line(this.d*this.setup[this.type][this.tick][11][0],
      this.d*this.setup[this.type][this.tick][11][1],
      this.d*this.setup[this.type][this.tick][12][0],
      this.d*this.setup[this.type][this.tick][12][1]);
  }

  show_body() {
    line(this.d*3.5, this.d*5, this.d*3.5, this.d*11.5);
  }
}