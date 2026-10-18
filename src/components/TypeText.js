"use client";

import React, { useState, useEffect } from "react"
import * as styles from "../style/typetext.module.css"

function TypeText({ children, trigger, style }) {
  const [text, setText] = useState("")
  useEffect(() => {
    if (!trigger) return
    const timers = children.split("").map((_, index) =>
      setTimeout(() => setText(children.slice(0, index + 1)), 100 + index * 100)
    )
    return () => timers.forEach(clearTimeout)
  }, [trigger, children])

  return <h1 style={{ ...style }} className={styles.animate}>{text}</h1>
}

export default TypeText
