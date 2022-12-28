import React, {useState, useEffect} from "react";
import { Box } from "@mui/material";
import logo from "../assets/icons/payloro.png";
import { navbarData } from "../utils/helper";
import Button from './Button';

const Navbar = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  }, [])

  return (
    <Box className={`${bg ? 'bg-primaryRed h-24' : 'bg-primaryRed h-28'} flex items-center fixed top-0 w-full text-black z-10 transition-all duration-300`}>
      <Box className="container mx-auto flex justify-between items-center h-full">
        <img src={logo} className="h-[80px]" alt='logo'/>
        <ul className='flex gap-6'>
          {navbarData.map((item, index) => {
            return <a href={item.link}><li key={index} className="font-avenirmedium text-sm text-white uppercase cursor-pointer hover:text-salmon">{item.title}</li></a>
          })}
        </ul>
        <Button buttonName={'Register'} buttonStyle={'text-sm font-avenirheavy uppercase bg-white text-primaryRed px-4 py-2 rounded-xl hover:bg-black hover:text-white duration-300'}/>
      </Box>
    </Box>
  );
};

export default Navbar;
