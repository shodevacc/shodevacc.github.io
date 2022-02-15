import React from "react"
import { Link } from "gatsby"
import * as styles from "../../style/academic.module.css"
import Section from "../Section"
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column; 

    a{
      flex-basis: 100%;
    text-align: center;
    padding: 100px 0;
    transition: all 0.5s linear;
    cursor: pointer;
    }

    a h2 {
    font-size: 2.56rem;
    color: ${({ theme }) => theme.colors.cinnabar};
  }

  a:hover h2 {
    transition: all 0.3s linear;
    transform: scale(1.1);
  }

  a:first-child {
    border-bottom: 2px solid var(--cinnabar);
  }
  a:last-child{
    border-top: 2px solid var(--cinnabar);
  }

    ${({ theme }) => theme.sizes.sm}{
      flex-direction: row;

      a {
      flex-basis: 50%;
      text-align: center;
    }
    a:first-child {
      border-right: 2px solid var(--cinnabar);
      border-bottom: none;
    }
    a:last-child{
    border-left: 2px solid var(--cinnabar);
    border-top: none;
  
  }
    }

    



`

function Academic() {
  return (
    <Section
      title="Academic"
      contentContainerStyle={{ backgroundColor: "#393e41" }}
    >
      <Container>
        <Link to="/internships">
          <h2>Internships</h2>
        </Link>
        <Link to="/projects">
          <h2>Projects</h2>
        </Link>
        <Link to="/Publications">
          <h2>Publications</h2>
        </Link>
      </Container>
    </Section>
  )
}

export default Academic
