import type { Monster } from "../types/Monster"

export function battleAlgorithm(firstMonster: Monster, secondMonster: Monster): string {
  // Using spread operator to create copies of the monsters to avoid mutating the original objects:
  const firstAttackingMonster = {...firstMonster.speed >= secondMonster.speed ? firstMonster : secondMonster}
  const secondAttackingMonster = {...firstAttackingMonster === firstMonster ? secondMonster : firstMonster}

  while (firstAttackingMonster.hp > 0 || secondAttackingMonster.hp > 0) {
    // First Attacking Monster attacks Second Attacking Monster
    let damageToSecondAttackingMonster = null

    if (firstAttackingMonster.attack <= secondAttackingMonster.defense) damageToSecondAttackingMonster = 1
    else damageToSecondAttackingMonster = firstAttackingMonster.attack - secondAttackingMonster.defense

    secondAttackingMonster.hp -= damageToSecondAttackingMonster

    // Check if Second Attacking Monster is defeated
    if (secondAttackingMonster.hp <= 0) return firstAttackingMonster.id

    // Second Attacking Monster attacks First Attacking Monster
    let damageToFirstAttackingMonster = null
    if (secondAttackingMonster.attack <= firstAttackingMonster.defense) damageToFirstAttackingMonster = 1
    else damageToFirstAttackingMonster = secondAttackingMonster.attack - firstAttackingMonster.defense

    firstAttackingMonster.hp -= damageToFirstAttackingMonster

    // Check if First Attacking Monster is defeated
    if (firstAttackingMonster.hp <= 0) return secondAttackingMonster.id
  }

  return "null" // Draw. Should never reach here.
}
