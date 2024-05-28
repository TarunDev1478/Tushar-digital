import { React } from 'react'
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import '../styles/detail3.css'
function Detail3() {
    const [backRef,inBackVideo]=useInView({
        triggerOnce:true,
    })
    const backVariant={
        visible:{width:'100vw',transition:{duration:1,ease:"easeInOut"}},
        hidden:{width:'0vw'}
    }
    const [videoRef,inViewVideo]=useInView({
        triggerOnce:true,
    })
    const videoVariant={
        visible:{width:'100vw',transition:{duration:1,ease:"easeInOut"}},
        hidden:{width:'0vw'}
    }
    const [qualityRef,inViewQuality]=useInView({
        triggerOnce:true,
    })
    const qualityVariant={
        visible:{y:'0%',opacity:'1',transition:{duration:1,ease:"easeInOut"}},
        hidden:{y:'50%',opacity: '0.01'}
    }
    const [qualityRef1,inViewQuality1]=useInView({
        triggerOnce:true,
    })
    const qualityVariant1={
        visible:{y:'0%',opacity:'1',transition:{duration:1,ease:"easeInOut"}},
        hidden:{y:'50%',opacity: '0.01'}
    }
  return (
    <div>
     <motion.div
     ref={backRef}
     variants={backVariant}
     initial='hidden'
     animate={inBackVideo?'visible':'hidden'}
     className='b'>
     <motion.div
     ref={videoRef}
     variants={videoVariant}
     initial='hidden'
     animate={inViewVideo?'visible':'hidden'}
     className='detail3'>
                <motion.div
                ref={qualityRef}
                variants={qualityVariant}
                initial='hidden'
                animate={inViewQuality?'visible':'hidden'}
                className="heading">
                    Relive your memories<br /> with us and capture<br />your precious<br /> moments
                    <button id='View2'>View More</button>
                </motion.div>
                <motion.div
                ref={qualityRef1}
                variants={qualityVariant1}
                initial='hidden'
                animate={inViewQuality1?'visible':'hidden'}
                className="talk2">
                    We specialize not only in wedding photography but also in capturing the significant moments that shape your life. Our services extend beyond the joyous celebrations of weddings to include a diverse range of photography experiences. From the excitement of birthday shoots to the exploration of new places through travel shoots, the vibrancy of events, the unique perspective offered by drone shoots, the tender moments of newborn shoots, and many more, we are dedicated to preserving and immortalizing the beauty of life's various milestones. Our team is passionate about creating lasting memories, and we are committed to providing exceptional photography services for every special moment in your life.
                </motion.div>
        </motion.div>
     </motion.div>
      
    </div>
  )
}

export default Detail3
