import Background from "./components/background"
import weathers from "./data/weathers.json"

export default function Home() {
  // console.log("Weathers", weathers)
  
  //API call to get weather data

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between">
      <Background />
      {/* search bar */}

      {/* carousel */}
        {/* cards to show weather 
          1.today
          2. 3 days before 
          3. 3 days ahead */}
    </main>
  )
}
