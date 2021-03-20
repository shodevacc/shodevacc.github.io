import React, { useState, useEffect } from "react"
import * as styles from "../style/typetext.module.css"

function TypeText({ children,trigger,style }) {
  var chars = children.split("")
  const [text, setText] = useState("")
  useEffect(() => {
    trigger&&chars.forEach((element, index) => {
      setTimeout(() => {
        setText(state => {
          return state + element
        })
      }, 100 + index * 100)
    })
    return () => {}
  }, [trigger])


  return <h1 style={{...style}} className={styles.animate}>{text}</h1>
}

export default TypeText
