import { ThemeProvider } from "./components/theme/theme-provider"

import { Navbar } from "./components/NavBar"
import { Footer } from "./components/Footer"
import { About } from "./components/About"
import { BattleArena } from "./components/BattleArena"
import { MonstersList } from "./components/MonstersList"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { BattleResult } from "./components/BattleResult"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>

        <div className="p-2 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<BattleArena />} />
              <Route path="/about" element={<About />} />
              <Route path="/battle" element={<BattleResult {...{
                firstMonster: {
                  id: "",
                  name: "",
                  image_url: "https://i.imgur.com/jNNT4LE.png", // Placeholder image from imgur.com
                  attack: 0,
                  defense: 0,
                  speed: 0,
                  hp: 0
                },
                secondMonster: {
                  id: "",
                  name: "",
                  image_url: "https://i.imgur.com/jNNT4LE.png", // Placeholder image from imgur.com
                  attack: 0,
                  defense: 0,
                  speed: 0,
                  hp: 0
                },
                winner: "",
                onReset: () => {}
              }}/>} />
              <Route path="/monsters" element={<MonstersList />} />
            </Routes>
          </main>

          <Footer />
        </div>

      </Router>
    </ThemeProvider>
  )
}

export default App
