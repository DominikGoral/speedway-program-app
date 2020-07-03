import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Heat from './Heat/Heat'
import './Heats.css'
import { render } from '@testing-library/react'

const heats = props => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToSHow: 1,
        slidesToScroll: 1
    }
    return(
        <Slider {...settings}>
            <div>
                <Heat />
            </div>
            <div>
                <Heat />
            </div>
            <div>
                <Heat />
            </div>
        </Slider>
    )
}

export default heats