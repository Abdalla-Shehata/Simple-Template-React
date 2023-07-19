import styled from "@emotion/styled";
import { theme } from "../../../../Design-system/Config";

export const OurProgramsWrapper = styled("div")`
    label: OurProgramsWrapper;
    padding: 5rem 0  2rem 0;
    width: 940px;
`
export const Our = styled("span")`
    label:Our;
    font-size: 2rem;
    font-weight: bold;
    color: ${theme.secondary};
    
`
export const Programms = styled("span")`
    label:Programms;
    font-size: 2rem;
    font-weight: bold;
    color: ${theme.primary};
`
export const Description = styled("p")`
    label:Description;
    color: ${theme.gray};
`
export const TabsWrapper = styled("div")`
    label:TabsWrapper;
    
`
export const Wrapper = styled("div")`
    label:Wrapper;
    display: flex;
    gap: 2rem;
`
export const SpanProgram = styled("span")`
    label:SpanProgram;
    font-weight: bold;
    cursor: pointer;
    padding: 2rem 0;
`
export const Line = styled("div")`
    label:line;
    width: 100%;
    height: 1px;
    background-color: ${theme.gray};
    margin:0 0 2rem;
`