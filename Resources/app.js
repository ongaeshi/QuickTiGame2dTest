var window = Ti.UI.createWindow({backgroundColor:'black'});

// Obtain game module
var quicktigame2d = require('com.googlecode.quicktigame2d');

// Create view for your game.
var game = quicktigame2d.createGameView();

// Create game scene
var scene = quicktigame2d.createScene();

// Create your sprite
var sprite = quicktigame2d.createSprite({image:'graphics/flare.png'});

// Add your sprite into scene
scene.add(sprite);

// Add your scene to game view
game.pushScene(scene);

// Onload event is called when the game is loaded.
game.addEventListener('onload', function(e) {
    // Start the game
    game.start();
});

game.addEventListener('enterframe', function(e) {
  // Game Loop
  var speed = 4;
  
  sprite.x += speed;
  if (sprite.x > 640)
    sprite.x = 0;
  
  sprite.y += speed;
  if (sprite.y > 960)
    sprite.y = 0;
});

// All events from Ti.UI.View are delegated to the game view
// 
// FYI: http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.View-object
//
game.addEventListener('touchstart', function(e) {
    // Touch Start Event
});

// Add your game view
window.add(game);

window.open({fullscreen:true, navBarHidden:true});

