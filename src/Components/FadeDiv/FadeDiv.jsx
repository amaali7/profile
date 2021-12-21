import React, {useEffect} from 'react';
import {useAnimation, motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const FadeDivProps = {
    hidden:{
        opacity:0,
        scale:0
    },
    visable:{
        opacity:1,
        scale:1,
        transition:{delay:0.5, duration:1}
    },
    
};

const FadeDiv = (props)=>{
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(()=>{
        if (inView) {
            controls.start("visable");
        }
    },[controls, inView]);
    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={FadeDivProps}
            {...props}
        >
            {props.children}
        </motion.div>
    )
}

export default FadeDiv;