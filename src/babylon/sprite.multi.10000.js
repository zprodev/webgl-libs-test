const targetCanvas = document.getElementById('targetCanvas');
const targetCanvasWidth = targetCanvas.width;
const targetCanvasHeight = targetCanvas.height;
const targetCanvasWidthHalf = targetCanvasWidth / 2;
const targetCanvasHeightHalf = targetCanvasHeight / 2;

const engine = new BABYLON.Engine(targetCanvas);
const scene = new BABYLON.Scene(engine);
engine.runRenderLoop(function () {
  scene.render();
});

const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, -1), scene);
camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
camera.orthoLeft = -targetCanvasWidthHalf;
camera.orthoRight = targetCanvasWidthHalf;
camera.orthoTop = targetCanvasHeightHalf;
camera.orthoBottom = -targetCanvasHeightHalf;

let spriteId = 1;
const spriteNum = 10000;
const spriteManager1 = new BABYLON.SpriteManager('manager1', 'assets/img/test1.png', Math.ceil(spriteNum / 3), { width: 128, height: 128 }, scene);
const spriteManager2 = new BABYLON.SpriteManager('manager2', 'assets/img/test2.png', Math.ceil(spriteNum / 3), { width: 128, height: 128 }, scene);
const spriteManager3 = new BABYLON.SpriteManager('manager3', 'assets/img/test3.png', Math.ceil(spriteNum / 3), { width: 128, height: 128 }, scene);

const randomMinX = -targetCanvasWidthHalf;
const randomMaxX = targetCanvasWidthHalf;
const randomMinY = -targetCanvasHeightHalf;
const randomMaxY = targetCanvasHeightHalf;
for (let spriteCount = 0; spriteCount < spriteNum; spriteCount++) {
  const sprite = new BABYLON.Sprite(`sprite${spriteCount}`,
    (spriteId === 1) ? spriteManager1 : (spriteId === 2) ? spriteManager2 : spriteManager3
  );
  sprite.size = 128;
  sprite.position.x = Math.random() * (randomMaxX - randomMinX) + randomMinX;
  sprite.position.y = Math.random() * (randomMaxY - randomMinY) + randomMinY;
  sprite.position.z = Math.random();

  spriteId++;
  if (spriteId > 3) {
    spriteId = 1;
  }
}
