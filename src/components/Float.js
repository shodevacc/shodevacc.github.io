"use client";

import dynamic from "next/dynamic"

// Shapes are placed randomly, so only render them in the browser
// (server and client would otherwise pick different shapes)
const Float = dynamic(() => import("./FloatShapes"), { ssr: false })

export default Float
