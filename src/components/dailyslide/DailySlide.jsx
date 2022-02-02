import React, { useRef, useState } from 'react';
import { DailyProductSliding } from '../../data/DailyProductSlide';
import {IoArrowBack, IoArrowForward} from 'react-icons/io5';
import './dailyslide.css';

const DailySlide = () => {

    const [current, setCurrent] = useState(0);
    const length = DailyProductSliding.length;
    const timeout = useRef(null);

//Next sliding interval and icon
    const NextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
        // console.log(current)
    }

// Previous sliding interval and icon    
    const PrevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === 0 ? length -1 : current - 1)
        // console.log(current)
    }

    return (
        <div className="slider">
            <div className="slider_wrapper">
                {DailyProductSliding.map((slide, index) => (
                    <div className="slider_header" key={index}>
                        {index === current && (
                            <div className="slider_header-slide">
                                <img src={slide.image} alt={slide.alt} />
                                <div className="slider_header-content">
                                    <h2>{slide.title} </h2>
                                    <p>{slide.description}</p>
                                    <p>{slide.price}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                <div className="slider_button">
                     <IoArrowBack className="slider_button-prev" onClick={PrevSlide}/>
                    <IoArrowForward className="slider_button-next" onClick={NextSlide}/>
                </div>
            </div>
        </div>
    )
}

export default DailySlide
