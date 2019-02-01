const targetCanvas = document.getElementById('targetCanvas');
const targetCanvasWidth = targetCanvas.width;
const targetCanvasHeight = targetCanvas.height;
const targetCanvasWidthHalf = targetCanvasWidth / 2;
const targetCanvasHeightHalf = targetCanvasHeight / 2;

const renderer = new THREE.WebGLRenderer({ canvas: targetCanvas });
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
  -targetCanvasWidthHalf,
  targetCanvasWidthHalf,
  targetCanvasHeightHalf,
  -targetCanvasHeightHalf,
  0,
  10
);
camera.position.set(0, 0, 5);

let spriteId = 1;
const spriteNum = 10000;

const texture1 = new THREE.TextureLoader().load('assets/img/test1.png');
const texture2 = new THREE.TextureLoader().load('assets/img/test2.png');
const texture3 = new THREE.TextureLoader().load('assets/img/test3.png');
const material1 = new THREE.SpriteMaterial({
  map: texture1
});
const material2 = new THREE.SpriteMaterial({
  map: texture2
});
const material3 = new THREE.SpriteMaterial({
  map: texture3
});

const randomMinX = -targetCanvasWidthHalf;
const randomMaxX = targetCanvasWidthHalf;
const randomMinY = -targetCanvasHeightHalf;
const randomMaxY = targetCanvasHeightHalf;
for (let spriteCount = 0; spriteCount < spriteNum; spriteCount++) {
  const sprite = new THREE.Sprite(
    (spriteId === 1)? material1 : (spriteId === 2)? material2 : material3
  );
  scene.add(sprite);
  sprite.position.x = Math.random() * (randomMaxX - randomMinX) + randomMinX;
  sprite.position.y = Math.random() * (randomMaxY - randomMinY) + randomMinY;
  sprite.scale.x = 128;
  sprite.scale.y = 128;
  spriteId++;
  if (spriteId > 3) {
    spriteId = 1;
  }
}

function tick() {
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
tick();
