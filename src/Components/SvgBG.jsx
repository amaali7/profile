import React, {useEffect}  from 'react';
import {motion, useAnimation } from 'framer-motion';

const pathVariants = {
    hidden:{
        d:"M0.5,3.5h1800v400c0,0-531-130-900,0s-900,0-900,0V3.5z",
        pathLength: 0
    },
    visable:{
        d: "M0.5-0.5h1800v400c0,0-495,147-900,0c-367.8-133.5-900,0-900,0V-0.5z",
        pathLength: 1,
        transition:{
            duration: 1,
            loop: Infinity,
            type: 'spring',
        }
    }
};

const SvgBG = () => {
    const controls = useAnimation();
    useEffect(()=>{
        controls.start(i =>({
            d: "M0.5-0.5h1800v400c0,0-495,147-900,0c-367.8-133.5-900,0-900,0V-0.5z",
        pathLength: 1,
        transition:{
            duration: 1,
            loop: Infinity,
            type: 'spring',
        }
        }))
    })
    return (
        <svg x='0px' y='0px' viewBox='0 0 1665 800'>
            <defs>
                <linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='0%'>
                    <stop offset='0%' style={{stopColor:'#686de0',stopOpacity:1}}></stop>
                    <stop offset='100%' style={{stopColor:'#e056fd',stopOpacity:1}}></stop>
                </linearGradient>
            </defs>
            
            <motion.path 
                d= "M0.5-0.5h1800v400c0,0-495,147-900,0c-367.8-133.5-900,0-900,0V-0.5z"
                className='st0 w0' 
                animate={controls}                
            />
            {/* <path className='st0 w1' d="M0.5-0.5h1800v400c0,0-432.9-139-789,23c-378,172-1011-23-1011-23V-0.5z"/>
            <path className='st0 w2' d="M0.5-0.5h1800v400c0,0-724.7-154.9-1084,0c-399,172-716,33-716,33V-0.5z"/>
            <path className='st0 w3' d="M0.5-0.5h1800v440c0,0-351-190-900-40c-408.8,111.7-900,0-900,0V-0.5z"/>
            <path className='st0 w4' d="M0.5-0.5h1800v400c0,0-495,147-900,0c-367.8-133.5-900,0-900,0V-0.5z"/> */}
        </svg>
    );
};

export default SvgBG;