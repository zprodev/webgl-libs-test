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

const spriteNum = 1000;
new THREE.TextureLoader().load('assets/img/test.png', (texture) => {
  const material = new THREE.SpriteMaterial({
    map: texture
  });

  const randomMinX = -targetCanvasWidthHalf;
  const randomMaxX = targetCanvasWidthHalf;
  const randomMinY = -targetCanvasHeightHalf;
  const randomMaxY = targetCanvasHeightHalf;
  for (let spriteCount = 0; spriteCount < spriteNum; spriteCount++) {
    const sprite = new THREE.Sprite(material);
    scene.add(sprite);
    sprite.position.x = Math.random() * (randomMaxX - randomMinX) + randomMinX;
    sprite.position.y = Math.random() * (randomMaxY - randomMinY) + randomMinY;
    sprite.scale.x = texture.image.naturalWidth;
    sprite.scale.y = texture.image.naturalHeight;
  }
});

function tick() {
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
tick();
