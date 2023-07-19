import React from 'react'
import { IconWrapper, Image, ImageWrapper, Name, OurProgramsWrapper, Title, Description, RoomNo } from './style'
import logo1 from "../../../shared/assets/ourprograms/firstday-1.jpg"
import logo2 from "../../../shared/assets/ourprograms/firstday-2.jpg"
import logo3 from "../../../shared/assets/ourprograms/firstday-3.jpg"
import logo4 from "../../../shared/assets/ourprograms/secondday-1.jpg"
import logo5 from "../../../shared/assets/ourprograms/secondday-2.jpg"
import logo6 from "../../../shared/assets/ourprograms/secondday-3.jpg"
import logo7 from "../../../shared/assets/ourprograms/thirdday-1.jpg"
import logo8 from "../../../shared/assets/ourprograms/thirdday-2.jpg"
import logo9 from "../../../shared/assets/ourprograms/thirdday-3.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

export default function OurPrograms({ img, alt, time, roomNo, title, name, description }) {
  return (
    <OurProgramsWrapper>
      <ImageWrapper>
        <Image src={img} alt={alt} />
      </ImageWrapper>
      <div>
        <IconWrapper>
          <div>
            <FontAwesomeIcon size='sm' icon={faClock} /> 
            <span>{time}</span> 
          </div>
          <div>
            <FontAwesomeIcon style={{padding:"0  0.4rem"}} size='sm' icon={faMapMarker} />  
            <span>Room</span>
            <RoomNo>{roomNo}</RoomNo>
          </div>
        </IconWrapper>

        <Title>{title}</Title>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </div>
    </OurProgramsWrapper>
  )
}
