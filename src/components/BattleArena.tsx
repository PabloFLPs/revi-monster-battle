import type { Monster } from "../types/Monster"
import type { Battle } from "../types/Battle"

import { MonsterForm } from "../components/MonsterForm"
import { BattleResult } from "../components/BattleResult"

import { battleAlgorithm } from "../utils/battle-algorithm"

import { useState } from "react"

export function BattleArena() {
  const [firstMonster, setFirstMonster] = useState<Monster | null>(null)
  const [secondMonster, setSecondMonster] = useState<Monster | null>(null)
  const [battle, setBattle] = useState<Battle | null>(null)

  const handleFirstSubmit = (monster: Monster) => {
    monster.id = Math.random().toString(36).substring(2, 15)
    monster.name = monster.name || "Bulbasaur"
    monster.image_url = monster.image_url || "https://art.pixilart.com/8e78344bc7b8.png"
    monster.attack = monster.attack || 8
    monster.defense = monster.defense || 12
    monster.speed = monster.speed || 10
    monster.hp = monster.hp || 100
    setFirstMonster(monster)
  }

  const handleSecondSubmit = (monster: Monster) => {
    monster.id = Math.random().toString(36).substring(2, 15)
    monster.name = monster.name || "Pikachu"
    monster.image_url = monster.image_url || "https://art.pixilart.com/f4b333444a36.png"
    monster.attack = monster.attack || 12
    monster.defense = monster.defense || 8
    monster.speed = monster.speed || 12
    monster.hp = monster.hp || 90
    setSecondMonster(monster)
  }

  const handleReset = () => {
    setFirstMonster(null)
    setSecondMonster(null)
    setBattle(null)
  }

  if (firstMonster && secondMonster && !battle) {
    const winner = battleAlgorithm(firstMonster, secondMonster) // This will return the ID of the winning monster

    setBattle({
      firstMonster,
      secondMonster,
      winner,
      onReset: handleReset
    })
  }

  if (battle) {
    return <BattleResult {...battle} />
  }

  return (
    <div className="flex flex-col items-center space-y-8 py-16">
      <h1 className="text-4xl font-bold">Monster Battle Arena</h1>

      {!firstMonster ? (
        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold text-center mb-2 ">Registrate a Monster</h2>
          <MonsterForm onSubmit={handleFirstSubmit} />
        </div>
      ) : !secondMonster ? (
        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold text-center mb-2">Registrate another Monster</h2>
          <MonsterForm onSubmit={handleSecondSubmit} />
        </div>
      ) : null}
    </div>
  )
}
