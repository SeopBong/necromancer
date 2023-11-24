var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth + 100;
canvas.height = window.innerHeight + 100;


let img = new Image();
img.src = 'Images\\Character.png';
img.onload = function() {
    init();
};

const scale = 2;
const width = 32;
const height = 33;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

let movingRight = false;
let characterX = 0;

function drawFrame(frameX, frameY, canvasX, canvasY) { 
    ctx.drawImage(img,
                  frameX * width, frameY * height, width, height,
                  canvasX, canvasY, scaledWidth, scaledHeight);
}
let framePosition = function(x,y){
  this.x=x;
  this.y=y;
}

let idleLoop = [new framePosition(0,0), new framePosition(1,0), new framePosition(1,1),new framePosition(0,1)];
let workLoop =  [new framePosition(0, 3), new framePosition(1, 3), new framePosition(2, 3), new framePosition(3, 3),
  new framePosition(4, 3), new framePosition(5, 3), new framePosition(6, 3), new framePosition(7, 3)];

let currentLoop = idleLoop; // 초기에는 가만히 숨쉬는 동작

let currentLoopIndex = 0;
let frameCount = 0;
let currentDirection = 0;


function step() {
    frameCount++;

    if (frameCount < 10) {  //60프레임 속도
      window.requestAnimationFrame(step);
      return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(movingRight == true){
     characterX += 15; 
    }

    drawFrame(currentLoop[currentLoopIndex].x, currentLoop[currentLoopIndex].y, characterX, 0); // 루프시킬곳은 2개이기때문에 하나 제거
    currentLoopIndex++;

    if(movingRight == true) {
      currentLoop = workLoop;
      if(movingRight = false){
        currentLoop = idleLoop;
      }
    }
    if (currentLoopIndex >= currentLoop.length) {
      currentLoopIndex = 0;
    }

    window.requestAnimationFrame(step);
  }

  document.addEventListener('keydown', function(e){
    if (e.code == 'ArrowRight'){
      movingRight = true;
    }
  })
  document.addEventListener('keyup', function (e) {
    if (e.code == 'ArrowRight') {
        movingRight = false;
        currentLoop = idleLoop;
        currentLoopIndex = 0;
    }
});

function init() {
    window.requestAnimationFrame(step);
}



//이미지 스프라이트 이미지

// var dino = {
//     x : 10,
//     y : 200,
//     width : 50,
//     height : 50,
//     draw(){
//         ctx.fillStyle = 'green';
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//     }
// }
// dino.draw()


//var img1 = new Image();
//img1.src = '넣을 이미지.png';

// class Cactus {
//     constructor(){
//         this.x = 500;
//         this.y = 200;
//         this.width = 50;
//         this.height = 50;
//     }
//     draw(){
//         ctx.fillStyle = 'red';
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//         // ctx.drwImage(img1, this.x, this.y);
//     }
// }
// var cactus = new Cactus();
// cactus.draw();

// var timer = 0;
// var cactusess = []; //장애물 여러개 선언
// var jumpTimer = 0;
// var animation;

// function frames(){
//     animation = requestAnimationFrame(frames);
//     timer++;

//     ctx.clearRect(0,0, canvas.width, canvas.height);  //잔상제거

//     if(timer % 144 === 0){
//         var cactus = new Cactus();
//         cactusess.push(cactus);     
//     }

//     cactusess.forEach((a, i, o)=>{
//         //x좌표가 0미만이면 제거
//         if(a.x < 0){        //현재의 x(장애물)의 좌표가 0이 되면
//             o.splice(i, 1)
//         }
//         a.x--;

//         collision(dino, a);

//         a.draw();
//     })

//     if(jumping == true){   //dino.y -= 2;    //점프속도
//         dino.y-=2;
//         jumpTimer++;    //
//     }
//     if(jumping == false){
//         if(dino.y < 200) {       //땅위치
//             dino.y++;
//         }
//     }
//     if(jumpTimer > 100){
//         jumping = false;
//         jumpTimer = 0;
//     }




//     dino.draw()
// }

// frames();

// //충돌체크
// function collision(dino, cactus){
//     var x축차이 = cactus.x - (dino.x + dino.width);
//     var y축차이 = cactus.y - (dino.y + dino.height);
//     if(x축차이 < 0 && y축차이 < 0){
//         ctx.clearRect(0,0, canvas.width, canvas.height);
//         cancelAnimationFrame(animation);
//     }
// }



// var jumping = false;
// document.addEventListener('keydown', function(e){
//     if(e.code === 'Space'){ //키는 대문자해야함
//         jumping = true;
//     }
// })

