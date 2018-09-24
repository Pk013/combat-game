function refreshPage() {
  window.location.reload();
}

function Creature(options) {
  if (!options.name) {
      throw (new Error("Need a Name!"))
  } else {
      this.name = options.name
  }
  this.health = options.health || 50
  this.maxHealth = this.health * 2
  this.chanceToCrit = options.chanceToCrit || 0.1
  this.chanceToMiss = options.chanceToMiss || 0.3
  this.baseDamage = options.baseDamage || 10

  this.fight = function (creature) {
      let message;
      if (Math.random() < this.chanceToMiss) {
          message = `${this.name} missed ${creature.name} with its attack!`
      } else {
          const dmg = Math.random() < this.chanceToCrit ?
              this.baseDamage * 2 :
              this.baseDamage
          creature.health -= dmg
          message = `${creature.name} has been hit by ${this.name}! ${creature.name} is now at ${creature.health} health.`
      }
      let newDiv = document.createElement("div")
      let battleMessage = document.createTextNode(message)
      newDiv.appendChild(battleMessage)
      document.body.appendChild(newDiv)

  }
}

function battle(hero, ...monsters) {
  if (monsters.length === 0) {
      monsters = [new Creature({
          name: "The Invisible Man"
      })]
  }

  monsters.forEach(monster => {
      if (hero.health <= 0 || monster.health <= 0) {
          let newDiv = document.createElement("div");
          let victory = document.createTextNode(hero.health > 0 ?
              hero.name + ' is the victor. ' :
              monster.name + ` has defeated ${hero.name}. `)
          newDiv.appendChild(victory);
          document.body.appendChild(newDiv);
      } else if (hero.health > 0 && monster.health > 0) {
          hero.fight(monster)
          monster.fight(hero)
          let newDiv = document.createElement("div")
          let battleMessage2 = document.createTextNode(hero.name + ' is at ' + hero.health + ' health and ' + monster.name + ' is at ' + monster.health + ' health. ')
          newDiv.appendChild(battleMessage2)
          document.body.appendChild(newDiv)
      }
  })

}


const Gladiator = new Hero({
  name: 'The Gladiator',
  health: 160,
  baseDamage: 50,
})

const Legionare = new Monster({
  name: 'Legionare',
  chanceToCrit: 0.9,
  health: 200,
})

const Spartan = new Hero({
  name: 'Spartan',
  maxHealth: 250,
  chanceToCrit: .9
})

const ArcaneUser = new Hero({
  name: 'ArcaneUser',
  health: 175,
  baseDamage: 100,
  chanceToMiss: .6
})

const Orc = new Monster({
  name: "Orc",
  health: 150,
  baseDamage: 40
})

const Ogre = new Monster({
  name: 'Ogre',
  health: 150,
})


const Goblin = new Monster({
  name: 'The Goblin',
})


const Giant = new Monster({
  name: 'Giant',
  health: 500,
  baseDamage: 80
})

const Dragon = new Monster({
  name: 'The Dragon',
  health: 1000,
  baseDamage: 100,

})

const creatureReferences = {
  'Gladiator': Gladiator,
  'Spartan': Spartan,
  'ArcaneUser': ArcaneUser,
  'Spartan': Spartan,
  'Ogre': Ogre,
  'Goblin': Goblin,
  'Giant': Giant,
  'Dragon': Dragon,
  'Orc': Orc,
}

let fight = document.getElementById("Fight").addEventListener("click", function () {
  const thing1 = document.getElementById("First").value;
  const thing2 = document.getElementById("Second").value;
  const Object1 = creatureReferences[thing1];
  const Object2 = creatureReferences[thing2];
  battle(Object1, Object2);
});

function Hero(options) {
  Creature.call(this, options)
  this.health = options.health || 100
}

Hero.prototype.constructor = Hero
Hero.prototype = "Power Attack"
Hero.prototype = "Healing Potion"

function Monster(options) {
  Creature.call(this, options)

}

Monster.prototype.constructor = Monster
Monster.prototype = "Power Attack"
Monster.prototype = "Healing Potion"

function run() {
  document.getElementById("First").value = document.getElementById("Ultra").value;
}

function running() {
  document.getElementById("Second").value = document.getElementById("Mega").value;
}