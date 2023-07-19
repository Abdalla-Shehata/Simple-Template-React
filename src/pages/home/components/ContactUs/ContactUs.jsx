import React from 'react'
import { ContactWrapper, DownloadNow, FirstWord, FormWrapper, Inputs, InputsWrapper, P, SecondWord, Send, TextArea, Wrapper } from './style'

export default function ContactUs() {
    return (
        <ContactWrapper>
            <div className='container'>
                <Wrapper>
                    <div style={{ width: "50%" }}>
                        <FirstWord>New </FirstWord>
                        <SecondWord>Event</SecondWord>
                        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                            veniam dignissimos, itaque rerum, ex tempora corporis ullam minima
                            totam asperiores consectetur tempore.
                        </P>
                        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                            veniam dignissimos, itaque rerum, ex tempora corporis ullam minima
                            totam asperiores consectetur tempore.
                        </P>
                        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                            veniam dignissimos, itaque rerum, ex tempora corporis ullam minima
                            totam asperiores consectetur tempore.
                        </P>
                        <DownloadNow>DownloadNow</DownloadNow>
                    </div>
                    <FormWrapper>
                        <div>
                            <FirstWord>Keep In </FirstWord>
                            <SecondWord>Touch</SecondWord>
                        </div>
                        <form>
                            <InputsWrapper>
                                <Inputs type="text" placeholder='Name' />
                                <Inputs type="email" placeholder='Email' />
                                <TextArea placeholder='Message' />
                            </InputsWrapper>
                            <Send>Send Now</Send>
                        </form>
                    </FormWrapper>
                </Wrapper>
            </div>
        </ContactWrapper>
    )
}
