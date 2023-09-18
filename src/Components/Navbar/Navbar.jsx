import { useState } from "react";
import LInk from "../Link/LInk";
import {  AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {

    const [open,setOpen] = useState ()


    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' },
      ];
      

      
    return (
        <nav className="text-black bg-yellow-200 p-6">
          <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
            {

                open === true? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu className=" "></AiOutlineMenu>

            }
          
          </div>
            <ul className={`md:flex duration-1000 absolute md:static bg-yellow-100 px-6  ${open ? 'top-16': '-top-60'}`}>
            {

                routes.map(route => <LInk key={route.id} route={route}></LInk>)

}
            </ul>
        </nav>
    );
};

export default Navbar;