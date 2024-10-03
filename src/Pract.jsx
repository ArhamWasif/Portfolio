import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Prac.scss";
const Pract = () => {
  const [open, setOpen] = useState(false);
  //   const variant = {
  //     visible: {
  //       opacity: 1,
  //       x: 800,
  //       transition: { type: "spring", stiffness: 2000 },
  //     },
  //     hidden: { opacity: 0 },
  //   };
  const variants = {
    visible: {
      opacity: 1,
      y: 100,
      transition: { staggerChildren: 1 },
    },
    hidden: { opacity: 0 },
  };
  const items = ["items1", "items2", "items3", "items4"];
  return (
    <div>
      <div className="practice">
        {/* <motion.div
          className="box"
        //   initial={{ opacity: 0, scale: 0.5 }}
        //   transition={{ duration: 5 }}
        //   animate={{ opacity: 1, x: 200 }}
          // whileHover={{opacity:1,scale:2}}
          variants={variant}
          animate={open ? "visible" :"hidden"}
            

          
        ></motion.div>
        <button onClick={()=>setOpen(prev=>!prev)}>Click Me</button> */}
        <motion.ul initial="hidden" animate="visible" variants={variants} >
          {items.map((item) => (
            <motion.li variants={variants} key={item}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Pract;
