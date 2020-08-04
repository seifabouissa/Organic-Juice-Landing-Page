import React, {useRef,useEffect} from 'react';
import {TweenMax,TimelineLite,Power3} from 'gsap';

const Overlay = () => {
    let first = useRef(null);
    let second = useRef(null);
    let third = useRef(null);



    useEffect(() => {
        TweenMax.to(first, .8, {opacity: 0, x: 40, ease: Power3.easeIn, delay: .5})
        TweenMax.to(second, .8, {opacity: 0, x: 40, ease: Power3.easeIn, delay: .7})
        TweenMax.to(third, .8, {opacity: 0, x: 40, ease: Power3.easeIn, delay: .9})
    },[])

    return(
        <>
        <div ref={el => first = el} className="overlay first"></div>
        <div ref={el => second = el} className="overlay second"></div>
        <div ref={el => third = el} className="overlay third"></div>
        </>
    )
}

export default Overlay;