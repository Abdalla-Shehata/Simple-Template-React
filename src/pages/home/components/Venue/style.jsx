import styled from "@emotion/styled";
import venue from "images/venue-bg.jpg"
import { theme } from "../../../../Design-system/Config"

export const VenueWrapper = styled("section")`
    label:VenueWrapper;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(${venue}) fixed;
    height: 400px;
    padding: 4rem 0 2rem 0;
`
export const Title = styled("h2")`
    label:Title;
    color: ${theme.primary};
    font-weight: bold;
    font-size: 2rem;
    
`
export const P = styled("p")`
    label:P;
    font-size: 1rem;
    color: ${theme.gray};
    margin-bottom: 2rem;
    width: 400px;
    line-height: 1.5;
`
export const SPAN = styled("span")`
    label:SPAN;
    display: block;
    font-size: 1rem;
    font-weight: bold;
    color: ${theme.black};
    padding: 0.5rem 0;
`