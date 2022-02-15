import { createGlobalStyle } from "styled-components"

export const theme = {
  colors: {
    navBg: '#1f4954',
    cinnabar:'#e94f37',
    blue: "#0b0c22",
    dblue: "#08091b",
    lblue: "#1da2e7",
    menu: "#105d86",
    background: "#fff",
    subtle: "#cccccc",
    lgreen: "#dcffba",
    green: "#5a7f4f",
  },
  shadow: {
    title: "0 0em 0.2em #38ade9, 0 0em 0.2em #0d6f58",
    card: "0 0 3em 0.4em #1ca2e7b8, inset 0 0 1em 0em #1ca2e7b8",
  },
  zIndex: {
    nav: 10,
    menu: 11,
    navIcon: 12,
    cursor: 1000,
    cursorOverLay: 1001,
  },
  constant: {
    navHeight: `8rem`,
    outerMargin: `4rem`,
  },
  sizes: {
    xs: "@media only screen and (min-width: 400px) ",
    sm: "@media only screen and (min-width: 568px) ",
    md: "@media only screen and (min-width: 768px) ",
    lg: "@media only screen and (min-width: 992px) ",
  },
  fontSize: {
    title: "24px",
  },
}

export const Global = createGlobalStyle`
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  font: georgia, serif, sans-serif;
  font-size: 62.5% !important;
}
body {
  background: var(--ivory);
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsla(0, 0%, 0%, 0.8);
  font-family: georgia, serif;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}
* {
  box-sizing: inherit;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  font: georgia, serif, sans-serif;
  font-size: 62.5% !important;
}
body {
  background: var(--ivory);
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsla(0, 0%, 0%, 0.8);
  font-family: georgia, serif;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}
* {
  box-sizing: inherit;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}
h2 {
  font-size: 2.56rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: "Poppins",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.62671rem;
  line-height: 1.1;
}
h3 {
  font-size: 2.2rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: "Poppins",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  /* font-size: 1.38316rem; */
  line-height: 1.1;
}
h4 {
  font-size: 1.8rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: "Poppins",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  /* font-size: 1rem; */
  line-height: 1.1;
}
h5 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: "Poppins",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 0.85028rem;
  line-height: 1.1;
}
h6 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: "Poppins",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 0.78405rem;
  line-height: 1.1;
}

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
  color: #000;
}
p {
  font-size: 16px;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  font-family: "Poppins",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
ul {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}

blockquote {
  margin-left: 1.45rem;
  margin-right: 1.45rem;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
`
