export interface Monster {
  id: string, // Opted to create an unique ID for each monster to avoid conflicts like two monsters having the same name
  name: string,
  attack: number,
  defense: number,
  speed: number,
  hp: number,
  image_url: string
}
