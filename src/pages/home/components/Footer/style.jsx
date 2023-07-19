import styled from "@emotion/styled";
import { theme } from "../../../../Design-system/Config"

export const FooterWrapper = styled("section")`
    label:FooterWrapper;
    padding: 5rem;
    text-align: center;
`
export const Span = styled("span")`
    label:Span;
    color: ${theme.gray};
    
`
export const Madeby = styled("span")`
    label:Madeby;
    color: ${theme.primary};
    font-weight: bold;
    
`
export const UL = styled("ul")`
    label:UL;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-top: 3rem;
`
export const Li = styled("li")`
    label:Li;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: ${theme.gray};
    padding: 1rem;
    transition: 0.4s all;
    cursor: pointer;
    :hover {
        background-color: ${theme.primary};
        color: ${theme.white};
    }
`