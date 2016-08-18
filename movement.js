window.onload = function () {
  //load the key event
    window.addEventListener("keyup", moveSelection);

}

var getEnemy = document.getElementsByClassName("layoutEnemy");
var counterKills = document.getElementById("counter");
var amountKilled = 0;
var character = document.getElementById("character");
var sword = document.getElementById("sword");
sword.classList.toggle('rotated');
character.style.position = "relative";
character.style.zIndex = 3;

function moveLeft () {
  character.style.left = character.style.left || "0px";
  character.style.left = parseInt(character.style.left) - 10 + "px";
  sword.style.left = parseInt(character.style.left) + 190 + "px";
  PDisplayCharacterName.style.left = parseInt(PDisplayCharacterName.style.left) - 10 + "px";
  console.log(character.style.left + " this is style left");
}

function moveRight () {
  character.style.left = character.style.left || "0px";
  character.style.left = parseInt(character.style.left) + 10 + "px";
  sword.style.left = parseInt(character.style.left) + 190 + "px";
  PDisplayCharacterName.style.left = parseInt(PDisplayCharacterName.style.left) + 10 + "px";
  console.log(character.style.left + " this is style left");
}

function moveUp () {
  var swordStyle = window.getComputedStyle(sword, null).getPropertyValue("bottom");
  console.log(swordStyle);
  character.style.bottom = character.style.bottom || "0px";
  character.style.bottom = parseInt(character.style.bottom) + 10 + "px";
  sword.style.bottom = parseInt(swordStyle) + 10 + "px";
  PDisplayCharacterName.style.top = parseInt(PDisplayCharacterName.style.top) - 10 + "px";
}

function moveSelection (evt) {
  switch(evt.keyCode) {
    case 37:
    if (character.style.left === "-10px") {
      alert("off screen my friend");
    } else {
      moveLeft();
    }
    break;

    case 39:
    if (character.style.left === "970px" || character.style.left == "980px") {
      return alert("off the screen my friend");
    } else {
      // had to apply knock back to right arrow key because it wasnt working when the character went to enemy
      for (var i = 0; i < getEnemy.length; i++) {
        if (parseInt(getEnemy[i].style.left) <= parseInt(window.getComputedStyle(sword).getPropertyValue("left"))) {
          alert(" AYyyyyyyy its me, you touched");
          userCharacter.health = userCharacter.health - 10;
          PDisplayCharacterName.innerHTML = userCharacter.name + " hp: " + userCharacter.health;
          console.log(userCharacter.health);
          character.style.left = parseInt(character.style.left) - 20 + "px";
          sword.style.left = parseInt(sword.style.left) - 20 +"px";
          PDisplayCharacterName.style.left = parseInt(PDisplayCharacterName.style.left) - 20 + "px";
          if (userCharacter.health === 0) {
            document.write(" you lost press refresh to load game again :)");
            alert("you died");
          }
        }
        }
      moveRight();
    }
    break;
      // make it the character jump up couldn't make it to start falling when its position is above zero
    case 38:
    console.log(character.style.bottom);
    if (character.style.bottom === "") {
      moveUp();
      setInterval(function () {
        if (parseInt(character.style.bottom) ===  0) {
          return;
        } else /*if(parseInt(character.style.bottom) > 0)*/{
          character.style.bottom = parseInt(character.style.bottom) - 1 + "px";
          sword.style.bottom = parseInt(sword.style.bottom) - 1 + "px";
          PDisplayCharacterName.style.top = parseInt(PDisplayCharacterName.style.top) + 1 + "px";
        }
      }, 100)
    } else {
      if (parseInt(character.style.bottom) > 131) {
        console.log(character.style.bottom + " character style bottom MAan")
        character.style.bottom = "129px";
        if (parseInt(window.getComputedStyle(sword, null).getPropertyValue("bottom")) > 470) {
          sword.style.bottom = parseInt(sword.style.bottom) - 10 + "px"
        }
      } else {
        moveUp();

      }
    }

    break;
//getEnemy[i].style.left === parseInt(window.getComputedStyle(sword).getPropertyValue("left")) + parseInt(window.getComputedStyle(sword).getPropertyValue("width")) + "px"
    case 32:
    sword.classList.toggle("rotated");

    var getPtags = document.getElementsByClassName("display");

    for (var i = 0; i < getEnemy.length; i++) {
      // at the edge of the sword
      var enemyOriginalLeft = window.getComputedStyle(getEnemy[i]).getPropertyValue("left");
      console.log(getEnemy[i] + " this is the enemy that is in the loop");
      if (parseInt(enemyOriginalLeft) <= parseInt(window.getComputedStyle(sword).getPropertyValue("left")) + parseInt(window.getComputedStyle(sword).getPropertyValue("width")) && parseInt(enemyOriginalLeft) > parseInt(window.getComputedStyle(sword).getPropertyValue("left"))) {
       alert(" yo it worked when the enemy was at: in the else iF this is enemy left: " + getEnemy[i].style.left + " this is the placement of the character at: " +  window.getComputedStyle(sword).getPropertyValue("left"));

       getPtags[i].style.left = parseInt(getPtags[i].style.left) + 20 + "px";
       enemyOriginalLeft = parseInt(enemyOriginalLeft) + 20 + "px";
       enemyRandomSpawn[i].health = enemyRandomSpawn[i].health - 10;
      getPtags[i].innerHTML = enemyRandomSpawn[i].name + " hp: " + enemyRandomSpawn[i].health;
     }
     if (enemyRandomSpawn[i].health === 0) {
       var getEnemyDisplay = document.getElementsByClassName("layoutEnemy");
       getEnemyDisplay[i].parentNode.removeChild(getEnemyDisplay[i]);
       alert(enemyRandomSpawn.splice(i, 1) + " this is on the one that is being removed");
      enemyRandomSpawn.splice(i, 1);

      getPtags[i].parentNode.removeChild(getPtags[i]);
      amountKilled = amountKilled + 1;
      counterKills.innerHTML = "counter of how many you killed: " + amountKilled;
      console.log(amountKilled + " this is how many you have killed")
      console.log(enemyRandomSpawn);
     }
    }
  }
};
