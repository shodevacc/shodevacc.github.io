import React from 'react'
import styled, { ThemeProvider } from "styled-components"
import { theme, Global } from "../../style/ThemeContext"
import SEO from '../seo'
import Nav from '../Nav/Nav1'

//Container with added padding for appropriate nav height and side margins
const PaddContainer = styled.div`
max-width:100vw;
margin: ${({ theme }) => theme.constant.navHeight} 2rem 2rem 2rem;

${({ theme }) => theme.sizes.md}{
    margin: ${({ theme }) => theme.constant.navHeight} 3rem 3rem 3rem;
}
`
function Page({ darkNav=false, children, title, addPadd = false }) {
    return (
        <ThemeProvider theme={theme}>
            <Global />
            <SEO title={title || "Shoaib Alyaan"} />
            <Nav dark={darkNav} />
            {addPadd ? <PaddContainer>
                {children}
            </PaddContainer> : children}
        </ThemeProvider>
    )
}

export default Page
