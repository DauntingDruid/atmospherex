import Background from "./components/background"
import BottomPanel from "./components/bottomPanel"
import MiddleSection from "./components/middleSection"
import SidePanel from "./components/sidePanel"
import weathers from "./data/weathers.json"

export default function Home() {
  // console.log("Weathers", weathers)
  
  //API call to get weather data

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between">
      <Background />
      <div className="flex z-[1] w-screen h-screen">
        <SidePanel />
        {/* <MiddleSection /> */}
        {/* <BottomPanel /> */}
      </div>
      

      {/* carousel */}
        {/* cards to show weather 
          1.today
          2. 3 days before 
          3. 3 days ahead */}
    </main>
  )
}
