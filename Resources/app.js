var quicktigame2d = require('com.googlecode.quicktigame2d');
var util = require("util");
var fpsCounter = require("fps-counter");
require("console-p");

// ------------------------------
// scene setup
// ------------------------------
var window = Ti.UI.createWindow({backgroundColor:'black'});
var fpsLabel = util.createLabel();
var game = quicktigame2d.createGameView();
game.fps = 60;
game.color(0, 0, 0);
var scene = quicktigame2d.createScene();
game.pushScene(scene);

// ------------------------------
// sprite
// ------------------------------
var gSprites = [];
function createSprite(x, y) {
  var sprite = quicktigame2d.createSprite({image:'graphics/flare.png'});
  sprite.x = x;
  sprite.y = y;
  scene.add(sprite);
  gSprites.push(sprite);

  //console.p({x: sprite.x, y: sprite.y});
  //Ti.API.info([1, 2, 3]);
}

// ------------------------------
// event
//
// All events from Ti.UI.View are delegated to the game view
// FYI: http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.View-object
// ------------------------------
game.addEventListener('onload', function(e) {
    game.start();
});

game.addEventListener('enterframe', function(e) {
  // FPS更新
  fpsCounter.update(fpsLabel);

  // Move Sprite
  var speed = 4;

  for (var i = 0; i < gSprites.length; i++) {
    var sprite = gSprites[i];
    
    sprite.x += speed;
    if (sprite.x > 640)
      sprite.x = 0;
    
    sprite.y += speed;
    if (sprite.y > 960)
      sprite.y = 0;
  }
});

game.addEventListener('touchstart', function(e) {
  var RATINA_RATE = 2.0;
  createSprite(e.x * RATINA_RATE, e.y * RATINA_RATE);
});

// ------------------------------
// Run
// ------------------------------
window.add(game);
window.add(fpsLabel);
window.open({fullscreen:true, navBarHidden:true});

