import React from 'react'
import { Description, FirstWord, OurSponsorsWrapper, SecondWord, SponsorImageWrapper, Wrapper } from './style'
import OurSponsors from "../../../../Design-system/components/OurSponsors/OurSponsors"
import ourSponsorsD from './OurSponsorsData'

export default function OurSponsorsComponents() {
    return (
        <OurSponsorsWrapper>
            <div className="container">
                <Wrapper>
                    <FirstWord>
                        Our
                        <SecondWord> Sponsors</SecondWord>
                    </FirstWord>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, animi
                    </Description>
                </Wrapper>
                <SponsorImageWrapper>
                    {ourSponsorsD.map((SPONSOR) => {
                        return (
                            <OurSponsors source={SPONSOR.src} alternate={SPONSOR.alt} key={SPONSOR.id} />
                        )
                    })}
                </SponsorImageWrapper>
            </div>
        </OurSponsorsWrapper>
    )
}
