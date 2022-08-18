import React from "react";
import { Link } from "react-router-dom";
import { navlinks } from "./NavLinks";
import * as Icons from "react-icons/fa";
import Buttons from "./buttons";

function Navbar (){

    // hold the view in a state
    const [mobileView, setMobileView] = React.useState(false);
    const [sidebar, setSidebar] = React.useState(false);

    // a useEffect for when the view is less than 1065
    React.useEffect(() => {
        if(window.innerWidth < 1065){
            setMobileView(true);
        }
    }, [])

    // use useEffect to determine the behavior of the state when screen size changes.
    // a tenary operator can also do this but i got a bit confused lol.
    React.useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 1065){
                setMobileView(true);
                
            } 
      
            else {
                setMobileView(false);

            }

        }

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize);
          };

          
    }, [])
      
// create a switching function for the hamburger menu
        function Hamburger() {
            setSidebar( prevSidebar => !prevSidebar)
        }


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

{/* conditonally render the div for the Hamburger that shows in mobileview */}
       {mobileView && (
        <div className="toggle-sidebar">

            {/* another conditionall rendering. If the sidebar is true, show the icon for the hambuger else, 
            
            show the close button.
            next, pass the onClick functions so that the sidebar state toggles between true and false
            */}


            {sidebar ? <Icons.FaTimes className="hamburger-toggle" onClick={Hamburger} /> : <Icons.FaBars className="hamburger-toggle" onClick={Hamburger} /> }
            
        </div>
)}
   

           </nav>

           <div className={sidebar ? "sidebar active" : "sidebar"}>

<ul className="side-items">
   {navlinks.map(item => {
       return(
           <li key={item.id} className={item.sName} onClick={Hamburger}>
               <Link to={item.path}>{item.Title}</Link>
           </li>
       )
   })}

   </ul>
<Buttons Hamburger={Hamburger} />
</div>
        </>
    )
}

export default Navbar;