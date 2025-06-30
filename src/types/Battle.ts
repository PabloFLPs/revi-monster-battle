import type { Monster } from "./Monster"

export interface Battle {
  firstMonster: Monster,
  secondMonster: Monster,
  winner: string,
  onReset: () => void
}
