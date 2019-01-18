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

const spriteNum = 10000;
const spriteManager = new BABYLON.SpriteManager('manager', 'assets/img/test.png', spriteNum, { width: 128, height: 128 }, scene);

const randomMinX = -targetCanvasWidthHalf;
const randomMaxX = targetCanvasWidthHalf;
const randomMinY = -targetCanvasHeightHalf;
const randomMaxY = targetCanvasHeightHalf;
for (let spriteCount = 0; spriteCount < spriteNum; spriteCount++) {
  const sprite = new BABYLON.Sprite(`sprite${spriteCount}`, spriteManager);
  sprite.size = 128;
  sprite.position.x = Math.random() * (randomMaxX - randomMinX) + randomMinX;
  sprite.position.y = Math.random() * (randomMaxY - randomMinY) + randomMinY;
}
