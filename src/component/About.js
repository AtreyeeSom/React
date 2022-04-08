import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'

const About = () => {
    const context=useContext(NoteContext)
    useEffect(() => {
     context.update();
    }, [])
    
  return (
        <div>
        <h1>this is about {context.data.name} and he is in class {context.data.class} </h1>
        </div>
  )
}

export default About