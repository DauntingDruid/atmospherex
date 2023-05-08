//     //import icons 
//         //use weather to filter icon
//         //use weather to show rain, snow effect using framer motion
        
//         //card -> icon, city, temp, weather, date
//           //card -> icon, temp, date


// import React from "react"
// import {motion} from "framer-motion"
// import weathers from "../data/weathers.json"
// import Image from "next/image"

// const Card = () => {
//   return (
//     <div className="flex flex-col items-center justify-center">
//       <motion.div
//         className="flex flex-col items-center justify-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="flex flex-col items-center justify-center">
//           <Image
//             src={weathers[0].icon}
//             alt="info"
//             width={100}
//             height={100}
//             fill={true}
//           />
//           <h1 className="text-4xl font-bold">{weathers[0].city}</h1>
//           <h1 className="text-4xl font-bold">{weathers[0].temp}</h1>
//           <h1 className="text-4xl font-bold">{weathers[0].weather}</h1>
//           <h1 className="text-4xl font-bold">{weathers[0].date}</h1>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// export default Card

