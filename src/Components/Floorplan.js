import React from 'react'
import Livingroom from './Livingroom'
import Kitchen from './Kitchen'
import Bedroom from './Bedroom'
import Bath from './Bath'
const Floorplan = () => {
  return(
    <div>
      <h1>
        Floorplan
      </h1>
      <Livingroom />
      <Kitchen />
      <Bedroom bednum='1' />
      <Bedroom bednum='2'/>
      <Bedroom bednum='3'/>
      <Bath size='Full' />
      <Bath size='Half' />
    </div>   
  )
}

export default Floorplan