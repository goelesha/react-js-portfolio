import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes';
import "./LogoComponent.css";



const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;
position: fixed;
left: 2rem;
top: 0.7rem;
z-index:3;
`
const greeting = {
  logo_name: "Esha",
};


const LogoComponent = (props) => {
    return (
        <Logo color={props.theme} className="logo_esha">
          <NavLink to="/" className="logo">
              <span style={{ color: 'red' }}> &lt;</span>
              <span className="logo-name" style={{ color: 'red' }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: 'red' }}>/&gt;</span>
            </NavLink>
        </Logo>
    )
}

export default LogoComponent
