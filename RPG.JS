 
const Player = prompt('Enter your name')
   alert(`welcome ${Player} are you ready to earn your ring? `)


function walk(w){
   w.addEventListener(onkeydown, w)
   w.preventDefault(w)
   console.log(" Keep up your dribble")
}
// let i= invento

function Enemies(enemyName) {
   this.enemyName = enemyName;
}
let enemy = []
   let enemy1 = new Enemies("Ghoul")
   let enemy2 = new Enemies("Gashadokuro")
   let enemy3 = new Enemies("Minotaur")
   let enemy4 = new Enemies("Draugur")
enemy.push(enemy1, enemy2, enemy3, enemy4)
 

 function dribbleBall(){ 
   let randomEnemy = enemy[Math.floor(Math.random() * enemy.length)]
   let random = Math.random()
   console.log(random, "random")
      while (random > 66) { 
         alert("enemy is present")
      } console.log(" You have to score more points to defeat the goat")
      if (Player > 20){
         console.log("Keep going its almost over")
      }
      else if (randomEnemy >= 20){
         console.log(randomEnemy, "is catching up, dont slow down!!!")
      }
      else if (randomEnemy< Player){
         console.log( `Congrats ${Player} you have scored enough to move with your career!`)
      }
      

      //create an else statement and call the enemy function in here
      //for example: else{enemyFunction()}
 }

 //create enemy function and you can use something like this randomEnemy 
 //variable in your logic to randomize your enemies
//  let randomEnemy = enemy[Math.floor(Math.random() * enemy.length)]
 console.log(dribbleBall())
