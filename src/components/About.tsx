export function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6 text-primary">About Monster Battle</h1>

      <p className="text-lg leading-relaxed text-muted-foreground">
        <strong>Monster Battle</strong> is a fun and interactive web app where you can create your own custom monsters
        and make them fight based on their attributes — <em>attack</em>, <em>defense</em>, <em>speed</em>, and <em>HP</em>.
        <br /><br />
        The battle logic is handled by a simple algorithm that simulates turn-based combat. The monster with the higher speed attacks first, and the combat continues until one of them runs out of HP.
        <br /><br />
        This app was built using <strong>React + Vite</strong> and styled with <strong>Tailwind CSS + ShadCN</strong>. It’s a great project for experimenting with component-based design, form handling, and game logic in the browser.
      </p>
    </section>
  )
}
