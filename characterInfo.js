
var userCharacter = {
  health: 100,
  name: "steve",
  moveSpeed: 1
}
// create tthe name on top of the character and hp
var PDisplayCharacterName = document.createElement("p");
PDisplayCharacterName.innerHTML = userCharacter.name + " hp: " + userCharacter.health;
backgroundDisplayDiv.insertBefore(PDisplayCharacterName, character);
PDisplayCharacterName.style.position = "absolute";
PDisplayCharacterName.style.top = "150px"
PDisplayCharacterName.style.left = "119px"
console.log(PDisplayCharacterName)
