import React, { useState, useEffect, useRef } from "react"
import { useSpring, animated, useTrail } from "react-spring"
import * as styles from "../style/stars.module.css"

function Stars({ height, width }) {
  const sky = useRef(null)
  const [dimension, setDimension] = useState({ height: 0, width: 0 })
  useEffect(() => {
    var element = document
      .querySelector(`.${styles.container}`)
      .getBoundingClientRect()
    setDimension({
      height: element.height,
      width: element.width,
    })
    const handleResize = () => {
      setDimension({
        height: element.height,
        width: element.width,
      })
    }
    window.addEventListener("resize", handleResize)
    // console.log("CHECK",document.querySelector(`.${styles.container}`).getBoundingClientRect().height,sky.current.height)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const trail = useTrail(60, {
    from: { o: 0 },
    // to:{o:1},
    // to: async next => {
    //   while (1) {
    //     await next({ o: 1 })
    //   }
    // },
    reset: true,
  })
  const randomRaduis = () => {
    return Math.random() * 0.7 + 0.6
  }
  const getRandomX = () => {
    return Math.floor(
      Math.random() * Math.floor(dimension.width || 100)
    ).toString()
  }
  const getRandomY = () => {
    return Math.floor(
      Math.random() * Math.floor(dimension.height || 100)
    ).toString()
  }
  return (
    <div ref={sky} className={styles.container}>
      <svg className={styles.stars}>
        {[...Array(60)].map((item,index) => {
          return (
            <circle
            key={index}
              cx={getRandomX()}
              cy={getRandomY()}
              r={`${randomRaduis()}`}
              stroke="none"
              strokeWidth="0"
              fill="white"
              className="star"
            />
          )
        })}
      </svg>
      <div>
        {[...Array(60)].map((item,index) => {
          return <div key={index} style={{top:`${getRandomX()}px`,left:`${getRandomY()}px`,animationDelay:`${index*0.5}s`}} className={styles.shootingStar}></div>
        })}
      </div>
    </div>
  )
}

export default Stars
