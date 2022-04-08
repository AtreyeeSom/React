import React, { createContext } from 'react'

import { CompB } from './compB'

const BioData=createContext()

export const CompA = () => {

 
  return (
   
      <BioData.Provider value={"Thapa Technical is very nice"}>
      <CompB/>
      </BioData.Provider>
       
  
  )
}
export {BioData};