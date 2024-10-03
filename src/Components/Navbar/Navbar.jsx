import React from 'react'
import './Navbar.scss'
import { motion } from "framer-motion";     
import Sidebar from '../Sidebar/Sidebar';
export const Navbar = () => {
  const variant = {
    visible: { opacity: 1 ,x:800,transition:{type:'spring',stiffness:2000}},
    hidden: { opacity: 0 },
  };
  return (
    <div className='navbar'> 
    <Sidebar/>
     
       <div className='wrapper'>
       {/* <motion.span className='titlenavi'
        variants={variant}
        animate={open ? "visible" :"hidden"}
       
       >Arham Wasif</motion.span > */}
     
       </div>




    </div>
  )
}
