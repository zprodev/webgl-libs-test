const targetCanvas = document.getElementById('targetCanvas');
const targetCanvasWidth = targetCanvas.width;
const targetCanvasHeight = targetCanvas.height;

const app = new PIXI.Application({ width: targetCanvasWidth, height: targetCanvasHeight, view: targetCanvas });

const spriteNum = 1000;
PIXI.Loader.shared.add('assets/img/test.png').load(() => {
  for (let spriteCount = 0; spriteCount < spriteNum; spriteCount++){
    const sprite = PIXI.Sprite.from('assets/img/test.png');
    app.stage.addChild(sprite);
    sprite.anchor.set(0.5);
    sprite.x = Math.random() * targetCanvasWidth;
    sprite.y = Math.random() * targetCanvasHeight;
  }
});
