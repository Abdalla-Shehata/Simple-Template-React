import React from 'react'
import { Creative, CreativeSpeakersWrapper, Description, SliderWrapper, Speakers } from './style'
import Slider from './Slider'

export default function CreativeSpeakersComponents() {
    return (
        <CreativeSpeakersWrapper>
            <div className="container">
                <div>
                    <Creative>Creative </Creative>
                    <Speakers>Speakers</Speakers>
                    <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, ut iste</Description>
                </div>
                <div>
                    <SliderWrapper>
                        <Slider />
                    </SliderWrapper>
                </div>


            </div>
        </CreativeSpeakersWrapper>
    )
}
