const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
let cw = window.innerWidth;
let ch = window.innerHeight;

// let char = ["0", "1", "1"];

let char=["の", "は", "で","し","た","0","1","1","<3"]

let maxCharCount = 1000;
let fallingcharArr = [];
let fontSize = 15;
let maxColumn = cw / fontSize;
canvas.width = cw;
canvas.height = ch;

estoseafalso=true
let frames = 0;

class Fallingchar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    this.value =
      char[Math.floor(Math.random() * (char.length - 1))].toUpperCase();
    this.speed = (Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;
    ctx.fillStyle = "rgba(0,255,0,1)";
    ctx.font = fontSize + "px san serif";
    ctx.fillText(this.value, this.x, this.y);
    this.y += this.speed;
  }
}
let update = () => {
  if (estoseafalso) {
    console.log(fallingcharArr.length);
    let fallingChar = new Fallingchar(
      Math.floor(Math.random() * maxColumn) * fontSize,
      (Math.random() * ch) / 2 - 50
    );
    console.log(fallingChar);
    fallingcharArr.push(fallingChar);
  }
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, cw, ch);

  for (let i = 0; i < fallingcharArr.length && frames % 2 == 0; i++) {
    fallingcharArr[i].draw(ctx);
  }
  requestAnimationFrame(update);
  frames++;
};
update();
