import { React } from 'react'
import { motion} from "framer-motion";

import { useInView } from "react-intersection-observer";

import "../styles/detail2.css"
function Detail2() {
    const [videoRef,inViewVideo]=useInView({
        triggerOnce:true,
    })
    const videoVariant={
        visible:{width:'500px',transition:{duration:1,ease:"easeInOut",delay:0.5}},
        hidden:{width:'0px'}
    }
    const [backRef,inBackVideo]=useInView({
        triggerOnce:true,
    })
    const backVariant={
        visible:{width:'500px',transition:{duration:1,ease:"easeInOut"}},
        hidden:{width:'0px'}
    }
    const [qualityRef,inViewQuality]=useInView({
        triggerOnce:true,
    })
    const qualityVariant={
        visible:{x:'0%',opacity:'1',transition:{duration:1,ease:"easeInOut"}},
        hidden:{x:'-100%',opacity: '0.01'}
    }
  return (
    <div>
       <motion.div className='detail2'>
                <motion.div className='service2'>
                    <motion.div
                    ref={qualityRef}
                    variants={qualityVariant}
                    initial='hidden'
                    animate={inViewQuality?'visible':'hidden'}
                    className="quality">
                        <h1>Quality</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo labore quia nihil ex adipisci laudantium sit illum ipsam ad totam voluptates tenetur dolor at eaque dolore aliquid magnam assumenda amet? Assumenda sequi nulla eveniet soluta id porro, distinctio ullam culpa repudiandae a nostrum eaque asperiores aliquid alias necessitatibus. Dolorum.</p>
                    </motion.div>
                    <motion.button
                    ref={qualityRef}
                    variants={qualityVariant}
                    initial='hidden'
                    animate={inViewQuality?'visible':'hidden'}
                    id='view-wedding'>View more</motion.button>
                </motion.div>
                <motion.div
                ref={backRef}
                variants={backVariant}
                initial='hidden'
                animate={inBackVideo?'visible':'hidden'}
                className='demo-video1'>
                    <motion.div 
                    ref={videoRef}
                    variants={videoVariant}
                    initial='hidden'
                    animate={inViewVideo?'visible':'hidden'}
                    className='back'>
                        <img src="/images/ha1.jpg" alt="" />
                    </motion.div>
                    
                </motion.div>
        </motion.div>
    </div>
  )
}

export default Detail2;
