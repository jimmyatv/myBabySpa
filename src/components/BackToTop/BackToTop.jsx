import { React, useState, useEffect } from 'react';
import './BackToTop.css';
import { HiOutlineArrowSmallUp } from "react-icons/hi2";

const BackToTop = () => {

    const [up, setUp] = useState(false);

    const goUp = () => {
        if (window.scrollY >= 200) {
            setUp(true)
        } else {
            setUp(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', (goUp))

        return () => {
            window.addEventListener('scroll', (goUp))
        }
    })

    return (
        <div className={`btt ${up ? 'btt-active' : ''}`}>
            
                <a className='btt-up' href="#"><HiOutlineArrowSmallUp /></a>
            
        </div>
    )
};

export default BackToTop;