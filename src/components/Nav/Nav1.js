import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import HamburgerIcon from './HamburgerIcon'


const Container = styled.div`
    /* background: ${({ open }) => open ? 'rgba(0,0,0,0.4)' : 'transparent'}; */
    width:100vw;
    height:100vh;
    position: fixed;
    top:0;
    left:0;
    z-index:1000;
    display: flex;
    transform: ${({ open }) => open ? `translate3d(0,0,0)` : `translate3d(-101%,0,0)`};
    transition: transform .3s ease;
    /* pointer-events:${({ open }) => open ? "auto" : "none"}; */
`
const NavBar = styled.div`
    position: fixed;
    top:0%;
    left:0%;
    height: ${({ theme }) => theme.constant.navHeight};
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 6.5rem;
    pointer-events: auto;

    z-index:1001;

    background: ${({ theme, showNavBarBg }) => showNavBarBg ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0)'};
    /* backdrop-filter: blur(10px); */
`
const NavItems = styled.div`
    width:80vw;
    height:100vh;
    background: ${({ theme }) => theme.colors.navBg};
   

    padding: ${({ theme }) => theme.constant.navHeight} 0 0 5%;

    ${({ theme }) => theme.sizes.md}{
        width:50vw;
    }
`
const NavLink = styled.div`
    margin: 1rem 0;
    font-size:16px;
    font-weight: 600;
    color:#fff; 
    a{
        color:#fff; 
    }
    a:hover{
        color:${({ theme }) => theme.colors.cinnabar};
    }
`
const CloseArea = styled.div`
height:100vh;
/* width:20vw; */
/* background: rgba(0,0,0,0.4); */
 /* opacity: ${({ open }) => open ? '1' : '0'}; */
 transition: opacity 0.2s;
 /* ${({ theme }) => theme.sizes.md}{
        width:50vw;
    } */
`

function Nav1({ dark = false }) {
    const [open, setOpen] = useState(false)
    const [showNavBarBg, setShowNavBarBg] = useState(false)
    const ContainerRef = useRef()
    const CloseAreaRef = useRef()

    const CheckClick = (e) => {

        // console.log(e.target, ContainerRef.current, ContainerRef.current == e.target)
        if (open && ContainerRef.current == e.target) {
            // console.log("CLILCKU")
            CloseAreaRef.current.style.opacity = 0;
            setOpen(false);
        }

    }

    useEffect(() => {

        const handleScroll = () => {
            // console.log(window.scrollY,showNavBarBg)
            if (!showNavBarBg && window.scrollY >= 40) {
                setShowNavBarBg(true)
            }
            else if (showNavBarBg && window.scrollY < 40) {
                setShowNavBarBg(false)
            }
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => {
            window.removeEventListener("scroll", handleScroll, { passive: true })
        }
    }, [showNavBarBg])
    return (
        <>
            <Container ref={ContainerRef} open={open} onClick={CheckClick}>
                <NavItems open={open} >
                    <NavLink>
                        <p>
                            <Link to="/">Home</Link>
                        </p>

                    </NavLink>
                    <NavLink>
                        <p
                        ><Link to="/internships">Internships</Link></p>

                    </NavLink>
                    <NavLink>
                        <p> <Link to="/projects">Academic projects</Link></p>

                    </NavLink>
                    <NavLink>
                        <p><Link to="/Publications">Publications</Link></p>

                    </NavLink>
                </NavItems>
                <CloseArea ref={CloseAreaRef} open={open} onClick={() => setOpen(false)} />
            </Container>
            <NavBar showNavBarBg={showNavBarBg}>
                <HamburgerIcon dark={dark} open={open} setOpen={setOpen} />
            </NavBar>

        </>


    )
}

export default Nav1
