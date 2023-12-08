let boxSize = 250;
let insert = "A";
let font;
let textleroy;
let textluke;
const t = 200;

// coolors color palette
const coolorsPalette = [
  '#eb300f', '#fe7688', '#fff566', '#212121', '#306e42', '#0d3b66'
];



// preload font
function preload() {
  font = loadFont('SpaceMono-Regular.otf');
}

// set up graphic (textleroy is the name of the graphic)
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  textleroy = createGraphics(200, 200);
  textluke = createGraphics(windowWidth + 600, windowHeight + 300);
  createPattern();
}

function draw() {
  background(252, 191, 73);
  push();
  translate(0, 0, -200);
  imageMode(CENTER);
  image(textluke, 0, 0);
  pop();
  noStroke();

  // rotate boxy box speed
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);

  // box creation
  drawBox();
}

function drawBox() {
  texture(textleroy);
  box(boxSize);
}

// one letter per type
function keyTyped() {
  insert = key;
  insert = insert.toUpperCase();
  createPattern();
}

function createPattern() {


  // Generate a new set of random colors
  const randomColors = getRandomColors();

  // Select pattern based on the key pressed
  let selectedPattern  = PTN.checked(t / 8);
  switch (insert) {
//patterns
    case 'A':
      selectedPattern = PTN.stripePolygon(4, t / 12, t / 6);
      break;
    case 'S':
      selectedPattern = PTN.stripePolygon(6, t / 12);
      break;
    case 'D':
      selectedPattern = PTN.stripeRadial(TAU / 30);
      break;
    case 'F':
      selectedPattern = PTN.wave(t / 2, t / 10, t / 5, t / 10);
      break;
    case 'G':
      selectedPattern = PTN.dot(t / 10, t / 20);
      break;
    case 'H':
      selectedPattern = PTN.checked(t / 8, t / 3);
      break;
    case 'J':
      selectedPattern = PTN.cross(t / 10, t / 40);
      break;
    case 'K':
      selectedPattern = PTN.triangle(t / 5, t / 10);
      break;
//patterns
    case 'L':
      selectedPattern = PTN.stripePolygon(4,t / 2, t/7);
      break;
    case 'Z':
      selectedPattern = PTN.stripePolygon(6, t / 12);
      break;
    case 'X':
      selectedPattern = PTN.stripeRadial(TAU / 30);
      break;
    case 'C':
      selectedPattern = PTN.wave(t / 2, t / 10, t / 5, t / 10);
      break;
    case 'V':
      selectedPattern = PTN.dot(t / 10, t / 20);
      break;
    case 'B':
      selectedPattern = PTN.checked(t / 8, t / 3);
      break;
    case 'N':
      selectedPattern = PTN.cross(t / 10, t / 40);
      break;
    case 'M':
      selectedPattern = PTN.triangle(t / 5, t / 10);
      break;
//patterns
    case 'Q':
      selectedPattern = PTN.stripePolygon(4, t / 12, t / 6);
      break;
    case 'W':
      selectedPattern = PTN.stripePolygon(6, t / 12);
      break;
    case 'E':
      selectedPattern = PTN.stripeRadial(TAU / 30);
      break;
    case 'R':
      selectedPattern = PTN.wave(t / 2, t / 10, t / 5, t / 10);
      break;
    case 'T':
      selectedPattern = PTN.dot(t / 10, t / 20);
      break;
		case 'Y':
      selectedPattern = PTN.checked(t / 8, t / 3);
      break;
		case 'U':
      selectedPattern = PTN.cross(t / 10, t / 40);
      break;
		case 'I':
      selectedPattern = PTN.triangle(t / 5, t / 10);
      break;
//patterns
		case 'O':
      selectedPattern = PTN.stripePolygon(4, t / 12, t / 6);
      break;
		case 'P':
      selectedPattern = PTN.stripePolygon(6, t / 12);
      break;
    default:
      selectedPattern = PTN.stripeRadial(TAU / 30); // Default pattern
  }

  // text texture hehe
  textluke.patternColors(randomColors);
  textluke.background(0);
	textluke.pattern(selectedPattern);
  //selectedPattern(textluke, t); // Apply the selected pattern
  textluke.rectPattern(0, 0, windowWidth + 600, windowHeight + 300);

  textleroy.patternColors(randomColors);
  textleroy.background(255, 20);
  PTN.checked(textleroy, t / 1); // Use a specific pattern for textleroy
  textleroy.rectPattern(0, 0, t, t);

  textleroy.fill(255);
  textleroy.textFont(font);
  textleroy.textSize(200);
  textleroy.textAlign(CENTER, CENTER);
  textleroy.text(insert, 100, 55);
}

function getRandomColors() {
  // Shuffle the color palette to get a random order
  const shuffledColors = coolorsPalette.slice();
  for (let i = shuffledColors.length - 1; i > 0; i--) {
    const j = floor(random(i + 1));
    [shuffledColors[i], shuffledColors[j]] = [shuffledColors[j], shuffledColors[i]];
  }
  // Return the first three colors (adjust as needed)
  return shuffledColors.slice(0, 3);
}
