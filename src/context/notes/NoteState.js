import React, { useState } from 'react'
import NoteContext from './NoteContext'
 const NoteState = (props) => {

    const state={
        "name":"harry",
        "class":"10A"
    }
   const [data,setData]=useState(state)
    const update=()=>{
         setTimeout(() => {
             setData({
                "name":"potter",
                "class":"1A"
             })
         }, 1000);
     }

  return (
    <div>
        <NoteContext.Provider value={{data, update}}>
            {props.children}
        </NoteContext.Provider>
        </div>
  )
}
export default NoteState