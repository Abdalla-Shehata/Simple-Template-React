import React from 'react'
import { P, SPAN, Title, VenueWrapper } from './style'

export default function Venue() {
    return (
        <VenueWrapper>
            <div className="container">
                <Title>Venue</Title>
                <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus quia quam corrupti aspernatur consequatur doloremque.
                    Natus atque laboriosam fugit pariatur eligendi.
                </P>
                <SPAN>nEW eVENT</SPAN>
                <SPAN>120 Market Street, Suit 110</SPAN>
                <SPAN>SanFrancisco, CA 10110</SPAN>
                <SPAN>Tel:010-020-0120</SPAN>

            </div>
        </VenueWrapper>
    )
}
