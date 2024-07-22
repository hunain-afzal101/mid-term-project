import React from 'react'

const page = (props) => {
 
  return (
    <>
     <div style={{ width: 1200,height: 600,backgroundColor: 'LightCyan',  paddingRight:50}}  >
        <h1 style={{color:'black'}}>{props.name} {props.css} {props.java}</h1>
      <h4>{props.para}{props.head}{props.javapara}</h4>
<button style={{height:45,width:200, backgroundColor: 'lightgreen', borderRadius:50 }}>{props.learn}{props.css1}{props.javabutton}</button><br></br><br></br>

{props.button}  {props.br}
{props.br}<button style={{height:45,width:200, backgroundColor: 'black', borderRadius:50, color:'white' }}>{props.html}{props.css2}{props.javaref}</button><br></br><br></br>
<button style={{height:45,width:200, backgroundColor: 'pink', borderRadius:50 }}>{props.get} {props.css3}{props.javaget}</button>

     </div>
     
    </>
  )
}

export default page