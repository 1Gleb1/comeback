let canvas = document.getElementById("c1");
let ctx = canvas.getContext("2d");

let R = 210;
let r = 90;
let d = 50;
let teta = 0;
let timer;
let speed = 50;

function spiro() {
  let x = (R - r) * Math.cos(teta) + d * Math.cos(((R - r) * teta) / r);
  let y = (R - r) * Math.sin(teta) - d * Math.sin(((R - r) * teta) / r);
  teta = teta + 0.1;

  ctx.fillRect(300 + x, 300 + y, 4, 4);
  timer = setTimeout(spiro, speed);
}

spiro();

let allBlockRenge = document.querySelectorAll("span");
document.querySelector("#r1").oninput = () => {
  ctx.clearRect(0, 0, 600, 600);
  let value = document.querySelector("#r1").value;
  console.log(value);
  R = value;
  allBlockRenge[0].textContent = value;
};
document.querySelector("#r2").oninput = () => {
  ctx.clearRect(0, 0, 600, 600);
  let value = document.querySelector("#r2").value;
  console.log(value);
  r = value;
  allBlockRenge[1].textContent = value;
};
document.querySelector("#r3").oninput = () => {
  ctx.clearRect(0, 0, 600, 600);

  let value = document.querySelector("#r3").value;
  console.log(value);
  d = value;
  allBlockRenge[2].textContent = value;
};
document.querySelector("#r4").oninput = () => {
  let value = document.querySelector("#r4").value;
  console.log(value);
  speed = value;
  allBlockRenge[3].textContent = value;
};
