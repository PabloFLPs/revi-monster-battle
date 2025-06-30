import { Link } from "react-router-dom"

import { ModeToggle } from "./theme/mode-toggle"
import { Button } from "../components/ui/button"

export function Navbar() {
  return (
    <header className="w-full border-b bg-white dark:bg-background dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-primary dark:text-white"
        >
          Monster Battle
        </Link>

        <nav className="space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/battle">Battle</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/monsters">Monsters</Link>
          </Button>

          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
