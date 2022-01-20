
// Tienes que probar al inverso todo lo que ya tienes hasta que esta madre corra jajaja.
// El if basicamente es condicionar a la maquina a hacer lo que tu quieres llegado un parametro.

var pelotaX = 0;
var pelotaY = 0;

var vertical = 20;
var horizontal = 20;

function setup() {
  createCanvas(800, 500);
  background(123);
}

function draw() {
  background(30, 100, 20);

  dibujarPelota();
  moveBall();
  checkCollisions();
}

function dibujarPelota() {
  var circunference = 100;
  circle(pelotaX, pelotaY, circunference);
}

function moveBall () {
  pelotaY = pelotaY + vertical;
  pelotaX = pelotaX + horizontal;
}

function checkCollisions() {
  if (pelotaY >= 500) {
    vertical = -20;
  }
  if (pelotaY <= 0) {
    vertical = 20;
  }

  if (pelotaX >= 800) {
    horizontal = -20;
  }
  if (pelotaX <= 0) {
    horizontal = 20
  }
}