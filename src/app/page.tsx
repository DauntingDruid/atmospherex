'use client';
import { useState } from "react";
import Background from "./components/background"
import BottomPanel from "./components/bottomPanel"
import MiddleSection from "./components/middleSection"
import SidePanel from "./components/sidePanel"
import weathers from "./data/weathers.json"

export default function Home() {
  const [search, setSearch] = useState(null);
  //api: get city info -> send to weather info API
  const onSearchChange = (searchData: any) => {
    console.log(searchData);
  };
  //api: get weather info -> send to bottom panel

  //api: get air quality info -> send to side panel

  //api: get historical weather info -> api: get forecast weather info 
    //function to complie hisotrical and forecast weather info 
      //send to middle section


  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between">
      <Background />
      <div className="flex z-[1] w-screen h-screen">
        <SidePanel onSearchChange={onSearchChange} />
        {/* <MiddleSection /> */}
        {/* <BottomPanel /> */}
      </div>
      

      {/* carousel */}
        {/* cards to show weather 
          1.today
          2. Forecast 3 Day
          3. Historical Weather	Last 7 days -> use 3
          4. Air Quality(AQI)
          5. 
          */}
    </main>
  )
}
