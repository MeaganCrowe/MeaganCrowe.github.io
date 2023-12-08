let toggleSwitch;
let spinning = false;
let flyingOut = false;
let flyingBack = false;
let backgroundColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(200);
  toggleSwitch = new ToggleSwitch(width / 2, height / 2, 60);
}

function draw() {
  background(backgroundColor);
  toggleSwitch.update();
  toggleSwitch.display();
}

function mousePressed() {
  if (toggleSwitch.contains(mouseX, mouseY)) {
    toggleSwitch.toggle();
    flyingOut = true;
    backgroundColor = toggleSwitch.isOn ? color(150, 200, 255) : color(200);
  } else {
    flyingBack = true;
  }
}

function mouseMoved() {
  if (toggleSwitch.contains(mouseX, mouseY)) {
    spinning = true;
  } else {
    spinning = false;
  }
}

class ToggleSwitch {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.isOn = false;
    this.rotation = 0;
    this.flySpeed = 5;
  }

  toggle() {
    this.isOn = !this.isOn;
  }

  contains(px, py) {
    return (
      px > this.x - this.size / 2 &&
      px < this.x + this.size / 2 &&
      py > this.y - this.size / 4 &&
      py < this.y + this.size / 4
    );
  }

  update() {
    if (spinning) {
      this.rotation += 0.5;
    }

    if (flyingOut) {
      this.x += this.flySpeed;
      if (this.x > width) {
        flyingOut = false;
        flyingBack = true;
        this.x = -this.size; // Start flying back from the left side
      }
    }

    if (flyingBack) {
      this.x += this.flySpeed;
      if (this.x > width / 2) {
        flyingBack = false;
      }
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, this.size, this.size / 2, 10);

    fill(this.isOn ? color(150, 200, 255) : color(200));
    noStroke();
    ellipseMode(CENTER);
    let handleX = this.isOn ? this.size / 4 : -this.size / 4;
    ellipse(handleX, 0, this.size / 3);
    pop();
  }
}

