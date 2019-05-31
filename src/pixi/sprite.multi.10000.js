const targetCanvas = document.getElementById('targetCanvas');
const targetCanvasWidth = targetCanvas.width;
const targetCanvasHeight = targetCanvas.height;

const app = new PIXI.Application({ width: targetCanvasWidth, height: targetCanvasHeight, view: targetCanvas });

let spriteId = 1;
const spriteNum = 10000;
PIXI.Loader.shared.add(['assets/img/test1.png', 'assets/img/test2.png', 'assets/img/test3.png']).load(() => {
  for (let spriteCount = 0; spriteCount < spriteNum; spriteCount++){
    const sprite = PIXI.Sprite.from(`assets/img/test${spriteId}.png`);
    app.stage.addChild(sprite);
    sprite.anchor.set(0.5);
    sprite.x = Math.random() * targetCanvasWidth;
    sprite.y = Math.random() * targetCanvasHeight;
    spriteId++;
    if (spriteId > 3) {
      spriteId = 1;
    }
  }
});
