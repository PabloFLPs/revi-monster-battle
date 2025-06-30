import type { Monster } from "../types/Monster"
import type { Battle } from "../types/Battle"

import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"

import { cn } from "../lib/utils"

export function BattleResult({
  firstMonster = {
    id: Math.random().toString(36).substring(2, 15),
    name: "Bulbasaur",
    image_url: "https://art.pixilart.com/8e78344bc7b8.png", // Credits to @Equasians (https://www.pixilart.com/equasians) from where I got the default monster images
    attack: 8,
    defense: 12,
    speed: 10,
    hp: 100
  },
  secondMonster = {
    id: Math.random().toString(36).substring(2, 15),
    name: "Pikachu",
    image_url: "https://art.pixilart.com/f4b333444a36.png", // Credits to @Equasians (https://www.pixilart.com/equasians) from where I got the default monster images
    attack: 12,
    defense: 8,
    speed: 12,
    hp: 90
  },
  winner,
  onReset = () => {}
}: Battle) {
  const renderMonsterCard = (monster: Monster) => {
    const isWinner = winner != "" && (monster.id === winner)

    return (
      <Card
        className={cn(
          "flex flex-col items-center gap-2 p-4 w-full transition-all border-1 shadow-md hover:scale-102 hover:shadow-lg",
          isWinner ? "border-green-400" : "dark:shadow-neutral-900"
        )}
      >
        <h3 className="text-xl font-semibold pb-3">Monster Details</h3>
        <div className="text-sm text-muted-foreground mb-2">
          Monster ID: {monster.id}
        </div>
        <img
          src={monster.image_url}
          alt={monster.name}
          className="h-32 w-32 object-cover rounded-md border"
        />
        <div className="text-xl font-bold">{monster.name}</div>
        <div className="text-sm text-muted-foreground">Attack: {monster.attack}</div>
        <div className="text-sm text-muted-foreground">Defense: {monster.defense}</div>
        <div className="text-sm text-muted-foreground">Speed: {monster.speed}</div>
        <div className="text-sm text-muted-foreground">HP: {monster.hp}</div>

        {isWinner && (
          <div className="mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
            Winner!
          </div>
        )}

        {!isWinner && monster.id && ( // Check if monster.id exists to avoid showing defeat for a "null" battle
          <div className="mt-2 px-2 py-1 bg-red-100 text-red-700 text-xs rounded">
            Defeat...
          </div>
        )}
      </Card>
    )
  }

  return (
    <div className="flex flex-col items-center space-y-6 py-16">
      <h2 className="text-4xl font-bold text-center">Battle Result</h2>

      <div className="flex gap-4 w-full max-w-4xl">
        {renderMonsterCard(firstMonster)}
        {renderMonsterCard(secondMonster)}
      </div>

      {winner && (
        <p className="text-center font-semibold text-lg">
          {winner === firstMonster.id ? firstMonster.name : secondMonster.name} ({winner}) is the winner!
        </p>
      )}

      <Button variant="outline" onClick={onReset}>
        Set Another Battle
      </Button>
    </div>
  )
}
