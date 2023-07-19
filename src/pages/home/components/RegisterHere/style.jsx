import styled from "@emotion/styled";
import register from "images/register-bg.jpg"
import { theme } from "../../../../Design-system/Config"

export const RegisterHereWrapper = styled("section")`
    label:RegisterHereWrapper;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(${register}) fixed;
    height: 400px;
    padding: 4rem 0 2rem 0;
`
export const RegisterContainer = styled("div")`
    label:RegisterContainer;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
export const Title = styled("span")`
    label:Title;
    font-size: 2rem;
    color: ${theme.white};
`
export const ColoredTitle = styled("span")`
    label:ColoredTitle;
    color: ${theme.primary};
    font-size: 2rem;
`
export const Text = styled("p")`
    label:Text;
    color: ${theme.white};
    font-size: 1.5rem;
`
export const SubText = styled("p")`
    label:SubText;
    color: ${theme.gray};
`
export const FormWrapper = styled("div")`
    label:FormWrapper;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const RegisterInput = styled("input")`
    label:RegisterInput;
    padding: 0.6rem;
    border: 2px solid ${theme.white};
    border-radius: 5px;
    color: ${theme.white};
    background-color: transparent;
    ::placeholder {
        font-size: 1rem;
    }
`
export const RegisterButton = styled("button")`
    label: Register;
    font-size: 1rem;
    padding: 1rem 3rem;
    width: 150px;
    margin: auto;
    background: ${theme.primary};
    color: ${theme.white};
    border: 1px solid ${theme.primary};
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
        color: ${theme.secondary};
        background: ${theme.white};
        border: 1px solid ${theme.white};
    }
`