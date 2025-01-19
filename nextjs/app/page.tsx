import { PlanetCard } from "@/components/planet-card"

// Это временные данные, в реальном приложении они будут загружаться из базы данных
const planets = [
  { id: 1, name: "Земля", resources: { metal: 1000, crystal: 500, deuterium: 250 } },
  { id: 2, name: "Марс", resources: { metal: 800, crystal: 600, deuterium: 300 } },
  { id: 3, name: "Венера", resources: { metal: 1200, crystal: 400, deuterium: 200 } },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Мои планеты</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {planets.map((planet) => (
          <PlanetCard key={planet.id} name={planet.name} resources={planet.resources} />
        ))}
      </div>
    </div>
  )
}

