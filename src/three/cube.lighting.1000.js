const targetCanvas = document.getElementById('targetCanvas');
const targetCanvasWidth = targetCanvas.width;
const targetCanvasHeight = targetCanvas.height;
const targetCanvasWidthHalf = targetCanvasWidth / 2;
const targetCanvasHeightHalf = targetCanvasHeight / 2;

const renderer = new THREE.WebGLRenderer({ canvas: targetCanvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  100, targetCanvas.width / targetCanvas.height, 1, 1000
);
camera.position.set(0, 0, 500);
scene.add(new THREE.AmbientLight(0xFFFFFF, 0.5));
const light = new THREE.DirectionalLight(0xFFFFFF, 0.5);
light.position.x = 100;
light.position.y = 100;
scene.add(light);

const objNum = 1000;
const material = new THREE.MeshLambertMaterial();

const randomMinX = -targetCanvasWidthHalf;
const randomMaxX = targetCanvasWidthHalf;
const randomMinY = -targetCanvasHeightHalf;
const randomMaxY = targetCanvasHeightHalf;
const randomMinZ = -250;
const randomMaxZ = 250;

const objs = [];

for (let objCount = 0; objCount < objNum; objCount++) {
  const geometry = new THREE.BoxGeometry(10, 10, 10);
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  cube.position.x = Math.random() * (randomMaxX - randomMinX) + randomMinX;
  cube.position.y = Math.random() * (randomMaxY - randomMinY) + randomMinY;
  cube.position.z = Math.random() * (randomMaxZ - randomMinZ) + randomMinZ;

  objs.push(cube);
}

function tick() {
  renderer.render(scene, camera);
  for(let i = 0; i < objs.length; i++){
    objs[i].rotation.x += 0.005;
    objs[i].rotation.y += 0.01;
  }
  requestAnimationFrame(tick);
}
tick();
