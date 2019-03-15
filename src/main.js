// リクエスト解析
const hrefSplit = location.href.split('?');
const pageUrl = hrefSplit[0];
const pageParam = (hrefSplit[1]) ? hrefSplit[1].split('=')[1] : undefined;
const pageParamSplit = (pageParam) ? pageParam.split(':') : [];
const targetLibName = pageParamSplit[0] || 'pixi';
const targetTestName = pageParamSplit[1] || 'sprite-1000';

const libs = {
  'pixi-v4': {
    code: 'https://unpkg.com/pixi.js@4/dist/pixi.min.js'
  },
  'pixi': {
    code: 'https://unpkg.com/pixi.js@latest/dist/pixi.min.js'
  },
  'phaser': {
    code: 'https://unpkg.com/phaser@latest/dist/phaser.js'
  },
  'three': {
    code: 'https://unpkg.com/three@latest/build/three.min.js'
  },
  'babylon': {
    code: 'https://unpkg.com/babylonjs@latest/babylon.js'
  },
  'o-gl': {
    code: ''
  },
}

const commonTests = {
  'sprite-1000': {
    code: 'sprite.1000.js'
  },
  'sprite-5000': {
    code: 'sprite.5000.js'
  },
  'sprite-10000': {
    code: 'sprite.10000.js'
  },
  'sprite-multi-10000': {
    code: 'sprite.multi.10000.js'
  },
}

const originTests = {
  'pixi-v4': {
    'text-1000': {
      code: 'text.1000.js'
    },
  },
  'pixi': {
    'text-1000': {
      code: 'text.1000.js'
    },
  },
  'phaser': {
    'text-1000': {
      code: 'text.1000.js'
    },
  },
  'three': {
    'text-1000': {
      code: 'text.1000.js'
    },
    'cube-1000': {
      code: 'cube.1000.js'
    },
    'cube-10000': {
      code: 'cube.10000.js'
    },
    'cube-lighting-1000': {
      code: 'cube.lighting.1000.js'
    },
  },
  'o-gl': {
    'cube-1000': {
      code: 'cube.1000.js'
    },
    'cube-10000': {
      code: 'cube.10000.js'
    },
    'cube-lighting-1000': {
      code: 'cube.lighting.1000.js'
    },
  },
}

// canvas表示
const canvas = document.createElement('canvas');
canvas.id = 'targetCanvas';
document.body.appendChild(canvas);
canvas.width = 1024;
canvas.height = 1024;
canvas.style.position = 'absolute';
canvas.style.margin = 'auto';
canvas.style.top = '0px';
canvas.style.left = '0px';
canvas.style.bottom = '0px';
canvas.style.right = '0px';
if (window.innerWidth / window.innerHeight >= 1) {
  canvas.style.width = window.innerHeight + 'px';
  canvas.style.height = window.innerHeight + 'px';
} else {
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerWidth + 'px';
}

// GUI表示
const gui = new dat.GUI();
Object.keys(libs).forEach((libName) => {
  const guiFolder = gui.addFolder(libName);
  const action = {};
  Object.keys(commonTests).forEach((testName) => {
    action[testName] = () => {
      window.location.href = `${pageUrl}?test=${libName}:${testName}`;
    }
    guiFolder.add(action, testName);
  });
  if (originTests[libName]) {
    Object.keys(originTests[libName]).forEach((testName) => {
      action[testName] = () => {
        window.location.href = `${pageUrl}?test=${libName}:${testName}`;
      }
      guiFolder.add(action, testName);
    });
  };
});

// GUIのstyle上書き
gui.domElement.style.margin = '0px';
document.querySelectorAll('.property-name').forEach(element => {
  element.style.width = '100%';
});

// Stats表示
const stats = new Stats({ maxFPS: 60, maxMem: 300 });
document.body.appendChild(stats.dom);
function animate() {
  stats.end();
  stats.begin();
  requestAnimationFrame(animate);
}
animate();

const execTextScript = () => {
  const testScriptElement = document.createElement('script');
  testScriptElement.type = 'module';
  if (commonTests[targetTestName]) {
    testScriptElement.src = `src/${targetLibName}/${commonTests[targetTestName].code}`;
  } else {
    testScriptElement.src = `src/${targetLibName}/${originTests[targetLibName][targetTestName].code}`;    
  }
  document.body.appendChild(testScriptElement);
};

if(libs[targetLibName].code.length){
  // 対象のライブラリとテストを読み込む
  const libScriptElement = document.createElement('script');
  libScriptElement.src = libs[targetLibName].code;
  document.body.appendChild(libScriptElement);
  libScriptElement.onload = execTextScript;
}else{
  // テストを読み込む(ESModule対応済みライブラリなど)
  execTextScript();
}
