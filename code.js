var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["10602251-be29-4017-9909-281598bb971d","3b9497a9-28fa-4a54-be23-981e3bae5e76","f4184452-fcdf-471f-b607-cfb5518967ba","d455d9e9-2c12-422b-9439-95757b8e94fb","1a849918-2af5-4018-9fbd-6e8762d888ad","a53b66f0-694b-4bf5-ac65-529dca7a248e","90f37115-30ee-4153-941d-2405afc50301","65fb25ae-8498-49a6-89cc-763a2499534d","895f1569-f71b-49d4-8a67-33c5d4551cbd"],"propsByKey":{"10602251-be29-4017-9909-281598bb971d":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"wwWErxkiVh_UaX1UY4Y8S.xQ4kilmqLi","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/10602251-be29-4017-9909-281598bb971d.png"},"3b9497a9-28fa-4a54-be23-981e3bae5e76":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":30,"y":33},"frameCount":1,"looping":true,"frameDelay":12,"version":"5fmcNZTx7wjXrynoyexZLm0Ll7ZD56j0","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":33},"rootRelativePath":"assets/3b9497a9-28fa-4a54-be23-981e3bae5e76.png"},"f4184452-fcdf-471f-b607-cfb5518967ba":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"j_WGhOJNfZ2oFHOSbEypCSu5stansQw1","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/f4184452-fcdf-471f-b607-cfb5518967ba.png"},"d455d9e9-2c12-422b-9439-95757b8e94fb":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"TUw9vtYmTjlFegjeckAWa.sRUS64c_kM","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/d455d9e9-2c12-422b-9439-95757b8e94fb.png"},"1a849918-2af5-4018-9fbd-6e8762d888ad":{"name":"space","sourceUrl":null,"frameSize":{"x":600,"y":721},"frameCount":1,"looping":true,"frameDelay":12,"version":"YE91IHOL9tb5xkdq9Qs3sIi8auGXdt35","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":721},"rootRelativePath":"assets/1a849918-2af5-4018-9fbd-6e8762d888ad.png"},"a53b66f0-694b-4bf5-ac65-529dca7a248e":{"name":"ufo_1","sourceUrl":null,"frameSize":{"x":87,"y":77},"frameCount":1,"looping":true,"frameDelay":12,"version":"2JBuEyeJLyH7EMlBzzUeiXv2PFnkUbaD","loadedFromSource":true,"saved":true,"sourceSize":{"x":87,"y":77},"rootRelativePath":"assets/a53b66f0-694b-4bf5-ac65-529dca7a248e.png"},"90f37115-30ee-4153-941d-2405afc50301":{"name":"blast","sourceUrl":null,"frameSize":{"x":57,"y":53},"frameCount":1,"looping":true,"frameDelay":12,"version":"AGDxaUnEW7dH.lOBWA3gQkNCTMNGDd7q","loadedFromSource":true,"saved":true,"sourceSize":{"x":57,"y":53},"rootRelativePath":"assets/90f37115-30ee-4153-941d-2405afc50301.png"},"65fb25ae-8498-49a6-89cc-763a2499534d":{"name":"ufo_2","sourceUrl":null,"frameSize":{"x":62,"y":71},"frameCount":1,"looping":true,"frameDelay":12,"version":"byy.Hs.0eqcH4S4S7VitPa2VKTea6KVw","loadedFromSource":true,"saved":true,"sourceSize":{"x":62,"y":71},"rootRelativePath":"assets/65fb25ae-8498-49a6-89cc-763a2499534d.png"},"895f1569-f71b-49d4-8a67-33c5d4551cbd":{"name":"ufo_3","sourceUrl":null,"frameSize":{"x":60,"y":57},"frameCount":1,"looping":true,"frameDelay":12,"version":"gGar_ZwaOWBShpOXTPTyudiaJ.aFm98e","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":57},"rootRelativePath":"assets/895f1569-f71b-49d4-8a67-33c5d4551cbd.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var space = createSprite(0, 0 ,400, 400);
var gameScore = Math.round(0);
space.setAnimation("space");
space.scale = 2.5;
space.y = space.height/2;
var bullet1Group = createGroup();
var enime1 = createGroup();
var ufoGroup = createGroup();
function enime(){
  if(World.frameCount%100 === 0){
var enimes1 = createSprite(200, -10,20,20);
enimes1.x = randomNumber(50,350);
var rand = randomNumber(1,3);
enimes1.setAnimation("animation_" + rand);
enime1.add(enimes1);
enime1.setVelocityYEach(5);
  }
  if(enime1.isTouching(bottomEdge)){
    gameScore = gameScore-0.1;
  }
enime1.setLifetimeEach(100);
  if(bullet1Group.isTouching(enime1)){
    enime1.destroyEach();
    gameScore = gameScore+10;
  }
  if(enime1.y>400){
    enime1.destroyEach();
  }
}  
var player = createSprite(190, 375,20,20);
player.setAnimation("animation_4");
player.scale = 1.3;
gameState = "play";
space.velocityY = 2.5;
function draw(){
  createEdgeSprites();
enime();
  if(enime1.y <= 0){
  enime1.x = randomNumber(50,350);
  }
   if (space.y > 500) {
    space.y = space.height/2;
  }
  player.x = World.mouseX;
  createEdgeSprites();
  player.collide(bottomEdge);
  ufo();
  bullet();
  drawSprites();
  textSize(28);
  textFont("Georgia");
  textAlign("BOLD");
  Math.round(gameScore);
  text("Your Score",200,40);
  text(gameScore,343,40);
}  
function bullet(){
  if(keyDown("space")&&World.frameCount%8 === 0){
  playSound("assets/Gun-357-Magnum.mp3", false);
  var bullet1 = createSprite(210,380,5,10); 
  bullet1Group.add(bullet1);
  bullet1.shapeColor = "red";
  bullet1.x = player.x;
  bullet1Group.setVelocityYEach(-6);
  }
  bullet1Group.setLifetimeEach(40);
}

function ufo(){
  if(World.frameCount%200 === 0){
    var ufo1 = createSprite(10,-10,10,10);
    ufoGroup.add(ufo1);
    ufo1.x = randomNumber(50,360);
    ufo1.velocityY = 5;
    var rand  = randomNumber(1,3);
    ufo1.setAnimation("ufo_" + rand);
  }
  if(bullet1Group.isTouching(ufoGroup)){
    gameScore = gameScore+20;
    playSound("assets/Torpedo-Explosion.mp3", false);
    ufoGroup.destroyEach();
  }
  ufoGroup.setLifetimeEach(100);
  if(ufoGroup.isTouching(bottomEdge)){
    gameScore = gameScore-0.1;
  }
}





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
