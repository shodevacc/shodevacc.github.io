import React, { useEffect, useState } from "react"
import Section from "../Section"
import SHO from "../../images/SHO.svg"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../../style/projects.module.css"

function Projects() {
  const [index, setIndex] = useState(0)
  const [hover, setHover] = useState(false)
  const data = useStaticQuery(graphql`{
  ProjectImg: allFile(filter: {relativeDirectory: {eq: "Projects"}}) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}
`)
  var filteredData = {}

  data.ProjectImg.edges.forEach(edge => {
    filteredData[edge.node.name] = edge.node.childImageSharp.gatsbyImageData
  })
  const proData = [
    {
      title: "10DerMeatz",
      description: "An E-Commerce website that took a local meat store online.",
      img: <GatsbyImage image={filteredData.tender} style={{ borderRadius: "50%" }}   alt="10Dermeatz Logo" />,
      git: "https://github.com/shodevacc/10dermeatzDocker",
    },
    {
      title: "My Website",
      description:
        "My website to showcase my modern web-development skills along with information about my Academic projects, work experience, freelance projects, resume and contact information.",
      img: <img src={SHO} />,
      git: "https://github.com/shodevacc/shodevacc.github.io",
    },
    {
      title: "MissionMilk",
      description:
        "A project to showcase and raise awareness about a Non-Profit, with the mission of feeding the underpriviledged during the COVID-19 lockdown.",
      img: <GatsbyImage image={filteredData.MILK_LOGO}   alt="Mission Milk" />,
      git: "https://github.com/shodevacc/missionmilk",
      link: "https://missionmilk.in/",
    },
    {
      title: "N.K. Caterers",
      description:
        "Developed complete E-Commerce website for business.",
      img: <GatsbyImage image={filteredData.NK}   alt="N.K. caterers" />,
      link: "https://www.nkcaterers.com/",
    },
    {
      title: "Anees",
      description: "A Consultancy/Blog site (Design Completed)",
      img: <GatsbyImage image={filteredData.Anees} style={{ borderRadius: "50%" }} />,
      git: "https://github.com/shoaibalyaan/shoaibalyaan.github.io",
      link: "https://shoaibalyaan.github.io/",
    },
  ]
  //   Add the first element again to create a loop
  proData.push(proData[0])

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
                  <div className={styles.Img}>{project.img}</div>
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
