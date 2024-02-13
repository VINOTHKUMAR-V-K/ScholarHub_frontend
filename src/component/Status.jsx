import React, { useEffect } from 'react'

const Status = () => {

  useEffect(()=>{
     let status=localStorage.getItem("status")
     if(status=="Request sended"){
         var gray=document.getElementById("gray")
         var green=document.getElementById("green")
         var red=document.getElementById("red")
         gray.style.opacity=0.2
         green.style.opacity=0.2
         red.style.visibility="hidden"
     }else if(status=="Approved"){
          var blue=document.getElementById("blue")
          var green=document.getElementById("green")
         var red=document.getElementById("red")
         var gray=document.getElementById("gray")
          blue.style.opacity=0.2
          gray.style.opacity=0.2
          red.style.visibility="hidden"
          green.style.opacity=1
     }else if(status=="Deleted"){
      var blue=document.getElementById("blue")
      var green=document.getElementById("green")
     var red=document.getElementById("red")
     var gray=document.getElementById("gray")
      blue.style.opacity=0.2
      gray.style.opacity=0.2
      green.style.visibility="hidden"
      
 }
 else{
  var blue=document.getElementById("blue")
      var green=document.getElementById("green")
     var red=document.getElementById("red")
     var gray=document.getElementById("gray")
     blue.style.opacity=0.2
      gray.style.opacity=0.2
      red.style.opacity=0.2
      green.style.opacity=0.2
   
 }
  },[])
  return (
    <div>
        <h1>Our Application Status</h1>
        <hr />
        <h1>Status</h1>
         <hr />
         <div className='d-flex vh-25 border border-3 rounded-2 flex-column gap-5 align-items-center justify-content-center' >
          <button id='blue' className='btn-outline-primary rounded-3' style={{width:"15%"}}>Request Sended</button>
          <button id='gray' className='btn-outline-secondary rounded-3' style={{width:"15%"}}>pending</button>
          <button id='green' className='btn-outline-success rounded-3' style={{width:"15%"}}>Approved</button>
          <button id='red' className='btn-outline-danger rounded-3' style={{width:"15%"}}>Reject</button>

         </div>
        

    </div>
  )
}

export default Status