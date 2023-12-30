import React from 'react'
import Navigation from './Navigation'
import HotelListing from './HostelListing'
import Data from '../Data/Data'
const LIstView = () => {
  return (
    <div>
      <div className="flex flex-wrap">

<Navigation/>

    {Data.map((k,index)=>(
   
       
     
       <HotelListing
        name={k.name}
        type={k.type}
        room={k.rooms}
        img={k.img}
        
      />
    )
    )}
     
     </div>
    </div>
  )
}

export default LIstView
