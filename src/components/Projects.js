import React from 'react'
import './projects.css'
import {projects} from '../components/About'

function Projects() {
    const {name, description, stack, link} = projects
  return (
    <div>
      <div>
        <h1 className="title">Projects</h1>
      </div>
    </div>
  )
}

export default Projects
