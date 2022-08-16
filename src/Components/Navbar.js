import React from "react";
import { Link } from "react-router-dom";
import { navlinks } from "./NavLinks";
import * as Icons from "react-icons/fa";
import Buttons from "./buttons";

function Navbar (){

    // hold the view in a state
    const [mobileView, setMobileView] = React.useState(false);
    const [sidebar, setSidebar] = React.useState(false);


    React.useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 1065){
                setMobileView(true);
            } else {
                setMobileView(false);
            }
        }

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize);
          };
    }, [])
      
    return(

        <>
        <nav className="navbar">
        <Link to= "/" className="navbar-logo">
        Snap

        </Link>
        {/* use conditional rendering to show the menu items*/}

        {!mobileView && <ul className="nav-items">
        {navlinks.map(item => {
            return(
                <li key={item.id} className={item.nName}>
                    <Link to={item.path}>{item.Title}</Link>
                </li>
            )
        })}

        </ul>}

{/* conditonally render the buttons too */}
       {!mobileView && <Buttons />}

       {mobileView && (
        <div className="toggle-sidebar">
            {sidebar ? <Icons.FaTimes /> : <Icons.FaBars /> }
            
        </div>
)}
     
           </nav>

        </>
    )
}

export default Navbar