import React from 'react'
import { Job, Name, SpeakersWrapper } from './style'

export default function CreativeSpeakers({ img, name, job, alt }) {
    return (
        <SpeakersWrapper>
            <img src={img} alt={alt} width="100%" />
            <Name>{name}</Name>
            <Job>{job}</Job>
        </SpeakersWrapper>
    )
}
