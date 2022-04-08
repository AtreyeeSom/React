import React, { useContext } from 'react'
import { BioData } from './compA'

export const CompC = () => {
  const channel=useContext(BioData)
  return (
    <h1>hello {channel}</h1>
     
   
  )
}
