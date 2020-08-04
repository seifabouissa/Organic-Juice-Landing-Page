import React, {useRef,useEffect} from 'react';
import img1 from '../imgs/juice.png';
import img2 from '../imgs/leaf01.png';
import img3 from '../imgs/leaf02.png';
import img4 from '../imgs/leaf03.png';
import img5 from '../imgs/leaf04.png';
import img6 from '../imgs/leaf05.png';
import {TweenMax,TimelineLite,Power3} from 'gsap';
const JuiceLeaves = () => {
    let juice = useRef(null);
    let leaf1 = useRef(null);
    let leaf2 = useRef(null);
    let leaf3 = useRef(null);
    let leaf4 = useRef(null);
    let leaf5 = useRef(null);
    
    useEffect(() => {
        TweenMax.from(juice, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: 1})
        TweenMax.from(leaf1, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: 1.2})
        TweenMax.from(leaf2, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: 1.4})
        TweenMax.from(leaf3, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: 1.6})
        TweenMax.from(leaf4, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: 1.8})
        TweenMax.from(leaf5, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: 2})
    },[])


    return(
        <div className="juice-leaves">
            <div ref={el => juice = el} className="juice">
                <img src={img1} alt=""/>
            </div>

            <div className="leaves">
                <ul id="scene">
                    <li ref={el => leaf1 = el} className="layer" data-depth="-.1">
                        <img src={img2} alt=""/>
                    </li>
                    <li ref={el => leaf2 = el} className="layer" data-depth="-.3">
                        <img src={img3} alt=""/>
                    </li>
                    <li ref={el => leaf3 = el} className="layer" data-depth="-1.5">
                        <img src={img4} alt=""/>
                    </li>
                    <li ref={el => leaf4 = el} className="layer" data-depth=".1">
                        <img src={img5} alt=""/>
                    </li>
                    <li ref={el => leaf5 = el} className="layer" data-depth=".3">
                        <img src={img6} alt=""/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default JuiceLeaves;