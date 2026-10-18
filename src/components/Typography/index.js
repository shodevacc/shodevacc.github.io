import React from 'react'
import CrackText from './js/CrackText'
import Glitch from './js/Glitch'
import DashText from './js/DashText'
import Shadows from './js/Shadows'
import Trail from './js/Trail'

function index() {
    return (
        <div style={{display:"flex",flexDirection:'column'}}>
            <CrackText>Black Mirror</CrackText>
            <Glitch>Glitch</Glitch>
            <DashText>Shoaib</DashText>
            <Shadows>Shadow</Shadows>
            <Trail>Trail</Trail>
        </div>
    )
}

export default index
