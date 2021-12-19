import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { FullStack, DataScience, UiUx} from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 20vw;
height: 60vh;
z-index:3;
line-height: 1.3;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
text-align:center;
font-size: 1.6rem;
font-family: "Lucida Handwriting";

{/*font-size: calc(1em + 1vw); */}

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size:1.2rem;
{/* font-size: calc(0.6em + 1vw);*/}
padding: 0.5rem 0; 


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`


const MySkillsPage = (skills) => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />


<Main>
<Title>
    <FullStack />Full Stack Development
</Title>
<Description >
    ⚡ Building resposive website front end using React-Redux <br/>
    {/*⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin*/}
    ⚡ Creating application backend in Node, Express and Flask
</Description>
<Description>
<strong>Skills</strong>
<p>
Html, Css, Js, MERN stack (MongoDb,Express,React js,Node js) , npm, yarn, Redux, Sass, Bootstrap, Tailwind, C, C++
</p>
</Description>
<Description>
<strong>Technologies</strong>
<p>
    Firebase, Netlify, VSCode, Github
</p>
</Description>
</Main>


<Main>
<Title>
    <DataScience/>Data Science and AI
</Title>
<Description>
    ⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases<br/>
    ⚡ Experience of working with Computer Vision and NLP projects<br/>
    {/*⚡ Complex quantitative modelling for dynamic forecasting and time series analysis*/}
</Description>
<Description>
<strong>Skills</strong>
<p>
Python, Tensorflow, Pandas, Keras, PyTorch, Scikit-learn
</p>
</Description>
<Description>
<strong>Technologies</strong>
<p>
Jupyter Notebook, Google Collab, Anaconda
</p>
</Description>
</Main>


<Main>
<Title>
    <UiUx/>UI/UX Design
</Title>
<Description>
    ⚡ Designing highly attractive user interface for mobile and web applications<br/>
    ⚡ Customizing logo designs and building logos from scratch<br/>
    ⚡ Creating the flow of application functionalities to optimize user experience
</Description>
<Description>
<strong>Technologies</strong>
<p>
Figma, Adobe XD, Adobe Illustrator, Inkscape
</p>
</Description>
</Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
