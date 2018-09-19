const battleMaster = document.getElementById("message")
function messageMaster(fight) {
  let battleConclusion = document.createTextNode(fight.message)
  let container = document.createElement("p")
  let battleMessage = document.createElement("h3")
  battleMessage.appendChild(battleConclusion)
  container.appendChild(battleMessage)
  battleMaster.appendChild(container)
}
function creatures(stats) {
  if (!stats.name) {
    throw (new Error("No Name."))
  } else {
    this.name = stats.name
  }
  this.health = stats.health || 50
  this.maxHealth = this.health * 1.5
  this.chanceToCrit = stats.chanceToCrit || 0.1
  this.chanceToMiss = stats.chanceToMiss || 0.3
  this.baseDamage = stats.baseDamage || 10

  this.fight = function (creatures) {
    if (Math.random() < this.chanceToMiss) {
      const missMessage = {
      message: `${this.name} missed ${creatures.name}.`
      }
      messageMaster(missMessage)
    } else {
      const dmg = Math.floor(Math.random() < this.chanceToCrit ?
        this.baseDamage * 1.5 :
        this.baseDamage)
      creatures.health -= dmg
      const attackMessage = {
        message:  `${creatures.name} has been hit! It's now at ${creatures.health} health.`
      }
      messageMaster(attackMessage)
    }
    
  }
}

const marge = new creatures({
  name: 'marge',
  health: 175,
  chanceToMiss: 0.1,
  baseDamage: 20

})

const angryGardner = new creatures({
  name: 'angry gardner',

})

const burt = new creatures({
  name: 'burt',
})

function fight(hero, ...monsters) {
  if (monsters.length === 0) {
    monsters = [new creatures({
      name: "angry janitor"
    })]
  }

  monsters.forEach(monster => {
    while (hero.health > 0 && monster.health > 0) {
      hero.fight(monster)
      monster.fight(hero)
      monster.fight(hero)
    }

    hero.health = Math.random() > 0.9 ?
      hero.maxHealth :
      hero.health * 2
      const healthMessage = {
       message:  (`${hero.name} is at ${hero.health} health and ${monster.name} is ${monster.health} health.`)
      }
       messageMaster(healthMessage)
      const remaining = {
   message:  (`${hero.health > 0 ? hero.name : monster.name} lives!`)
      }
      messageMaster(remaining)
  })
}
fight(marge, burt, angryGardner)