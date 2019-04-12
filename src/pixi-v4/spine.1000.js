import 'https://unpkg.com/pixi-spine@latest/bin/pixi-spine.js';

const targetCanvas = document.getElementById('targetCanvas');
const targetCanvasWidth = targetCanvas.width;
const targetCanvasHeight = targetCanvas.height;

const app = new PIXI.Application(targetCanvasWidth, targetCanvasHeight, { view: targetCanvas });

const objNum = 100;
PIXI.loader.add('assets/spine/dragon.json').load(() => {
  for (let objCount = 0; objCount < objNum; objCount++) {
    
    const object = new PIXI.spine.Spine(PIXI.loader.resources['assets/spine/dragon.json'].spineData);
    app.stage.addChild(object);
    object.scale.set(0.5);
    object.state.setAnimation(0, 'flying', true);
    object.x = Math.random() * targetCanvasWidth;
    object.y = Math.random() * targetCanvasHeight;
  }
});
