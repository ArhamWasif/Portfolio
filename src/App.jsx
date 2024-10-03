import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.scss'
import { Navbar } from './Components/Navbar/Navbar'

import Pract from './Pract'
import Hero from './Components/Hero/Hero'
import Parallax from './Components/Parallax/Parallax'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div><Pract/></div>
    <>
     <div >
      <section className='container3' id='Homepage'><Navbar/>
      <Hero/></section>
     
      <section id='Parallax'><Parallax/></section>
      <section id='Services'> <Services/></section>
      {/* <section id='portfolio'></section> */}
      <Portfolio/>

      <section id='Contact'><Contact/></section>
    
       </div>
    </>
  )
}

export default App
