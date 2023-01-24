import React from 'react'
import LinkedInLogo from '../assets/LI-In-Bug.png'
import GitHubLogo from '../assets/github-mark-white.svg'
import './title.css'
import {about} from './About'

function Title() {
    const {name, role, description, socials} = about 
    return (
        <div className='about center'>
          {name && (
            <h1>
              Hi, I am <span className='about__name'>{name}.</span>
            </h1>
          )}
    
          {role && <h2 className='about__role'>A {role}.</h2>}
          <p className='about__desc'>{description && description}</p>
    
          <div className='about__contact center'>
            <button className="resume-button">resume</button>
            <a href={socials.linkedin}>
                <img className="images" src={LinkedInLogo} alt=""></img>
            </a>
            <a href={socials.github}>
                <img className="images" src={GitHubLogo} alt=""></img>
            </a>
          </div>
        </div>
      )
}

export default Title
