import React, { useState, useEffect } from "react"
import { chain } from "../animation"
import * as styles from "../../style/nav.module.css"

function Nav() {
  const [open, setOpen] = useState(false)
  const preventScroll = () => {
    Object.assign(document.body.style, { height: `100vh`, overflow: `hidden` })
  }
  const enableScroll = () => {
    Object.assign(document.body.style, { height: `100%`, overflow: `scroll` })
  }
  useEffect(() => {
    //   Chain Animations on close
    const closeAni = () => {
      enableScroll()
      chain({
        elements: ["#Home", "#Internship", "#Aproject"],
        style: { transform: "translate(50px)", opacity: "0" },
        delay: 100,
      })
      // After closing make the options disappear
      setTimeout(() => {
        var element = document.getElementById("NavContainer")
        Object.assign(element.style, { display: "none" })
      }, 1000)
    }
    //   Chain Animations on open(Additional Timeout to wait for title to appear)
    const openAni = () => {
      preventScroll()
      setTimeout(() => {
        var element = document.getElementById("NavContainer")
        Object.assign(element.style, { display: "flex" })
        // ^ Make the section display flex from none to make it visible
        chain({
          elements: ["#Home", "#Internship", "#Aproject"],
          style: { transform: "translate(0px)", opacity: "1" },
          delay: 100,
        })
      }, 1000)
    }
    // Condition to check if state is changed
    open ? openAni() : closeAni()
  }, [open])

  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          setOpen(state => !state)
        }}
        className={open ? styles.closeIcon : styles.openIcon}
      >
        <div className={`${styles.bar} ${styles.bar1}`}></div>
        <div className={`${styles.bar} ${styles.bar2}`}></div>
        <div className={`${styles.bar} ${styles.bar3}`}></div>
      </div>

      <nav id="NavContainer" className={styles.itemContainer}>
        <ul className={open ? styles.itemsVisible : styles.itemsInvisible}>
          <li className={styles.navTitle}>SHOAIB ALYAAN</li>
          <li id="Home" className={styles.item}>
            <a aria-current="page" className="" href="/">
              <h2>Home</h2>
            </a>
          </li>
          <li id="Internship" className={styles.item}>
            <a href="/internships">
              <h2>Internships</h2>
            </a>
          </li>
          <li id="Aproject" className={styles.item}>
            <a href="/projects">
              <h2>Academic Projects</h2>
            </a>
          </li>
        </ul>
      </nav>
      <div className={open ? styles.openBG : styles.closeBG}></div>
    </div>
  )
}

export default Nav
