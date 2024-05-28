import React, { useRef } from 'react';
import  '../styles/videos.css';
import { motion } from "framer-motion";
import VideoPre from './VideoPre';

function Videos() {
    const c1 = [
        "https://mega.nz/embed/ZPsjwI4C#X7cUgxp2lA7qw8tOAbBmCT6DLwD5UkPT6-dHS819eF8",
        "/videos/v7 (2).mp4",
        "/videos/v7 (3).mp4",
        "/videos/v7 (4).mp4",
        "/videos/v7 (5).mp4",
        "/videos/v7 (6).mp4"
    ]
    const c2 = [
        "/videos/v7 (7).mp4",
        "/videos/v7 (8).mp4",
        "/videos/v7 (9).mp4",
        "/videos/v7 (10).mp4",
        "/videos/v7 (11).mp4",
        "/videos/v7 (12).mp4"
    ]
    const c3 = [
        "/videos/v7 (13).mp4",
        "/videos/v7 (14).mp4",
        "/videos/v7 (15).mp4",
        "/videos/v7 (16).mp4",
        "/videos/v7 (17).mp4",
        "/videos/v7 (18).mp4"
    ]
    return (
        <div className='main2'>
            <div className='videos'>
                <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='if'
                ><motion.h1
                    initial={{ x: '-100%', opacity: "0" }}
                    animate={{ x: '0%', opacity: '1' }}
                    transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
                >Videos Shoots</motion.h1></motion.div>
                <VideoPre c1={c1} c2={c2} c3={c3}/>
            </div>
        </div>
    );
}

export default Videos;
