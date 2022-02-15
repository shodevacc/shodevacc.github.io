import React, { useEffect, useRef } from "react"
import styled from "styled-components"

const Icon = styled.div`
  position: relative;

  cursor: pointer;

  font-size: 15px;
  height: 1em;
  width: 2em;

  z-index: 1000;
  /* transform: translate(0, -49%); */

`
const Bar = styled.div`
  height: 0.2em;
  width: 100%;
  background: ${({ theme, dark }) => dark ? theme.colors.cinnabar : '#fff'};
  border-radius:15px;
  position: absolute;
  transition: 0.3s ease;
  :first-child {
    top: 0px;
    left: 0;
    transform: ${({ open }) =>
    open ? `translate(0, 0.5em) rotate(45deg)` : "none"};
  }
  :nth-child(2) {
    top: 50%;
    left: 0;
    opacity: ${({ open }) => (open ? `0` : "1")};
  }
  :last-child {
    top: 100%;
    left: 0;
    transform: ${({ open }) =>
    open ? `translate(0, -0.5em) rotate(-45deg)` : "none"};
  }
`
const HamburgerIcon = ({ open, setOpen, dark = false }) => {
  const BarRef = useRef()
  const BarRef1 = useRef()

  return (
    <Icon onClick={() => setOpen(state => !state)}>
      <Bar dark={dark} open={open} ref={BarRef} />
      <Bar dark={dark} open={open} ref={BarRef1} />
      <Bar dark={dark} open={open} />
    </Icon>
  )
}
export default HamburgerIcon
