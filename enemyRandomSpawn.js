var amountSpawn = 1;
console.log(character);
var sword = document.getElementById("sword");
var bridge = document.getElementById("bridge");
var amoutKilled = 0;
var waitingTime = 1000;
var backgroundDisplayDiv = document.getElementById("backgroundDisplayDiv");
var enemyRandomSpawn = [];

function enemySpawn () {
  for (var i = 0; i < amountSpawn; i++) {
    var createImg = document.createElement("img");
    var createP = document.createElement("p");
    createImg.className = "layoutEnemy";
    createP.className = "display";
    enemyRandomSpawn.push({
        name: "evil enemy",
        moveSpeed: 1,
        spawnRate: 1000,
        health: 20,
        src: "enemy.png"
    });
    createImg.src = enemyRandomSpawn[i].src;


    backgroundDisplayDiv.insertBefore(createImg, bridge);
    createP.style.bottom = window.getComputedStyle(createP).getPropertyValue("bottom") + window.getComputedStyle(createImg).getPropertyValue("bottom");
    createP.style.left = window.getComputedStyle(createP).getPropertyValue("left") + window.getComputedStyle(createImg).getPropertyValue("left");
    backgroundDisplayDiv.insertBefore(createP, bridge);
    createP.innerHTML = enemyRandomSpawn[i].name + " hp: " + enemyRandomSpawn[i].health;
    console.log(createP.innerHTML);

  };
};

function enemyMove () {
  var getEnemy = document.getElementsByClassName("layoutEnemy");
  console.log(getEnemy.length);
    if (getEnemy.length >= 1) {
          for (var i = 0; i < getEnemy.length; i++) {
            var getPTagsMove = document.getElementsByClassName("display");
             var enemyMoveStyle = window.getComputedStyle(getEnemy[i]).getPropertyValue("left");
             getPTagsMove[i].style.left = parseInt(enemyMoveStyle) - 10 + "px";
            getEnemy[i].style.left = parseInt(enemyMoveStyle) - 10 + "px";
            console.log(getEnemy[i].style.left);
            console.log("enemy movments are at: " + getEnemy[i].style.left + " the sword is at: " + window.getComputedStyle(sword).getPropertyValue("left"));
            console.log(parseInt(window.getComputedStyle(sword).getPropertyValue("left")) + " this is the sword value length of left");
            if (parseInt(getEnemy[i].style.left) <= parseInt(window.getComputedStyle(sword).getPropertyValue("left"))) {
              userCharacter.health = userCharacter.health - 10;
              PDisplayCharacterName.innerHTML = userCharacter.name + " hp: " + userCharacter.health;
              console.log(userCharacter.health);
              character.style.left = parseInt(character.style.left) - 20 + "px";
              sword.style.left = parseInt(sword.style.left) - 20 +"px";
              PDisplayCharacterName.style.left = parseInt(PDisplayCharacterName.style.left) - 20 + "px";
              if (userCharacter.health === 0) {
                document.write(" you lost press refresh to load game again :)");

              }
            }

          }
        }
};

var startMoving = function () {
  setInterval(function () {

    if (backgroundDisplayDiv.children.length === 7) {
      console.log(backgroundDisplayDiv.children.length + " in If")
      setInterval(enemyMove(), 1000)
    } else  {
      enemySpawn();
      console.log(enemyRandomSpawn);


    }
  }, 1000);


}

startMoving();
