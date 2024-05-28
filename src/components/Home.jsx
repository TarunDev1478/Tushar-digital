import { React, useRef } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Detail1 from "./Detail1"
import { Link } from 'react-router-dom'
import "../styles/home.css"
import Slider from './Slider';
import Detail2 from './Detail2';
import Detail3 from './Detail3';

function Home(props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const boxVariant = {
        visible: { opacity: '1', transition: { duration: 1, ease: 'easeInOut', delay: 2 } },
        hidden: { opacity: '0.01' },
    }
    const homeVariant = {
        visible: { height: '100vh', transition: { duration: 0.6, ease: 'easeInOut', delay: 1 } },
        hidden: { height: ' 0vh' },
    }
    const findVariant = {
        hidden: { y: "100%", opacity: 0.01 },
        visible: { y: '0%', opacity: 1, transition: { duration: 1, ease: 'easeInOut', delay: 1.5 } },
    }
    const videoVariant = {
        hidden: { width: '0px' },
        visible: { width: '1000px', transition: { duration: 1, ease: 'easeInOut', delay: 1.5 } }
    };
    const footerVariant = {
        hidden: { x: '-100%' },
        visible: { x: '0%', transition: { duration: 1, ease: 'easeInOut' } }
    };
    const footerVariant1 = {
        hidden: { x: '-100%' },
        visible: { x: '0%', transition: { duration: 1, ease: 'easeInOut' } }
    };
    const navVariant = {
        hidden: { opacity: '0.01' },
        visible: { opacity: '1', transition: { duration: 1, ease: 'easeInOut', delay: 1 } },
    }
    const elementRef = useRef(null);


    const next2 = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft += 768;
        }
    };
    const pre2 = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft -= 768;
        }
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const handleCheckboxChange = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className='main'>
                <div className="hello"><h1>Welcome To Tushar Digital Studio</h1></div>
                <motion.div
                    variants={homeVariant}
                    initial="hidden"
                    animate="visible" className='home'>
                    <motion.h1 variants={findVariant}
                        initial="hidden"
                        animate="visible" className='find'>
                        <div className='h'>
                            FIND<br />YOURSELF<br />HERE
                        </div>
                        <button id='book'>Book Now</button>
                    </motion.h1>
                    <AnimatePresence>
                        {menuOpen && (
                            <div
                                className="hamburger"
                            >
                                <motion.div
                                    key="nav-image-container"
                                    initial={{ height: '0vh' }}
                                    animate={{ height: '100vh' }}
                                    exit={{ y: '100%', transition: { duration: 1, ease: 'easeInOut' } }}
                                    transition={{ duration: 1, ease: 'easeInOut' }}
                                    className="nav_image"
                                >

                                    <div
                                        key="background-container"
                                        className="background"
                                    >
                                        <div className='nav-hello'>Tushar Digital Studio</div>
                                        <motion.div
                                            key="f-nav-container"
                                            initial={{ opacity: '0.01', x: '-25%' }}
                                            animate={{ opacity: '1', x: '0%' }}
                                            exit={{ x: '-25%', transition: { duration: 1, ease: 'easeInOut' } }}
                                            transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                                            className="f-nav"
                                        >

                                            <Link to='/candid'>1.Candid</Link>
                                            <Link to='/videos'>2.Videos</Link>
                                            <Link to='/pre'>3.Pre Wedding</Link>
                                            <a href='/'>4.Book Now</a>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    key="navigation-container"
                                    initial={{ y: '+100%', height: '100vh' }}
                                    animate={{ height: '100vh', y: '0%' }}
                                    exit={{ height: '0vh' }}
                                    transition={{ duration: 1, ease: 'easeInOut' }}
                                    className="navigation"
                                >
                                    <motion.div
                                        key="f-nav1-container"
                                        initial={{ opacity: '0.01', x: '-50%' }}
                                        animate={{ opacity: '1', x: '0%' }}
                                        exit={{ opacity: '0.01', x: '-50%' }}
                                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                                        className="f-nav1"
                                    >
                                        <a href='/'>1.Home</a>
                                        <Link to='/about'>2.About</Link>
                                        <a href='/'>3.Contact Us</a>
                                        <a href='/'>4.Book Now</a>
                                    </motion.div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                    <motion.div variants={boxVariant}
                        initial="hidden"
                        animate="visible" className='nav'>
                        <h1>Tushar Digital Studio</h1>
                        <li>
                            <a href='/'>Contact Us</a>
                            <a href='/'>Book Now</a>
                        </li>
                        <label htmlFor="circularmenu" className="menu-icon" onClick={handleCheckboxChange}>
                            <div class="line line-1" style={{ transform: menuOpen ? ' rotateZ(-405deg) translate(-0.1rem, 0.6rem)' : '' }}></div>
                            <div class="line line-2" style={{ opacity: menuOpen ? '0' : '1' }}></div>
                            <div class="line line-3" style={{ transform: menuOpen ? 'rotateZ(405deg) translate(-0.15rem, -0.6rem)' : '' }}></div>
                        </label>
                    </motion.div>

                    <motion.div
                        variants={videoVariant}
                        initial="hidden"
                        animate="visible"
                        className='video-container'>
                        <motion.div
                            className='video'
                        >
                            <video preload="auto" autoPlay loop muted="muted" volume="0">
                                <source src="/videos/v3.mp4" type="video/mp4" />
                            </video>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.nav

                id="navbar" className={props.showNav ? 'navbar' : 'hidden'}>
                <div className="navnav" style={{ backgroundColor: menuOpen ? 'transparent' : 'white', display: menuOpen ? 'none' : 'flex' }}>
                    <h1>Tushar Digital Studio</h1>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="#services">Contact US</Link></li>
                        <li><a href="#services">Book Now</a></li>
                    </ul>
                </div>
                <input type="checkbox" id="circularmenu" />
                <label htmlFor="circularmenu" className="menu-icon" onClick={handleCheckboxChange} style={{ top: menuOpen ? '50px' : '' }}>
                    <div class="line line-1" style={{ transform: menuOpen ? ' rotateZ(-405deg) translate(-0.1rem, 0.6rem)' : '', backgroundColor: menuOpen ? 'white' : '#7a726f' }}></div>
                    <div class="line line-2" style={{ opacity: menuOpen ? '0' : '1', backgroundColor: '#7a726f' }}></div>
                    <div class="line line-3" style={{ transform: menuOpen ? 'rotateZ(405deg) translate(-0.15rem, -0.6rem)' : '', backgroundColor: menuOpen ? 'white' : '#7a726f' }}></div>
                </label>
            </motion.nav>
            <Detail1 />
            <Slider />
            <Detail2 />
            <Detail3 />
            <div className='detail4'>
                <div className='events'>
                    <h1 id='head'>What we do?</h1>
                    <div className='element' ref={elementRef}>
                        <div className='event' >
                            <img src="/images/wedding.jpg" alt="wedding" />
                            <h1>Wedding</h1>
                            Capturing Love in Every Frame: Your Wedding, Our Artistry. Turning Moments into Lifelong Memories Through the Lens of Eternity."
                        </div>
                        <div className='event' >
                            <img src="/images/birthday.jpg" alt="wedding" />
                            <h1>Birthdays</h1>
                            From cake to candles, laughter to love, we specialize in turning birthday moments into timeless memories. Picture-perfect celebrations, one click at a time.
                        </div>
                        <div className='event' >
                            <img src="/images/drone.jpg" alt="wedding" />
                            <h1>Drone Photography</h1>
                            Soaring Heights, Capturing Dreams: Elevate Your Moments with Aerial Elegance. Drone Photography Redefining Perspectives, One Flight at a Time
                        </div>
                        <div className='event' >
                            <img src="/images/filmmmaking.jpg" alt="wedding" />
                            <h1>Filmaking</h1>
                            Scripting Stories, Crafting Emotions: Lights, Camera, Memories! Transforming Every Frame into a Cinematic Journey, One Scene at a Time.
                        </div>
                        <div className='event' >
                            <img src="/images/newborn.jpg" alt="wedding" />
                            <h1>Newborn Photoshoots</h1>
                            Tiny Toes, Endless Joy: New Beginnings Captured in Every Frame. Cherishing the Innocence, Crafting Memories of Your Little Miracle's First Moments.
                        </div>
                        <div className='event' >
                            <img src="/images/photoshoot.jpg" alt="wedding" />
                            <h1>Photoshoots</h1>
                            Every Click Tells a Story: Unveiling Beauty, Capturing Essence. Your Moments, Our Art – Photoshoots That Paint Your Tale in Light and Shadow.
                        </div>
                    </div>
                    <div className='buttons2'>
                        <button id='pre2' onClick={pre2}><i className="bi bi-arrow-left" /></button>
                        <button id='next2' onClick={next2}><i className="bi bi-arrow-right" /></button>
                    </div>
                </div>
            </div>
            <div
                className='footer'>
                <motion.div
                    variants={footerVariant1}
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className='upper'>
                    <h1>Feel free to contact us, get details from box given below</h1>
                </motion.div>
                <motion.div
                    variants={footerVariant}
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className='lower'>
                    <div id="logo" className='foot'></div>
                    <div id="social" className='foot'>
                        <i class="bi bi-instagram"><p>Instagram</p></i>
                        <i class="bi bi-twitter"><p>Twitter</p></i>
                        <i class="bi bi-meta"><p>Meta</p></i>
                    </div>
                    <div id="phno" className='foot'>
                        <h6>+91-8887904435<br />+91-7985706039<br />+91-9935821924</h6>
                    </div>
                    <div id="email" className='foot'>
                        <h6>tarunkumar147800@gmail.com<br />sadsakj@gamil.com<br />kfjlaksjfkla@gamil.com</h6>
                    </div>
                    <div id="address" className='foot'>
                        <h6>
                            Tushar Digital studio,<br />116/666 Keshav Nagar,<br />Rawatpur gaon,<br />Kanpur
                        </h6>
                    </div>
                </motion.div>
            </div>
        </div>
    )

}

export default Home;