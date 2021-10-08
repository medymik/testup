import React, { useState, useEffect, useCallback } from "react"; 
 
type MousePositionType = { 
 x: number; 
 y: number; 
}; 
 
type WindowSizeType = { 
 height: number; 
 width: number; 
}; 

const mathLib = () => { 
 const distanceCalculator = (point1: any, point2: any): number => 
   Math.sqrt( 
     Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2) 
    ); 
 return { distanceCalculator }; 
}; 
 
function App() { 
 const [position, setPosition] = useState<MousePositionType>({ x: 0, y: 0 }); 
 const [windowSize, setWindowSize] = useState<WindowSizeType>({ 
    height: 0, 
    width: 0, 
}); 
let [distance, setDistance] = useState(0); 
const handleMouseMove = (e: { clientX: number; clientY: number }) => 
   setPosition({ x: e.clientX, y: e.clientY }); 
const handleResize = () => 
   setWindowSize({ height: window.innerHeight, width: window.innerWidth }); 
  
const distanceCalc = useCallback(() => {
  return mathLib().distanceCalculator(position, {
    x: windowSize.width / 2,
    y: windowSize.height / 2
  })
}, [position, windowSize]);
 

  useEffect(() => {
    setDistance(distanceCalc());
    handleResize();
    window.addEventListener("mousemove", handleMouseMove); 
    window.addEventListener("resize", handleResize); 
  }, [])

  useEffect(() => {
    setDistance(distanceCalc())
  }, [position, windowSize])
 
return ( 
  <> 
    <div> 
Mouse Position: {position.x}:{position.y} 
    </div> 
    <div> 
Window Size: {windowSize.width}:{windowSize.height} 
    </div> 
    <div>Distance to center: {distance.toFixed(2)}</div> 
  </> 
 ); 
} 
 
export default App;