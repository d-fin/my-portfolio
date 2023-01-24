import React from 'react'
import './skills.css'
import {skills} from './About'


function Skills() {

  return (
    <div>
      <h1 className="title">Skills</h1>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
