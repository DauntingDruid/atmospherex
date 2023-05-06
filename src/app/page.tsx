import weathers from "./data/weathers.json"

export default function Home() {
  console.log("Weathers", weathers)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to AtmosphereX
      </h1>
    </main>
  )
}
