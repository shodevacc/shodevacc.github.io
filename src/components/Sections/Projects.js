"use client";

import React, { useEffect, useState } from "react"
import Section from "../Section"
import Image from "next/image"
import * as styles from "../../style/projects.module.css"

function Projects({ projects }) {
  const [index, setIndex] = useState(0)
  const [hover, setHover] = useState(false)
  //   Add the first element again to create a loop
  const proData = [...projects, projects[0]]

  useEffect(() => {
    //parent Scroll element
    var parent = document.getElementById("rightParent")
    //All the children NODES
    var children = Array.prototype.slice.call(
      document.querySelectorAll(`.${styles.card}`)
    )
    var scrollHeight = 0
    children.forEach(child => {
      scrollHeight = scrollHeight + child.getBoundingClientRect().height
    })
    const handleEnter = () => {
      //Mouse Enter
      setHover(true)
    }
    const handleLeave = () => {
      //Mouse Leave
      setHover(false)
    }
    const handleScroll = () => {
      // console.log("SCROLL POS",parent.scrollHeight,parent.scrollTop+parent.clientHeight)
      if ((parent.scrollHeight-2) < (parent.scrollTop + parent.clientHeight)) {
        parent.scroll(0, 0)
      }
      for (var i = 0; i < children.length; i++) {
        //Loop over all children and check which is visible
        //Height=Bottom-Top
        var cRect = children[i].getBoundingClientRect()
        var ctop = cRect.top //Top of the child
        // var cbottom = children[i].getBoundingClientRect().bottom //Bottom of child
        var ctopParent = ctop - parent.getBoundingClientRect().top //top wrt parent
        var height = cRect.height //Height of the child
        var visible = height / 2 + ctopParent //Check if half of the child is visible
        if (visible > 0) {
          if (index != i) {
            //only change the state if the current index is not equal to the visible element
            setIndex(i)
          }
          break //Exit loop when visible element is found
        }
      }
    }
    parent.addEventListener("mouseenter", handleEnter) //When mouse enters pause scroll
    parent.addEventListener("mouseleave", handleLeave) //When mouse leaves resume scroll
    parent.addEventListener("scroll", handleScroll) //To keep checking the scroll
    const timer = setInterval(() => {
      //Timer for scrolling the rightcontent
      !hover && parent.scrollBy(0, 1) //To keep scrolling every 10milliseconds (only if mouse is not hovering over it)
    }, 10)

    return () => {
      parent.removeEventListener("mouseenter", handleEnter)
      parent.removeEventListener("mouseleave", handleLeave)
      parent.removeEventListener("scroll", handleScroll)
      clearInterval(timer)
    }
  }, [index, hover])
  //   console.log("Visible", index)
  return (
    <Section title="Projects" contentContainerStyle={{ backgroundColor:'#393e41' }}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>{proData[index].title}</h2>
          {proData[index].link && (
            <a
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              href={proData[index].link}
            >
              Check it out
            </a>
          )}
          {proData[index].git && (
            <a
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              href={proData[index].git}
            >
              Check out repository
            </a>
          )}
        </div>
        <div id="scrollRightElement" className={styles.right}>
          <div id="rightParent" className={styles.rightContent}>
            {proData.map((project,index) => {
              return (
                <div key={index} className={styles.card}>
                  <div className={styles.Img}>
                    <Image
                      {...project.image}
                      alt={project.title}
                      sizes="200px"
                      style={{
                        width: "200px",
                        height: "auto",
                        maxHeight: "200px",
                        objectFit: "contain",
                        borderRadius: project.roundImage ? "50%" : undefined,
                      }}
                    />
                  </div>
                  <p>{project.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Projects
