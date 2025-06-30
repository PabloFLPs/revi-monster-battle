import type { Monster } from "../types/Monster"

export interface MonsterForm {
  onSubmit: (data: Monster) => void
}
