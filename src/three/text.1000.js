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

new THREE.FontLoader().load('assets/font/test.json', function (font) {
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
  });

  const randomMinX = -targetCanvasWidthHalf;
  const randomMaxX = targetCanvasWidthHalf;
  const randomMinY = -targetCanvasHeightHalf;
  const randomMaxY = targetCanvasHeightHalf;
  for (let spriteCount = 0; spriteCount < spriteNum; spriteCount++) {
    const shapes = font.generateShapes('Text', 24);
    const geometry = new THREE.ShapeBufferGeometry(shapes);
    const text = new THREE.Mesh(geometry, material);
    scene.add(text);
    text.position.x = Math.random() * (randomMaxX - randomMinX) + randomMinX;
    text.position.y = Math.random() * (randomMaxY - randomMinY) + randomMinY;
  }
});

function tick() {
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
tick();
