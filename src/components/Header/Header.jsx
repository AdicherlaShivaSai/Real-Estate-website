import React, { useState } from 'react';
import "./Header.css";
import {BiMenuAltRight} from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const getMenuStyles =(menuOpened)=>{
        if(document.documentElement.clientWidth <= 800){
            return {right: !menuOpened && "-100%"}
        }
    }
    return(

        <section className='h-wrapper'>
            <div className='flexCenter paddings innerwidth h-container'>
                <img src="./logo.png" alt='logo' width={100}/>
                <OutsideClickHandler 
                onOutsideClick={()=>
                    setMenuOpened(false)
                }
                >
                <div className='flexCenter h-menu'
                style={getMenuStyles(menuOpened)}>
                    <a href="#residence">Residencies</a>
                    <a href="#ourValue">Our Value</a>
                    <a href="#button">Contact Us</a>
                    <a href="#getStarted">Get started</a>
                    <a href="#button"><button className='button'><a href=""></a>Contact</button></a>
                </div>
                </OutsideClickHandler>
                <div className="menu-icons" onClick={()=>setMenuOpened((prev)=>!prev)}>
                    <BiMenuAltRight size={30}/>
                </div>
            </div>
        </section>

    )

}

export default Header;