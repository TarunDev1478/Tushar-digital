import React, { useState } from 'react'
import { motion } from "framer-motion";
import '../styles/prewed.css'
import Images from './Images';
import VideoPre from './VideoPre';
function PreWed() {
    const [currentTab, setCurrentTab] = useState('images');
    const imagesc1 = [
        '/images/01.jpg',
        '/images/02.jpg',
        '/images/03.jpg',
        '/images/04.jpg',
        '/images/05.jpg',
        '/images/06.jpg',
        '/images/07.jpg',
        '/images/08.jpg',
        '/images/09.jpg',
        '/images/10.jpg',
        '/images/11.jpg',
        '/images/12.jpg',
        '/images/13.jpg',
        '/images/14.jpg',
        '/images/15.jpg',
        '/images/16.jpg',
        '/images/17.jpg',
        '/images/18.jpg',
        '/images/19.jpg',
        '/images/20.jpg',
        '/images/21.jpg',
    ];
    const imagesc2 = [
        '/images/22.jpg',
        '/images/23.jpg',
        '/images/24.jpg',
        '/images/25.jpg',
        '/images/26.jpg',
        '/images/27.jpg',
        '/images/28.jpg',
        '/images/29.jpg',
        '/images/30.jpg',
        '/images/31.jpg',
        '/images/32.jpg',
        '/images/33.jpg',
        '/images/34.jpg',
        '/images/35.jpg',
        '/images/36.jpg',
        '/images/37.jpg',
        '/images/38.jpg',
        '/images/39.jpg',
        '/images/40.jpg',
        '/images/41.jpg',
        '/images/42.jpg',
        '/images/71.jpg',
        '/images/72.jpg',
        '/images/73.jpg',
        '/images/74.jpg',
    ];
    const imagesc3 = [
        '/images/43.jpg',
        '/images/44.jpg',
        '/images/45.jpg',
        '/images/46.jpg',
        '/images/47.jpg',
        '/images/48.jpg',
        '/images/49.jpg',
        '/images/51.jpg',
        '/images/52.jpg',
        '/images/53.jpg',
        '/images/54.jpg',
        '/images/55.jpg',
        '/images/56.jpg',
        '/images/57.jpg',
        '/images/58.jpg',
        '/images/59.jpg',
        '/images/60.jpg',
        '/images/61.jpg',
        '/images/62.jpg',
        '/images/63.jpg',
        '/images/64.jpg',
        '/images/65.jpg',
        '/images/66.jpg',
        '/images/67.jpg',
        '/images/68.jpg',
        '/images/69.jpg',
        '/images/70.jpg',
    ];
    const c1 = [
        "/videos/v7 (1).mp4",
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
        <div>
            <div className="main3">
                <div className="pre-wed">
                    <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='if'
                    ><motion.h1
                        initial={{ x: '-100%', opacity: "0" }}
                        animate={{ x: '0%', opacity: '1' }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
                    >Pre Wedding</motion.h1></motion.div>
                    <div className="options">
                    <a onClick={()=>{setCurrentTab('images')}} >Images</a>
                    <a onClick={()=>{setCurrentTab('videopre')}} >Videos</a>
                    </div>
                </div>
                {currentTab=='images' && <Images imagesc1={imagesc1} imagesc2={imagesc2} imagesc3={imagesc3}/> }
                {currentTab=='videopre' && <VideoPre c1={c1} c2={c2} c3={c3}/> }
            </div>
        </div>
    )
}

export default PreWed
