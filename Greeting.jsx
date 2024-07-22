import React from 'react'

const Greeting = () => {
  return (
    <div style={{ width: 1200,height: 600,backgroundColor: 'black'  }} >
        <h1  style={{color: 'white' , textAlign:'center'}}>Learn to Code</h1>
        <h3  style={{color: '#f0e68c' ,fontFamily: 'sans-serif' }}>With the world's largest web developer site. </h3>
     <div  style={{ width:1100,height:100}}> <input type='text' placeholder='Search our tutorials,e.g.HTML'  ></input></div>  
     <p  style={{color: '#f0e68c'}}>Not Sure Where To Begin?</p>
     
        
    </div> 
  )
}

export default Greeting
