import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/slider.css';

function Slider() {
  const next = () => {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
    updateMainSliderBackground();
  };

  const pre = () => {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
    updateMainSliderBackground();
  };

  const updateMainSliderBackground = () => {
    const selectedImage = document.querySelector('.item:nth-child(2)');
    if (selectedImage) {
      const currentImageSrc = selectedImage.style.backgroundImage;
      document.getElementById('main-slider').style.backgroundImage = currentImageSrc;
    }
  };

  return (
    <div>
      <div id="main-slider">
        <div className="back"></div>
        <motion.div className="slider"
        >
          <motion.div
            className="container">
            <motion.div id="slide">
              <motion.div

                className="item"
                style={{ backgroundImage: `url("/images/img1.jpg")` }}
              ></motion.div>
              <motion.div

                className="item"
                style={{ backgroundImage: `url("/images/img2.jpg")` }}
              ></motion.div>
              <motion.div

                className="item"
                style={{ backgroundImage: `url("/images/img3.jpg")` }}
              ></motion.div>
              <motion.div

                className="item"
                style={{ backgroundImage: `url("/images/img4.jpg")` }}
              ></motion.div>
              <motion.div

                className="item"
                style={{ backgroundImage: `url("/images/img5.jpg")` }}
              ></motion.div>
              <motion.div

                className="item"
                style={{ backgroundImage: `url("/images/img6.jpg")` }}
              ></motion.div>
              <motion.div

                className="item"
                style={{ backgroundImage: `url("/images/img7.jpg")` }}
              ></motion.div>
              <motion.div

                className="item"
                style={{ backgroundImage: `url("/images/img8.jpg")` }}
              ></motion.div>
              <motion.div className="buttons">
                <button id="pre" onClick={pre}>
                  <i className="bi bi-arrow-left"></i>
                </button>
                <button id="next" onClick={next}>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}

export default Slider;
