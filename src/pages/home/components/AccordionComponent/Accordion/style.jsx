import styled from "@emotion/styled";
import { theme } from "../../../../../Design-system/Config"

export const Wrapper = styled("div")`
    label:Wrapper;
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 500px; */
`
export const AccordionWrapper = styled("div")`
    label:AccordionWrapper;
    width: 70%;

`
export const Item = styled("div")`
    label:Item;
    margin-bottom: 10px;
    box-shadow: 0px 3px 6px -4px #777;

`
export const Title = styled("div")`
    label:Title;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.whiteSmoke};
    cursor: pointer;
    padding: 0 1rem;
    border-radius: 5px;
`
export const H2 = styled("h2")`
    label:H2;
    font-size: 1rem;
    color: ${theme.black};
`

export const Span = styled("span")`
    label:Span;
    font-size: 1.25rem;
`
export const Content = styled("div")`
    label:Content;
    padding: 0 1rem;
    max-height: 0;
    overflow: hidden;
    transition: 0.6s all cubic-bezier(0,1,0,1);
    text-align: start;
    &.show {                                          // add class in styled components
        height: auto;
        max-height: 9999px;
        transition: 0.6s all cubic-bezier(1,0,1,0);

    }
`
export const P = styled("p")`
    label:P;
    padding-bottom: 0.5rem;
    color: ${theme.gray};
`