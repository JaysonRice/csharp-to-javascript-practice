const CreateEnemy = (FirstName, LastName, IsHated, Offenses) => {
  return {
    FirstName,
    LastName,
    IsHated,
    Offenses,
  }
}

function main() {
  // Put your code here
  console.log("My Enemies List!")
  console.log("----------------")



  let enemies = []
  let enemy1 = CreateEnemy("Joshua", "Flowers", true, "Being a jerk to me in elementary school")
  let enemy2 = CreateEnemy("Darth", "Vader", false, "Cut off Luke's hand")
  let enemy3 = CreateEnemy("Betty", "Rudelady", true, "Phone calls in the theater")
  let enemy4 = CreateEnemy("Leon", "Peck", false, "Keeps giving me a hotplate")
  enemies.push(enemy1, enemy2, enemy3, enemy4)

  enemies.forEach(enemy => {
    if (enemy.IsHated === true) {
      console.log(`${enemy.FirstName} ${enemy.LastName} (Really, really dislike!)`)
    } else {
      console.log(`${enemy.FirstName} ${enemy.LastName}`)
    }
  });

}
main();