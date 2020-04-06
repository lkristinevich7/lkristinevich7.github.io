// Navbar icon
document.querySelector(".icon").addEventListener('click', myFunction)

function myFunction() {
  const x = document.querySelector(".navigation");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}

// canvas

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

const mouse = {
  x: undefined,
  y: undefined
}

const maxRadius = 40;
const colorArray = [
  '#a1c9d0',
  '#6eacb7',
  '#e2b7b9',
  '#fdcece',
  '#cc8084',
];

window.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize', function (event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1
    }

    this.draw();

  }
}

let circleArray = [];

function init() {
  circleArray = []
  for (let i = 0; i < 800; i++) {
    const radius = Math.random() * 3 + 1;
    const x = Math.random() * (innerWidth - radius * 2) + radius;
    const y = Math.random() * (innerHeight - radius * 2) + radius;
    const dx = (Math.random() - 0.5);
    const dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius))

  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

init()

animate()

//Scroll button

const scroll_button = document.getElementById("scroll_button");

window.addEventListener('scroll', scrollFunction)

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroll_button.classList.add("visable");
  } else {
    scroll_button.classList.remove("visable");
  }
}
scroll_button.addEventListener('click', topFunction)

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Auto text
const text = document.getElementById("text");
const phrase = "Hire an outstanding web developer";
let index = 1;

setInterval(writeText, 100);

function writeText() {
  text.innerText = phrase.slice(0, index)

  index++;

  if (index > phrase.length) {
    index = 1;
  }

}