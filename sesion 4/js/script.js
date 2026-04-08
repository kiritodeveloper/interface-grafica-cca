$(".choose").click(function() {
  $(".choose").addClass("active");
  $(".choose > .icon").addClass("active");
  $(".pay").removeClass("active");
  $(".wrap").removeClass("active");
  $(".ship").removeClass("active");
  $(".pay > .icon").removeClass("active");
  $(".wrap > .icon").removeClass("active");
  $(".ship > .icon").removeClass("active");
  $("#line").addClass("one");
  $("#line").removeClass("two");
  $("#line").removeClass("three");
  $("#line").removeClass("four");
})

$(".pay").click(function() {
  $(".pay").addClass("active");
  $(".pay > .icon").addClass("active");
  $(".choose").removeClass("active");
  $(".wrap").removeClass("active");
  $(".ship").removeClass("active");
  $(".choose > .icon").removeClass("active");
  $(".wrap > .icon").removeClass("active");
  $(".ship > .icon").removeClass("active");
  $("#line").addClass("two");
  $("#line").removeClass("one");
  $("#line").removeClass("three");
  $("#line").removeClass("four");
})

$(".wrap").click(function() {
  $(".wrap").addClass("active");
  $(".wrap > .icon").addClass("active");
  $(".pay").removeClass("active");
  $(".choose").removeClass("active");
  $(".ship").removeClass("active");
  $(".pay > .icon").removeClass("active");
  $(".choose > .icon").removeClass("active");
  $(".ship > .icon").removeClass("active");
  $("#line").addClass("three");
  $("#line").removeClass("two");
  $("#line").removeClass("one");
  $("#line").removeClass("four");
})

$(".ship").click(function() {
  $(".ship").addClass("active");
  $(".ship > .icon").addClass("active");
  $(".pay").removeClass("active");
  $(".wrap").removeClass("active");
  $(".choose").removeClass("active");
  $(".pay > .icon").removeClass("active");
  $(".wrap > .icon").removeClass("active");
  $(".choose > .icon").removeClass("active");
  $("#line").addClass("four");
  $("#line").removeClass("two");
  $("#line").removeClass("three");
  $("#line").removeClass("one");
})

$(".choose").click(function() {
  $("#first").addClass("active");
  $("#second").removeClass("active");
  $("#third").removeClass("active");
  $("#fourth").removeClass("active");
})

$(".pay").click(function() {
  $("#first").removeClass("active");
  $("#second").addClass("active");
  $("#third").removeClass("active");
  $("#fourth").removeClass("active");
})

$(".wrap").click(function() {
  $("#first").removeClass("active");
  $("#second").removeClass("active");
  $("#third").addClass("active");
  $("#fourth").removeClass("active");
})

$(".ship").click(function() {
  $("#first").removeClass("active");
  $("#second").removeClass("active");
  $("#third").removeClass("active");
  $("#fourth").addClass("active");
})
//
var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

initHeader();

function initHeader() {
  width = window.innerWidth;
  height = window.innerHeight;
  target = {x: 0, y: height};
  
  largeHeader = document.getElementById('large-header');
  largeHeader.style.height = height+'px';
  
  canvas = document.getElementById('mck-canvas');
  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext('2d');
  
  circles = [];
  for(var x = 0; x < width*0.5; x++) {
    var c = new Circle();
    circles.push(c);
  }
  animate();
  
}

function animate() {
  if(animateHeader) {
    ctx.clearRect(0,0,width,height);
    for(var i in circles) {
      circles[i].draw();
    }
  }
  requestAnimationFrame(animate);
}

// Canvas manipulation
function Circle() {
  var _this = this;
  
  // constructor
  (function() {
    _this.pos = {};
    init();
    console.log(_this);
  })();
  
  function init() {
    _this.pos.x = Math.random()*width;
    _this.pos.y = height+Math.random()*100;
    _this.alpha = 0.1+Math.random()*0.3;
    _this.scale = 0.1+Math.random()*0.3;
    _this.velocity = Math.random();
  }
  this.draw = function() {
    if(_this.alpha <= 0) {
      init();
    }
    _this.pos.y -= _this.velocity;
    _this.alpha -= 0.0005;
    ctx.beginPath();
    ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'rgba(31,47,63,'+ _this.alpha+')';
    ctx.fill();
  };
  
}

function show(item){
  
}