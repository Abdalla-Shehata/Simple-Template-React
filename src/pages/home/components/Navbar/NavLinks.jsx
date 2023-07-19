import React from 'react'
import { LinkStyle } from './style'

export default function NavLinks({ navLink, navText, colorSend }) {
    return (
        <LinkStyle style={{color: colorSend }} href={navLink}>{navText}</LinkStyle>
    )
}
