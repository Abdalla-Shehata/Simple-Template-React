import React from 'react'
import { Description, Our, OurProgramsWrapper, Programms, TabsWrapper } from './style'
import Tabs from './Tabs'

export default function OurPrograms() {
    return (
        <div className="container">
            <OurProgramsWrapper>
                <div>
                    <Our>Our </Our>
                    <Programms>Programs</Programms>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta earum id expedita
                        possimus exercitationem adipisci magni.
                    </Description>
                </div>
                <TabsWrapper>
                    <Tabs />
                </TabsWrapper>
            </OurProgramsWrapper>
        </div>
    )
}
