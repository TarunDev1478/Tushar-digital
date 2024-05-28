import React from 'react';
import { motion } from "framer-motion";
import '../styles/candid.css'
function Candid() {
    const openNext = (event) => {
        const backgroundImage = window.getComputedStyle(event.target).getPropertyValue('background-image');
        const urlMatch = backgroundImage.match(/url\(["']?(.*?)["']?\)/);
        const nimg = urlMatch ? urlMatch[1] : null;
        const opens = document.getElementById('fully');
        opens.style.display = 'none';
        const opens1 = document.getElementById('open');
        opens1.style.display = 'none';
        document.body.style.overflow = 'hidden';
        opens.style.display = 'flex';
        opens1.style.display = 'flex';
        const imageUrl = nimg;
        const newImage = document.createElement('img');
        newImage.src = imageUrl;
        newImage.onload = function () {
            const imageDiv = document.getElementById('img-dis');
            const maxWidth = imageDiv.clientWidth;
            const maxHeight = imageDiv.clientHeight;
            const imgWidth = newImage.width;
            const imgHeight = newImage.height;
            let newWidth, newHeight;
            if (imgWidth / maxWidth > imgHeight / maxHeight) {
                newWidth = maxWidth;
                imageDiv.style.left = '220px'
                imageDiv.style.marginTop = '85px'
                newHeight = (imgHeight / imgWidth) * maxWidth;
            } else {
                newHeight = maxHeight;
                imageDiv.style.left = '332px'
                imageDiv.style.marginTop = '1px'
                newWidth = (imgWidth / imgHeight) * maxHeight;
            }
            newImage.style.width = `${newWidth}px`;
            newImage.style.height = `${newHeight}px`;
            imageDiv.innerHTML = '';
            imageDiv.appendChild(newImage);
        }
    }
    const open = (index, event) => {
        document.body.style.overflow = 'hidden';
        const opens = document.getElementById('fully');
        opens.style.display = 'flex';
        const opens1 = document.getElementById('open');
        opens1.style.display = 'flex';
        const imageUrl = event.target.src;
        const imageKey = index;
        const newImage = document.createElement('img');
        newImage.src = imageUrl;
        const next_n = document.getElementById('next-n');
        for (let i = 0; i < 10; i++) {
            const imgdiv = document.createElement('div');
            imgdiv.classList.add('next');
            imgdiv.addEventListener('click', (event) => openNext(event));
            if (imageKey + i < 10)
                imgdiv.style.background = `url(${imagesc1[imageKey + i]})center center / cover no-repeat`;
            else
                imgdiv.style.background = `url(${imagesc1[imageKey + i - 10]})center center / cover no-repeat`;
            next_n.appendChild(imgdiv);
        }
        newImage.onload = function () {
            const imageDiv = document.getElementById('img-dis');
            const maxWidth = imageDiv.clientWidth;
            const maxHeight = imageDiv.clientHeight;
            const imgWidth = newImage.width;
            const imgHeight = newImage.height;
            let newWidth, newHeight;
            if (imgWidth / maxWidth > imgHeight / maxHeight) {
                newWidth = maxWidth;
                imageDiv.style.left = '220px'
                imageDiv.style.marginTop = '85px'
                newHeight = (imgHeight / imgWidth) * maxWidth;
            } else {
                newHeight = maxHeight;
                imageDiv.style.left = '332px'
                imageDiv.style.marginTop = '1px'
                newWidth = (imgWidth / imgHeight) * maxHeight;
            }
            newImage.style.width = `${newWidth}px`;
            newImage.style.height = `${newHeight}px`;
            imageDiv.innerHTML = '';

            imageDiv.appendChild(newImage);
        }
    }
    const close = () => {
        document.body.style.overflow = '';
        const opens = document.getElementById('fully');
        opens.style.display = 'none';
        const opens1 = document.getElementById('open');
        opens1.style.display = 'none';
        const imageDiv = document.getElementById('img-dis');
        imageDiv.removeChild(imageDiv.firstChild);
        const next_n = document.getElementById('next-n');
        while (next_n.firstChild) {
            next_n.removeChild(next_n.firstChild);
        }
    }
    const imagesc1 = [
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
        '/images/img4.jpg',
        '/images/img5.jpg',
        '/images/img6.jpg',
        '/images/ha.jpg',
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
        '/images/img4.jpg',
        '/images/img5.jpg',
        '/images/img6.jpg',
        '/images/ha.jpg',
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
        '/images/img4.jpg',
        '/images/img5.jpg',
        '/images/img6.jpg',
    ];
    const imagesc2 = [
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
        '/images/img4.jpg',
        '/images/img5.jpg',
        '/images/img6.jpg',
        '/images/ha.jpg',
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
        '/images/img4.jpg',
        '/images/img5.jpg',
        '/images/img6.jpg',
        '/images/ha.jpg',
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
        '/images/img4.jpg',
        '/images/img5.jpg',
        '/images/img6.jpg',
    ];
    const imagesc3 = [
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
        '/images/img4.jpg',
        '/images/img5.jpg',
        '/images/img6.jpg',
        '/images/ha.jpg',
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
        '/images/img4.jpg',
        '/images/img5.jpg',
        '/images/img6.jpg',
        '/images/ha.jpg',
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
        '/images/img4.jpg',
        '/images/img5.jpg',
        '/images/img6.jpg',
    ];

    return (
        <div>
            <div className="main1">
                <div className="candid">
                    <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='if'
                    ><motion.h1
                        initial={{ x:'-100%',opacity:"0" }}
                        animate={{ x:'0%' ,opacity:'1'}}
                        transition={{ duration: 1, ease: 'easeInOut',delay:0.4 }}
                    >Candid Photos</motion.h1></motion.div>
                    <div id="fully">
                        <i onClick={close} class="bi bi-x-lg"></i>
                        <div id="open">
                            <h1>Preview</h1>
                            <div id="img-dis"></div>
                            <div id="next-n">
                            </div>
                        </div>
                    </div>
                    <div className="display">
                        <div className="column">
                            {imagesc1.map((image, index) => (
                                <img key={index} onClick={(event) => open(index, event)} src={image} alt="" />
                            ))}
                        </div>
                        <div className="column">
                            {imagesc2.map((image, index) => (
                                <img key={index} onClick={(event) => open(index, event)} src={image} alt="" />
                            ))}
                        </div>
                        <div className="column">
                            {imagesc3.map((image, index) => (
                                <img key={index} onClick={(event) => open(index, event)} src={image} alt="" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Candid;
