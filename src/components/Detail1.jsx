import React from 'react';
import { motion } from 'framer-motion';
import { InView,useInView } from 'react-intersection-observer';
import '../styles/detail1.css';

const Detail1 = () => {

  const [refNav, inViewNav] = useInView({
    triggerOnce: true,
  });

  const [refVideo, inViewVideo] = useInView({
    triggerOnce: true,
  });

  const [refVideoExtra, inViewVideoExtra] = useInView({
    triggerOnce: true,
  });

  const [refTalk, inViewTalk] = useInView({
    triggerOnce: true,
  });

  const navVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const videoVariant = {
    hidden: { width: '0px' },
    visible: { width: '765px', transition: { duration: 1, ease: 'easeInOut', delay: 0.5 } },
  };

  const videoExtraVariant = {
    hidden: { width: '0px' },
    visible: { width: '765px', transition: { duration: 1, ease: 'easeInOut' } },
  };

  const talkVariant = {
    hidden: { y: '50%', opacity: '0' },
    visible: { y: '0%', opacity: '1', transition: { duration: 0.7, ease: 'easeInOut' } },
  };

  const iconVariant = {
    hidden: {
      pathLength: 0,
      fill: 'black',
    },
    visible: {
      pathLength: 1,
      fill: 'black',
    },
  };
  const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  const variants = isChrome ? iconVariant : { hidden: { opacity: 0, pathLength: 0, fill: 'black' }, visible: { opacity: 1, pathLength: 1, fill: 'black' } };
  return (
    <div>
      <div className="detail1">
        <div className="talk">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16" ref={ref}>
                <motion.path
                  d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"
                  variants={variants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{
                    default: { duration: 2, ease: 'easeInOut' },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                />
                <motion.path
                  d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
                  variants={variants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{
                    default: { duration: 2, ease: 'easeInOut' },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                />
              </svg>
            )}
          </InView>
          <motion.h1 variants={navVariant} ref={refNav} initial="hidden" animate={inViewNav ? 'visible' : 'hidden'}>
            The camera sees more than the eye, so why not make use of it?
          </motion.h1>
        </div>
        <div className="service">
          <motion.div variants={videoExtraVariant} ref={refVideoExtra} initial="hidden" animate={inViewVideoExtra ? 'visible' : 'hidden'} className="video-extra">
            <motion.div variants={videoVariant} ref={refVideo} initial="hidden" animate={inViewVideo ? 'visible' : 'hidden'} className="demo-video">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
              <video preload="auto" autoPlay loop muted="muted" volume="0">
                <source src="/videos/v9.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
          <motion.div variants={talkVariant} ref={refTalk} initial="hidden" animate={inViewTalk ? 'visible' : 'hidden'} className="service-detail">
            <div className="capture">Capture</div>
            <div className="wedding">Your Wedding with us</div>
            <div className="commit">We capture your wedding with divine dedication</div>
            <div className="d1">Candid</div>
            <div className="d1">Cinematic</div>
            <div className="d1">Traditional Photo/Video graphy</div>
            <div className="d1">Drone photography</div>
            <button id="view-wedding">View more</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Detail1;
