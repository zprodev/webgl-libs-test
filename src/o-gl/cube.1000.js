import {Renderer, Camera, Transform, Cube, Program, Mesh} from 'https://unpkg.com/ogl@latest/src/index.js';

const targetCanvas = document.getElementById('targetCanvas');
const targetCanvasWidth = targetCanvas.width;
const targetCanvasHeight = targetCanvas.height;
const targetCanvasWidthHalf = targetCanvasWidth / 2;
const targetCanvasHeightHalf = targetCanvasHeight / 2;

const targetCanvasStyleWidth = targetCanvas.style.width;
const targetCanvasStyleHeight = targetCanvas.style.height;

const renderer = new Renderer({
  canvas: targetCanvas,
  width: parseInt(targetCanvasStyleWidth),
  height: parseInt(targetCanvasStyleHeight),
});
const gl = renderer.gl;

const camera = new Camera(gl, {
  fov: 100,
  aspect: targetCanvasWidth / targetCanvasHeight,
  near: 1,
  far: 1000,
});
camera.position.z = 500;

const scene = new Transform();
const program = new Program(gl, {
    vertex: `
        attribute vec3 position;

        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;

        void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
        `,
    fragment: `
        void main() {
            gl_FragColor = vec4(1.0);
        }
    `,
});

const objNum = 1000;

const randomMinX = -targetCanvasWidthHalf;
const randomMaxX = targetCanvasWidthHalf;
const randomMinY = -targetCanvasHeightHalf;
const randomMaxY = targetCanvasHeightHalf;
const randomMinZ = -250;
const randomMaxZ = 250;

const objs = [];

for (let objCount = 0; objCount < objNum; objCount++) {
  const geometry = new Cube(gl, {width:10, height:10, depth:10});
  const cube = new Mesh(gl, {geometry, program});
  cube.setParent(scene);
  cube.position.x = Math.random() * (randomMaxX - randomMinX) + randomMinX;
  cube.position.y = Math.random() * (randomMaxY - randomMinY) + randomMinY;
  cube.position.z = Math.random() * (randomMaxZ - randomMinZ) + randomMinZ;

  objs.push(cube);
}

function tick() {
  renderer.render({scene, camera});
  for(let i = 0; i < objs.length; i++){
    objs[i].rotation.x += 0.005;
    objs[i].rotation.y += 0.01;
  }
  requestAnimationFrame(tick);
}
tick();
