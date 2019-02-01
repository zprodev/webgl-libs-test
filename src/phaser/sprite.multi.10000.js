const targetCanvas = document.getElementById('targetCanvas');
const targetCanvasWidth = targetCanvas.width;
const targetCanvasHeight = targetCanvas.height;

const config = {
  canvas: targetCanvas,
  width: targetCanvasWidth,
  height: targetCanvasHeight,
  scene: {
    preload: preload,
    create: create
  },
};
new Phaser.Game(config);
if (window.innerWidth / window.innerHeight >= 1) {
  targetCanvas.style.width = window.innerHeight + 'px';
  targetCanvas.style.height = window.innerHeight + 'px';
} else {
  targetCanvas.style.width = window.innerWidth + 'px';
  targetCanvas.style.height = window.innerWidth + 'px';
}


function preload() {
  this.load.image('test1', 'assets/img/test1.png');
  this.load.image('test2', 'assets/img/test2.png');
  this.load.image('test3', 'assets/img/test3.png');
}

function create() {
  let spriteId = 1;
  const spriteNum = 10000;
  for (let spriteCount = 0; spriteCount < spriteNum; spriteCount++) {
    this.add.sprite(
      Math.random() * targetCanvasWidth,
      Math.random() * targetCanvasHeight,
      `test${spriteId}`
    );
    spriteId++;
    if (spriteId > 3) {
      spriteId = 1;
    }
  }
}
