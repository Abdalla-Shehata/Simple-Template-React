import styled from "@emotion/styled";
import { theme } from "../../Config";

export const SpeakersWrapper = styled("div")`
    label: SpeakersWrapper;
    width: 285px;
    text-align: center;
    color: ${theme.gray};

`
export const Name = styled("h2")`
    label: Name-Speaker;
    color: ${theme.black};
    font-size: 1.2rem;
`
export const Job = styled("h2")`
    label: job-Speaker;
    color: ${theme.gray};
    font-size: 0.9rem;
`