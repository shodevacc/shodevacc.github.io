import React, { useState, useEffect,useRef } from "react"
import waves from "../images/Waves.svg"
import * as styles from "../style/test.module.css"
import { interpolate } from "flubber"
import { useSpring, animated, useTrail } from "react-spring"
import SVGmorph from "../components/SVGmorph"

function Test({height,width}) {
  const sky=useRef(null)
  const trail = useTrail(60, {
    
    from: { o: 0 },
    to:async next=> {
      while(1){
        await next({o: 1,})
      }
    },reset:true
  })
  var paths = [
    "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
    "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
    "M7 2v11h3v9l7-12h-4l4-8z",
    "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
  ]
  const randomRaduis = () => {
    return Math.random() * 0.7 + 0.6
  }
  const getRandomX = () => {
   
    return Math.floor(Math.random() * Math.floor(width||100)).toString()
  }
  useEffect(() => {
    console.log("CURRENT",sky.current,sky.current.height)
    return () => {
      
    }
  }, [])
  
  const getRandomY = () => {
   
    return Math.floor(
      Math.random() * Math.floor(height||100)
    ).toString()
  }
  // setTimeout(() => set({ opacity: 0 }), 500)
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //    ( state?
  //     set({ opacity: 0 }):
  //     set({opacity:1}))
  //     setstate(state=>!state)

  //   }, 1000)
  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

  const Star = () => {
    return (
      <svg ref={sky} style={{height:height||"100vh",width:width||"100vw"}}>
        {trail.map(props => (
          <animated.circle
            cx={getRandomX()}
            cy={getRandomY()}
            r={randomRaduis()}
            fill="white"
            style={{
              opacity: props.o.interpolate(
                [0,.5 ,1],
                [0,1,0]
              ),
            }}
          />
        ))}
        {/* {[...Array(60)].map(item => {
          return (
            <circle
              cx={getRandomX()}
              cy={getRandomY()}
              r={`${randomRaduis()}`}
              stroke="none"
              strokeWidth="0"
              fill="white"
              className="star"
            />
          )
        })} */}
      </svg>
    )
  }

  return (
    <div className={styles.container}>
      <Star />
    </div>
  )
}

export default Test
