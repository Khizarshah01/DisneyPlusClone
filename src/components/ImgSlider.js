import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components'
import Slider from "react-slick"

function ImgSlider() {

    let setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
  return (
    <Carousel {...setting}>
        <Wrap>
            <img src="/images/slider-badging.jpg" />
        </Wrap>
        <Wrap>
            <img src="/images/slider-badag.jpg" />
        </Wrap>
        <Wrap>
            <img src="/images/slider-scale.jpg" />
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before{
        color: white;
    }
    .slick-list{
        overflow: visible;
    }
    button{
        z-index: 1;
    }
`

const Wrap = styled.div`
cursor: pointer;
    img{
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
     transition-duration: 300ms;
        &:hover{
        border: 4px solid rgba(249, 249, 249, 0.8);
     }
    }
`