let canvas = document.getElementById("c1");
let ctx = canvas.getContext("2d");
let mas = [];
let count = 0;
let timer;

function drawField() {
  ctx.clearRect(0, 0, 300, 300);
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      if (mas[i][j] == 1) {
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }
}

canvas.onclick = function (event) {
  let x = event.offsetX;
  let y = event.offsetY;
  console.log(x, y);
  x = Math.floor(x / 10);
  y = Math.floor(y / 10);
  mas[y][x] = 1;
  drawField();
};

function goLife() {
  let h = 30,
    v = 30;
  for (let i = 0; i < h; i++) {
    mas[i] = [];
    for (let j = 0; j < v; j++) {
      mas[i][j] = 0;
    }
  }
}
goLife();

function startLife() {
  let mas2 = [];
  for (let i = 0; i < 30; i++) {
    mas2[i] = [];
    for (let j = 0; j < 30; j++) {
      let neighbors = 0;
      if (mas[fpm(i) - 1][j] == 1) neighbors++; // up
      if (mas[i][fpp(j) + 1] == 1) neighbors++; // right
      if (mas[fpp(i) + 1][j] == 1) neighbors++; // down
      if (mas[i][fpm(j) - 1] == 1) neighbors++; // left
      if (mas[fpm(i) - 1][fpp(j) + 1] == 1) neighbors++; // right up
      if (mas[fpp(i) + 1][fpp(j) + 1] == 1) neighbors++; // right down
      if (mas[fpp(i) + 1][fpm(j) - 1] == 1) neighbors++; // left down
      if (mas[fpm(i) - 1][fpm(j) - 1] == 1) neighbors++; // left up
      neighbors == 2 || neighbors == 3 ? (mas2[i][j] = 1) : (mas[i][j] = 0);
    }
  }
  mas = mas2;
  drawField();
  count++;
  document.getElementById("count").innerHTML = count;
  timer = setTimeout(startLife, 300);
}

function fpm(i) {
  if (i == 0) return 30;
  else return i;
}
function fpp(i) {
  if (i == 29) return -1;
  else return i;
}

document.getElementById("start").onclick = startLife;
