import styled from "@emotion/styled";
import contact from "images/contact-bg.jpg"
import { theme } from "../../../../Design-system/Config"

export const ContactWrapper = styled("section")`
    label:ContactWrapper;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(${contact}) fixed;
    height: 600px;
    padding: 4rem 0 2rem 0;
`
export const Wrapper = styled("div")`
    label:Wrapper;
    display: flex;
    align-items: center;
    gap: 1rem;
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
export const P = styled("p")`
    label:P;
    color: ${theme.gray};
    display: block;
    width: 80%;
    line-height: 1.3;
`

export const DownloadNow = styled("button")`
    label: DownloadNow;
    font-size: 1rem;
    padding: 1rem 3rem;
    margin-top: 3rem;
    background: ${theme.primary};
    color: ${theme.white};
    border: 1px solid ${theme.primary};
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
        color: ${theme.white};
        background: ${theme.black};
        border: 1px solid ${theme.white};
    }
`

export const FormWrapper = styled("div")`
    label:FormWrapper;
    background-color: ${theme.white};
    border-radius: 13%;
    padding: 5rem;
`
export const Inputs = styled("input")`
    label:Inputs;
    font-size: 1.2rem;
    outline: none;
    border: none;
    background-color: ${theme.white};
`
export const TextArea = styled("textarea")`
    label:TextArea;
    font-size: 1.2rem;
    outline: none;
    border: none;

    background-color: ${theme.white};
`
export const InputsWrapper = styled("div")`
    label:InputsWrapper;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
`

export const Send = styled("button")`
    label: Send;
    font-size: 1rem;
    padding: 1rem 3rem;
    margin-top: 6.5rem;
    background: ${theme.primary};
    color: ${theme.white};
    border: 1px solid ${theme.primary};
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
        color: ${theme.white};
        background: ${theme.black};
        border: 1px solid ${theme.white};
    }
`