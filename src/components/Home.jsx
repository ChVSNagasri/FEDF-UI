import React from 'react'
import OIP from './OIP.jpg'
import './home.css'
export default function Home() 
{
  return (
    <div>
  <div className="card">
 
           <img className="oip" src={OIP} alt="Image here" width={100} height={100}/>

  <div className="card-body">
   <h2 style={{color:"rgb(229, 95, 22)"}}>Welcome! 2500030484 </h2>
  <h2 style={{color:"rgb(229, 95, 22)"}}> CHINTALAPATI VENKATA SAI NAGASRI</h2>
  </div>
         
  </div>
 
    </div>
  )
}
