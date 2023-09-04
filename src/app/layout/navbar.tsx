"use client"
import Link from 'next/link';
import Image from 'next/image';
import { slide as Menu } from 'react-burger-menu'
import { Fade as Hamburger } from 'hamburger-react'
import {useState} from 'react';

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
      padding: '1.5em',
      fontSize: '1.15em',
      display: 'flex',
      background: 'rgba(0, 0, 0, 0.75)',
    backdropFilter: 'blur(5px)',
    borderTop: '8px solid rgb(94 163 71)'
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
      padding: '12px 10px',
      borderBottom: '1px solid #fff',
      color: '#fff',
      fontSize: '20px'
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
  
    
    return (
        <>
         <nav className="flex h-[147px] z-50 justify-between w-full flex-row backdrop-blur-lg  bg-black bg-opacity-75 fixed top-0 left-0 border-b-8 border-[#5DA33D]">
            <div className="m-6 lg:m-[1.9rem] lg:ml-12"><Image src="/media/images/orp-logo.png" priority={true} width={271} height={78} alt="Logo"/></div>
            <div className="flex relative mx-32 self-center">
            <Hamburger size={80} color="#fff" toggled={isOpen} toggle={setOpen} onToggle={toggled => {handleMenuClick()}}/>
            </div>
        </nav>
        <div className="flex relative">
                <Menu onStateChange={ isMenuOpen } isOpen={menuOpen} styles={styles} right noOverlay>
                    <Link href="/">Home</Link>
                    <Link href="/soil/">Soil</Link>
                    <Link href="/mold/">Mold</Link>
                    <Link href="/sewage/">Sewage</Link>
                    <Link href="/agriculture/">Agriculture</Link>
                    <Link href="/projects/">Projects</Link>
                    <Link href="/downloads/">Downloads</Link>
                    <Link href="/contact/">Contact</Link>
                </Menu>
                </div>
        </>
    )
  }