"use client"
import Link from 'next/link';
import Image from 'next/image';
import { slide as Menu } from 'react-burger-menu'
import { Fade as Hamburger } from 'hamburger-react'
import {useState, useEffect} from 'react';
import classNames from 'classnames';

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
    borderTop: '8px solid rgb(24 31 20);',
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
      padding: '12px 10px',
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
  
    
    return (
        <>
         <nav className="flex h-[147px] z-50 justify-between w-full flex-row backdrop-blur-lg  bg-black bg-opacity-75 fixed top-0 left-0 border-b-8 border-[#5DA33D]">
            <div className="m-6 lg:m-[1.9rem] lg:ml-12"><Link href="/"><Image src="/media/images/orp-logo.png" priority={true} width={271} height={78} alt="Logo"/></Link></div>
            <div className="flex relative mx-32 self-center">
            <Hamburger size={27} color="#fff" toggled={isOpen} toggle={setOpen} onToggle={toggled => {handleMenuClick()}}/>
            </div>
        </nav>
        <div className="flex relative">
                <Menu onStateChange={ isMenuOpen } isOpen={menuOpen} styles={styles} right noOverlay>
                    <Link legacyBehavior passHref href="/"><a className={classNames({ active: activePath ===('')}) || classNames({ active: activePath ===('/')})} onClick={() => handleSetActivePath('/')}><span>Home</span></a></Link>
                    <Link legacyBehavior passHref href="/soil"><a className={classNames({ active: activePath ===('/soil') })} onClick={() => handleSetActivePath('/soil')}><span>Soil</span></a></Link>
                    <Link legacyBehavior passHref href="/mold"><a className={classNames({ active: activePath ===('/mold') })} onClick={() => handleSetActivePath('/mold')}><span>Mold</span></a></Link>
                    <Link legacyBehavior passHref href="/sewage"><a className={classNames({ active: activePath ===('/sewage') })} onClick={() => handleSetActivePath('/sewage')}><span>Sewage</span></a></Link>
                    <Link legacyBehavior passHref href="/agriculture"><a className={classNames({ active: activePath ===('/agriculture') })} onClick={() => handleSetActivePath('/agriculture')}><span>Agriculture</span></a></Link>
                    <Link legacyBehavior passHref href="/projects"><a className={classNames({ active: activePath ===('/projects') })} onClick={() => handleSetActivePath('/projects')}><span>Projects</span></a></Link>
                    <Link legacyBehavior passHref href="/downloads"><a className={classNames({ active: activePath ===('/downloads') })} onClick={() => handleSetActivePath('/downloads')}><span>Downloads</span></a></Link>
                    <Link legacyBehavior passHref href="/contact"><a className={classNames({ active: activePath ===('/contact') })} onClick={() => handleSetActivePath('/contact')}><span>Contact</span></a></Link>
                </Menu>
                </div>
        </>
    )
  }