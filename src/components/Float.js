import React from "react"
import * as stylesCss from "../style/float.module.css"
import SVGmorph from './SVGmorph'

function Float() {
  const Xcut = ({ style }) => (
    <svg className={stylesCss.back} style={{ ...style }} viewBox="0 0 30 44.58">
      <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z"></path>
      <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z"></path>
    </svg>
  )
  const X = ({ style }) => (
    <svg style={{ ...style }} viewBox="0 0 100 100" className={stylesCss.back}>
      <path
        strokeWidth="3px"
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      ></path>
    </svg>
  )
  const Hex = ({ style }) => (
    <svg style={{ ...style }} viewBox="0 0 30 30" className={stylesCss.back}>
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      ></polygon>
    </svg>
  )
  const Triangle = ({ style }) => (
    <svg style={{ ...style }} viewBox="0 0 30 30" className={stylesCss.back}>
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      ></polygon>
    </svg>
  )
  const Square = ({ style }) => (
    <svg style={{ ...style }} viewBox="0 0 30 30" className={stylesCss.back}>
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"></path>
    </svg>
  )
  const Arrow = ({ style }) => (
    <svg style={{ ...style }} viewBox="0 0 30 42" className={stylesCss.back}>
      <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z"></path>
      <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z"></path>
    </svg>
  )
  var shapes = [
    style => <Xcut style={style} />,
    style => <X style={style} />,
    style => <Hex style={style} />,
    style => <Triangle style={style} />,
    style => <Square style={style} />,
    style => <Arrow style={style} />,
  ]
  var styles = [
    { left: "95%", top: 0, width: "15%", color: "#393e41" },
    { left: "-5%", top: "150%", width: "8%", color: "#e94f37" },
    {
      left: "20%",
      top: "150%",
      width: "25%",
      fill: "currentcolor",
      color: "#393e41",
    },
    {
      left: "40%",
      top: "-50%",
      width: "4%",
      fill: "currentcolor",
      color: "#e94f37",
    },
    { left: "20%", top: "-50%", width: "2%", fill: "currentcolor" },
    {
      left: "80%",
      top: "200%",
      width: "5%",
      fill: "currentcolor",
      color: "#393e41",
    },
    { left: "60%", top: "200%", width: "5%", fill: "currentcolor" },
    { left: "70%", top: "0%", width: "5%", fill: "currentcolor" },
    {
      left: "5%",
      top: "-40%",
      width: "7%",
      fill: "currentcolor",
      color: "# 393e41",
    },
  ]
  var x, j
  //   Shuffle Shapes
  for (var i = shapes.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = shapes[i]
    shapes[i] = shapes[j]
    shapes[j] = x
  }

  return (
    <div className={stylesCss.container}>
      <div className={stylesCss.moving1}>
        {shapes[0]()}
        {shapes[1]()}
        {shapes[2]()}
        {shapes[3]()}
        {shapes[4]()}
      </div>
      <div className={stylesCss.moving2}>
        {shapes[3]()}
        {shapes[4]()}
        {shapes[5]()}
      </div>
      {shapes[Math.floor(Math.random() * shapes.length)](styles[0])}
      {shapes[Math.floor(Math.random() * shapes.length)](styles[1])}
      {shapes[Math.floor(Math.random() * shapes.length)](styles[2])}
      {shapes[Math.floor(Math.random() * shapes.length)](styles[3])}
      {shapes[Math.floor(Math.random() * shapes.length)](styles[4])}
      {shapes[Math.floor(Math.random() * shapes.length)](styles[5])}
      {shapes[Math.floor(Math.random() * shapes.length)](styles[6])}
      {shapes[Math.floor(Math.random() * shapes.length)](styles[7])}
      {shapes[Math.floor(Math.random() * shapes.length)](styles[8])}
    </div>
  )
}

export default Float
