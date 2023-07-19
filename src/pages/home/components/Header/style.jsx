import styled from "@emotion/styled";
import header from "images/intro-bg.jpg"
import { theme } from "../../../../Design-system/Config";

export const HeaderWrapper = styled("section")`
    label: HeaderWrapper;
    height: 700px;
    padding: 20% 0;
    text-align: center;
    background: url(${header}) fixed;
    background-repeat: no-repeat;
    background-size: cover;

`
export const H3 = styled("h3")`
    label: H3;
    color: ${theme.white};
    font-size: 1.5rem;
`
export const Title = styled("h1")`
    label: Title;
    font-size: 3rem;
    color: ${theme.white};
`
export const LearnMore = styled("button")`
    label: LearnMore;
    font-size: 1rem;
    margin-right: 2rem;
    padding: 1rem 3rem;
    background: ${theme.white};
    color: ${theme.secondary};
    border: 1px solid ${theme.white};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    :hover {                             // use pseudo elements in emotion styled 
        color: ${theme.white};
        background: ${theme.primary};
        border: 1px solid ${theme.primary};
    }
`
export const Register = styled("button")`
    label: Register;
    font-size: 1rem;
    padding: 1rem 3rem;
    background: ${theme.primary};
    color: ${theme.white};
    border: 1px solid ${theme.primary};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
        color: ${theme.secondary};
        background: ${theme.white};
        border: 1px solid ${theme.white};
    }
`