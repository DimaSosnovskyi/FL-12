let properties1 = {
    name: 'Maximus',
    damage: 25,
    hp: 100,
    strength: 30,
    agility: 25,
    health: 100
}
let properties2 = {
    name: 'Commodus',
    damage: 20,
    hp: 90,
    strength: 25,
    agility: 20,
    health: 90
}

let Fighter = function (obj) {
    let{name,damage,strength,agility,health} = obj;
    let wins = 0;
    let loses = 0;
    const getName = function () {
        return name;
    }
    const getDamage = function () {
        return damage;
    }
    const getStraigth = function () {
        return strength;
    }
    const getAgility = function () {
        return agility;
    }
    const getHealth = function () {
        return health;
    }
    const attack = function (anotherFighter) {
        const probability = 100 - (anotherFighter.strength + anotherFighter.agility);
        const isAtackSuccess = Math.floor(Math.random() * 100 <= probability);
        if (isAtackSuccess) {
            anotherFighter.dealDamage(damage);
            console.log(name + ' makes ' + damage + ' to ' + anotherFighter.getName());
        } else {
            console.log(anotherFighter.getName() + ' attack missed');
        }
    }
    const dealDamage = function (hp) {
        health = Math.max(health - hp,0);
    }
    const logCombatHistory = function () {
        return console.log('Name ' + name + ' Wins ' + wins + ' Loses ' + loses);
    }
    const heal = function (hp) {
        health = Math.min(health + hp,obj.health);
    }
    const addWin = function () {
        wins++;
    }
    const addLose = function () {
        loses++;
    }
    return {
        getName,getDamage,getStraigth,
        getAgility,getHealth,dealDamage,
        logCombatHistory,attack,heal,
        addWin,addLose
    };

}
let fighter1 = new Fighter(properties1);
let fighter2 = new Fighter(properties2);

const battle = function (fighter1,fighter2) {
    let attacker = fighter1;
    let defender = fighter2;
    const condition = true;
    while(condition) {
        if (defender.getHealth() < 0) {
            console.log(defender.getName() + ' is dead and can\'t fight');
            return;
        } else {
            attacker.attack(defender);
            if(defender.getHealth() === 0) {
                defender.addLose();
                attacker.addWin();
                console.log(attacker.getName() + ' has won!' );
                return;
            }  
        }
        attacker = fighter2;
        defender = fighter1;
    }
}
battle(fighter1,fighter2);
battle(fighter1,fighter2);
fighter1.heal(100);
fighter2.heal(100);
battle(fighter1,fighter2);
fighter1.logCombatHistory();
fighter2.logCombatHistory();
