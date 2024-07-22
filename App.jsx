import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greeting from './componenet/Greeting'
import Page from './componenet/Page'
import './App.css'
import  './App1.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
    <Greeting/>
    <Page name = "HTML" para = " The language for building web pages"  button = {<button  style={{height:45,width:200, backgroundColor: 'LightYellow', borderRadius:50 }}> Video Tutorial</button>} learn = "Learn HTML" html= "HTMLReference" get= "GetCertified" br= {<br></br>}/>
    <Page css="CSS" head= "The language for styling web pages" css1= "LearnCSS" css2="CSS Reference" css3= "GetCertified" />
     <Page clasName="java"  java= "JavaScript" javapara= "The language for programming web pages" javabutton= "Learn JAVA" javaref="CSS Reference" javaget= "GetCertified"/>
      
      
     <div className='div5'>
        <br />
      <h1 className='main2-4'>Python</h1>   
      <p className='p3-4'><b>A popular programming language</b></p>

    <ul>
      <br />
     <br /><br />
     <li> <span className='sp-2'>Python Reference</span> </li>
     <br /><br />
    <li>  <span className='sp-3'>HTML Refrence </span></li>
    <br /><br />
     <li> <span className='sp-4'>Get Certified</span></li>
     <br /><br /><br />
    </ul>
   </div>



      <div className='div6'>
        <br />
      <h1 className='main2-5'>SQL</h1>   
      <p className='p3-5'><b>A language for accessing databases</b></p>

    <ul>
      <br />
     <br /><br />
     <li> <span className='sp-2'>Learn SQL</span> </li>
     <br /><br />
    <li>  <span className='sp-3'>SQL Refrence </span></li>
    <br /><br />
     <li> <span className='sp-4'>Get Certified</span></li>
     <br /><br /><br />
    </ul>
   </div>









   <div class="container">
        <div class="card" id="php">
            <h2>PHP</h2>
            <p>A web server programming language</p>
            <button>Learn PHP</button>
        </div>
        <div class="card" id="jquery">
            <h2>jQuery</h2>
            <p>A JS library for developing web pages</p>
            <button>Learn jQuery</button>
        </div>
        <div class="card" id="java">
            <h2>Java</h2>
            <p>A programming language</p>
            <button>Learn Java</button>
        </div>
        <div class="card" id="cpp">
            <h2>C++</h2>
            <p>A programming language</p>
            <button>Learn C++</button>
        </div>
        <div class="card" id="w3css">
            <h2>W3.CSS</h2>
            <p>A CSS framework for faster and better responsive web pages</p>
            <button>Learn W3.CSS</button>
        </div>
        <div class="card" id="bootstrap">
            <h2>Bootstrap</h2>
            <p>A CSS framework for designing better web pages</p>
            <button>Learn Bootstrap</button>
        </div>
    </div>



<button className='main-btn'>Search</button>  
      
      
      
      
      
      
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
