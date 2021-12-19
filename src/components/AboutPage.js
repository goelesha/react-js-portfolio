import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 60vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  {/*font-size: calc(0.6rem + 1vw);*/}
    backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  {/*font-style: italic; */}
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        🔭 I'm Esha Goel, a 3rd Year undergraduate from Shiv Nadar University, Greater Noida.<br/><br/>
        💻 I am a budding Software Developer👩 | Design Enthusiast📲 | MERN Stack Developer 🤓 | Pythoneer 🐍 | Open Source Contributor 📝| Competitive Programmer🤠 | Machine Learning Enthusiast📈 | Technical Writer 🥳.<br/><br/>
        🌱 I love building webpages and Software products.I love to combine my passion for learning and developing with my software development skills to continue building personalized products for people. 
        👯 I am a person who is obsessed with the idea of improving herself and wants a platform to grow and excel.<br/><br/>
        😄 Looking forward to utilize my Web Development, Software Development and Hacking Skills in a Dynamic Environment. 🧑🏻

        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
