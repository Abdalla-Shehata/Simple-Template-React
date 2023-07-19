import React from 'react'
import { Description, FirstWord, SecondWord, Wrapper } from './style'
import Accordion from './Accordion/Accordion'

export default function AccordionComponent() {
    return (
        <div className='container'>
            <Wrapper>
                <FirstWord>
                    Do You Have
                    <SecondWord> Questions</SecondWord>?
                </FirstWord>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, animi?
                </Description>
                <Accordion />
            </Wrapper>
        </div>
    )
}
