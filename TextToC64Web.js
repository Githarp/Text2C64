let text, canvas, save;
let isize = 32;
let scale;
let colors;

function imageFromString(s) {
  res = [];
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    res.push(code & 0x0F);
    res.push((code >> 4) & 0x0F);
  }
  while (res.length < 4 * isize * isize) {
    res.push(0);
  }
  return res;
}

function setup() {
  canvas = createCanvas(480, 480);
  canvas.id("main");
  noStroke();
  text = createElement("textarea", "This is a stupid little toy I made, but it will allow you to generate an image by typing. Each character you type will generate a pair of pixels, in a 16- color palette.\n\n333333333333333333333                                                3333333333333333                                                33333333333333339993999399939993\nSee what you can make.");
  save = createElement("button", "Save");
  save.id("save");
  save.mouseClicked(() => {
    saveCanvas(canvas, "mystoryimage", "jpg");
  });
  scale = canvas.width / isize;
  
  colors = [
    color(0,0,0),
    color(255,255,255),
    color(152, 82, 71),
    color(126, 191, 199),
    color(153, 92, 161),
    color(111, 170, 103),
    color(77,71,151),
    color(205, 212, 145),
    color(155, 106, 66),
    color(106, 84, 29),
    color(194, 130, 121),
    color(99, 99, 99),
    color(139, 139, 139),
    color(170, 224, 164),
    color(136, 129, 199),
    color(175, 175, 175)
  ];
}

function draw() {
  let frame = imageFromString(text.value());
  for (let y = 0; y < isize; y++) {
    for (let x = 0; x < isize; x++) {
      fill(colors[frame[x + y * isize]]);
      rect(x * scale, y * scale, scale, scale);
    }
  }
}