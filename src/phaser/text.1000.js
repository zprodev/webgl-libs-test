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
  type: Phaser.WEBGL,
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
}

function create() {
  const spriteNum = 1000;
  for (let spriteCount = 0; spriteCount < spriteNum; spriteCount++) {
    this.add.text(
      Math.random() * targetCanvasWidth,
      Math.random() * targetCanvasHeight,
      'Text',
      { fontFamily: 'Arial', fontSize: 30, fill: "#ffffff" }
    );
  }
}
