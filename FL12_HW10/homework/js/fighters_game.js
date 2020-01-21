class Fighter {
    constructor(name, damage, strength, agility, hp,) {
        Object.assign(this, { name, damage, strength, agility, hp })
        this.wins = 0;
        this.losses = 0;
        this.totalhp = this.hp;
    }
    get getName() {
        return this.name;
    }
    get getDamage() {
        return this.damage;
    }
    get getStrength() {
        return this.strength;
    }
    get getAgility() {
        return this.agility;
    }
    get getHP() {
        return this.hp;
    }
    addWin() {
        return this.wins++;
    }
    addLoss() {
        return this.losses++;
    }
    logCombatHistory() {
        return console.log(`Name: ${this.name} Wins: ${this.wins} Losses: ${this.losses}`);
    }
    dealDamage(damage) {
        if (this.hp < damage) {
            this.hp = 0;
            return this.hp;
        } else {
            this.hp -= damage;
            return this.hp;
        }
    }
    Heal(heal) {
        if (heal + this.hp < this.totalhp) {
            this.hp += heal;
            return this.hp;
        } else {
            this.hp = this.totalhp;
            return this.hp;
        }
    }
    attack(defender) {
        let probability = 100 - (defender.getDamage + defender.getAgility);
        let difference = Math.floor(Math.random() * 100);
        if (difference < probability) {
            defender.hp -= this.damage;
            console.log(`${this.name} makes ${this.damage} damage to ${defender.name}`);
        } else {
            console.log(`${this.name} attack missed`);
        }
    }
}
function battle(fighter_1, fighter_2) {
    if (fighter_1.getHP <= 0) {
        return console.log(`${fighter_1.getName} is dead and can't fight`);
    } else if (fighter_2.getHP <= 0) {
        return console.log(`${fighter_2.getName} is dead and can't fight`);
    } else {
        let fight = true;
        while (fight) {
            fighter_1.attack(fighter_2);
            fighter_2.attack(fighter_1);
            if (fighter_2.getHP <= 0) {
                console.log(`${fighter_1.getName} has won!`);
                fighter_1.addWin();
                fighter_2.addLoss();
                fight = false;
            } else if (fighter_1.getHP <= 0) {
                console.log(`${fighter_2.getName} has won!`);
                fighter_2.addWin();
                fighter_1.addLoss();
                fight = false;
            }
        }
    }
}
const fighter1 = new Fighter('Maximus', 20, 20, 15, 100);
const fighter2 = new Fighter('Commodus', 25, 25, 20, 90);
const fighter3 = new Fighter('Attila', 25, 25, 25, 70);



