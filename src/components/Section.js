import React, { useEffect } from "react"
import { scrollAnimate } from "./animation"
import * as styles from "../style/section.module.css"

function Section({ children, style, title, contentContainerStyle }) {
  var chars = title && title.split("")
  useEffect(() => {
    const handleScroll = () => {
      scrollAnimate({
        cname: `${title}123`,
        styleClass: styles.fade,
        // style:{opacity:1,transform:"translate(0,0)"},
        delay: 100,
        children: true,
      })
    }
    title && window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <section style={{ ...style }} className={styles.container}>
      {title ? (
        <React.Fragment>
          <div className={styles.header}>
            <h2 className={`${styles.headText} ${title}123`}>
              {chars.map((character, index) => {
                return (
                  <span key={index} className={styles.startFade}>
                    {character}
                  </span>
                )
              })}
            </h2>
          </div>

          <div
            style={{ ...contentContainerStyle }}
            className={styles.ContentContainer}
          >
            {children}
          </div>
        </React.Fragment>
      ) : (
        children
      )}
    </section>
  )
}

export default Section
