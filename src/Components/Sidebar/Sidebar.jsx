import React, { useState } from 'react'
import ToggleButton from './ToggleButton/ToggleButton'
import Links from './Links/Links'
import { motion } from "framer-motion";   
import './Sidebar.scss'
const Sidebar = () => {
  const [open,setOpen]=useState(false)
  const variants={
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        stiffness:20,
        type:"spring"
      },
    },
    closed:{
      transition:{
      stiffness:400,
      damping:40,
      delay:0.5,
      type:"spring"},
      clipPath:"circle(30px at 50px 50px)"
    }
}
  return (
    <div>
        <motion.div className='sidebar' animate={open ? "open":"closed"}>
            <motion.div className='bg' variants={variants}>
                <Links/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    </div>
  )
}

export default Sidebar