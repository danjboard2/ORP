"use client"
import Link from 'next/link';
import Image from 'next/image';
import { slide as Menu } from 'react-burger-menu'
import { Fade as Hamburger } from 'hamburger-react'
import {useState, useEffect} from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';


var isMenuOpen = function(state:any) {
    return state.isOpen;
  };

  var styles:any = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px',
      display:'none'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      display:'none'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
     height: 'auto',
      top: '139px'
    },
    bmMenu: {
      padding: 'none',
      fontSize: '1.15em',
      display: 'flex',
      background: 'rgba(0, 0, 0, 0.75)',
    backdropFilter: 'blur(5px)',
    borderTop: '8px solid rgb(24 31 20)',
    borderRadius: '0px 0px 8px 8px'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0em',
      display: 'flex',
      flexFlow: 'column',
      width: '100%'
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      left: 0
    }
  }


export default function NavBar(this:any) {
  
    const [isOpen, setOpen] = useState(false)

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
    };
    const [activePath, setActivePath] = useState('/');

    const handleSetActivePath = (pathname:any) => {
      setActivePath(pathname);
    };
  
    useEffect(() => {
      setActivePath(window.location.pathname);
    }, []);
  {/* Get the current route */}
const currentRoute = usePathname();
    
    return (
        <>
         <nav className="flex h-[147px] z-50 w-full flex-row backdrop-blur-lg  bg-black bg-opacity-75 fixed top-0 left-0 border-b-8 border-[#5DA33D]">
            <div className="flex w-full max-w-[2000px] m-auto justify-between">
              <div className="m-6 lg:m-[1.9rem] lg:ml-12"><Link href="/"><Image src="/media/images/orp-logo.png" priority={true} width={271} height={78} alt="Logo"/></Link></div>
              <div className="flex relative mx-32 self-center">
              <Hamburger size={27} color="#fff" toggled={isOpen} toggle={setOpen} onToggle={toggled => {handleMenuClick()}}/>
              </div>
            </div>
        </nav>
        <div className="flex relative">
                <Menu onStateChange={ isMenuOpen } isOpen={menuOpen} styles={styles} right noOverlay>
                    <Link href="/"  className={currentRoute === "/"  ? "active"  : ""}><span>Home</span></Link>
                    <Link href="/soil"  className={currentRoute === "/soil"  ? "active"  : ""}><span>Soil</span></Link>
                    <Link href="/mold"  className={currentRoute === "/mold"  ? "active"  : ""}><span>Mold</span></Link>
                    <Link href="/sewage"  className={currentRoute === "/sewage"  ? "active"  : ""}><span>Sewage</span></Link>
                    <Link href="/projects"  className={currentRoute === "/projects"  ? "active"  : ""}><span>Projects</span></Link>
                    <Link href="/downloads"  className={currentRoute === "/downloads"  ? "active"  : ""}><span>Downloads</span></Link>
                    <Link href="/contact"  className={currentRoute === "/contact"  ? "active"  : ""}><span>Contact</span></Link>
                </Menu>
                </div>
        </>
    )
  }