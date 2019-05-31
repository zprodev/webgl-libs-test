const targetCanvas = document.getElementById('targetCanvas');
const targetCanvasWidth = targetCanvas.width;
const targetCanvasHeight = targetCanvas.height;

const app = new PIXI.Application({ width: targetCanvasWidth, height: targetCanvasHeight, view: targetCanvas });

const num = 1000;
PIXI.Loader.shared.add('assets/img/test.png').load(() => {
  for (let count = 0; count < num; count++) {
    const text = new PIXI.Text('Text', { fontFamily: 'Arial', fontSize: 30, fill: 0xffffff });
    app.stage.addChild(text);
    text.anchor.set(0.5);
    text.x = Math.random() * targetCanvasWidth;
    text.y = Math.random() * targetCanvasHeight;
  }
});
