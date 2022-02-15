import React from 'react'
import styled from 'styled-components'
import Page from '../components/Layout/Page'


const Title = styled.h2`
color:${({ theme }) => theme.colors.cinnabar};
font-size:3.2rem;
text-align:center;
margin: 4rem 0;
`
const List = styled.ul`

`
const Item = styled.li`
    a{
        font-size:16px;
        background: transparent;
        border: ${({ theme }) => theme.colors.cinnabar} 2.5px solid;
        color: ${({ theme }) => theme.colors.cinnabar};
        padding: 0.5rem 1rem;

        :hover{
            background: ${({ theme }) => theme.colors.cinnabar};
            color: #fff;
        }
    }
    p{
        text-align: justify;
    }
`
function Publications() {
    const pubs = [
        {
            title: "Self-Balancing Cycle with Location tracking",
            link: "https://link.springer.com/chapter/10.1007/978-981-16-2543-5_26",
            abstract: "This paper proposes a design for a reaction wheel assisted self-balancing bicycle modelled as an inverted pendulum. The control system uses an inertial measurement unit to measure the angular displacement of the cycle and then employs a micro-controller, a high torque motor and a reaction wheel, to correct its position by calculating the corrective torque required. Additionally, the bicycle also offers a location tracking capability using a Global System for Mobile (GSM) and a Global Positioning System (GPS). The device can also be used as a rehabilitation and transportation device for disabled and senile individuals."
        }
    ]
    return (
        <Page addPadd darkNav title="Shoaib Alyaan Publications">
            <Title>Publications</Title>
            <List>
                {pubs.map(pub => {
                    return (
                        <Item>
                            <h2>{pub.title}</h2>
                            <p>{pub.abstract}</p>
                            <a target="_blank" rel="noopener noreferrer" href={pub.link}>View</a>
                        </Item>
                    )
                })}

            </List>

        </Page>
    )
}

export default Publications
