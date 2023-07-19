import styled from "@emotion/styled";
import { theme } from "../../../../Design-system/Config"

export const OurSponsorsWrapper = styled("section")`
    label:VenueWrapper;
    padding: 4rem 0 2rem 0;
`

export const Wrapper = styled("div")`
    label:Wrapper;
    padding: 3rem 0;
    text-align: center;
`
export const FirstWord = styled("span")`
    label:FirstWord;
    font-size: 2.3rem;
    font-weight: bold;
    color: ${theme.secondary};
`
export const SecondWord = styled("span")`
    label:SecondWord;
    font-size: 2.3rem;
    font-weight: bold;
    color: ${theme.primary};
`
export const Description = styled("p")`
    label:Description;
    color: ${theme.gray};
`
export const SponsorImageWrapper = styled("div")`
    label:SponsorImageWrapper;
    display: flex;
    align-items: center;
    gap: 1rem;
`