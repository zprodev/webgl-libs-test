import 'https://unpkg.com/pixi-projection@latest/dist/pixi-projection.js';

const targetCanvas = document.getElementById('targetCanvas');
const targetCanvasWidth = targetCanvas.width;
const targetCanvasHeight = targetCanvas.height;

const app = new PIXI.Application(targetCanvasWidth, targetCanvasHeight, { view: targetCanvas });

const camera = new PIXI.projection.Camera3d();
app.stage.addChild(camera);

let textureId = 1;
const objNum = 10000;
const randomMinZ = -250;
const randomMaxZ = 250;
PIXI.loader.add(['assets/img/test1.png', 'assets/img/test2.png', 'assets/img/test3.png']).load(() => {
  for (let objCount = 0; objCount < objNum; objCount++) {
    const sprite = new PIXI.projection.Sprite3d(PIXI.loader.resources[`assets/img/test${textureId}.png`].texture);
    camera.addChild(sprite);
    sprite.anchor.set(0.5);
    sprite.position3d.x = Math.random() * targetCanvasWidth;
    sprite.position3d.y = Math.random() * targetCanvasHeight;
    sprite.position3d.z = Math.random() * (randomMaxZ - randomMinZ) + randomMinZ;
    textureId++;
    if (textureId > 3) {
      textureId = 1;
    }
  }
});
