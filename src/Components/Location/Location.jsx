import React, { useState } from 'react'
import Style from './Location.module.scss'

const Location = () =>{

    const {location,setLocation} = useState("");
    const onChangeHandle = val =>{

    }

    return(
        <div>
            <input type="text" placeholder="Search For Location" value={location} 
                onChange={e => {
                  setLocation(e.target.value)
                  onChangeHandle(e.target.value);
              }}
            />

        </div>
    )
}