import React from 'react'
import Nag from './Nag.jpeg'
import './profile.css'
export default function Profile() {
  return (
    <div>
        <div className='card'>
           <img className="nag" src={Nag} alt="Image here" width={100} height={100}/>
                         <h1>CHINTALAPTI VENKATA SAI NAGASRI</h1><br/>
                         <h2>University ID:2500030484</h2>
                         <hr></hr>
                         <h4>
                            Admission Date:11-06-2025<br/>
                             Program:UG<br/>
                             Major Degree:B-Tech-CSE-PBL<br/>
                            Date of Birth:11-09-2008<br/>
                            Blood Group:O+ve<br/>
                            Email:chintalapatinagasrivs@gmail.com<br/>
                         </h4>
                         <hr></hr>
                         <h4>
                     Father Name:CHINTALAPATI VANI PRASAD<br/>
                     Mother Name:CHINTALAPATI MAHALAKSHMI<br/>
                     Mother Tongue:Telugu<br/>
                     Caste-Category:OC<br/>
                         </h4>
        </div>
    </div>
    
  )
}
