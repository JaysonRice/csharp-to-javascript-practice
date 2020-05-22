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
  enemies.push(enemy1)
  console.table(enemies)
}
main();