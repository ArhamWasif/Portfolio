import "./Portfolio.scss";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Social Media App",
    img: "/pic3.png",
    desc: "Discover a vibrant community and stay connected like never before with CawSocial, the ultimate social media platform designed to bring people closer.Whether you’re sharing your latest adventure, catching up with friends, or discovering new interests, ",
  },
  {
    id: 2,
    title: "Food Ordering System",
    img: "pic1.png",
    desc: "Implemented responsive design for optimal user experience.Led the development of a comprehensive Food Ordering System,handling user authentication,menu management,and order processing.Millions of customers can register the account and want to order the order on a website with their convenience.",
  },
  {
    id: 3,
    title: "Portfolio App",
    img: "porfolio.png",
    desc: "Ensured seamless navigation without page reloads using React Router in a Single Page Application (SPA).Used CSS Flexbox and Grid along with media queries to ensure compatibility across various devices for a responsive design.Fetched and displayed content dynamically state management with React hooks. ",
  },
  // {
  //   id: 4,
  //   title: "React Commerce",
  //   img: "https://images.pexels.com/photos/101841/pexels-photo-101841.jpeg",
  //   desc: "lorem ios",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    // <section ref={ref} className="single-item">
    //   <div className="container">
    //     <div className="wrapper">
    //       <div className="imgcont">
    //         <img src={item.img} alt={item.title} />
    //       </div>
    //       <motion.div className="textcontainer1" style={{ y }}>
    //        <div className="textcontainer">
    //         <h2>{item.title}</h2>
    //         <p>{item.desc}</p>
    //         <button>See Demo</button>
    //         </div>
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>
    <section ref={ref} className="single-item">
      <div className="container">
        <div className="wrapper">
          <div className="imgcont">
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textcontainer" style={{ y }}>
            <h1 className="title2">{item.title}</h1>
            <p className="desc">{item.desc}</p>
            <button className="btn11">See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressbar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
