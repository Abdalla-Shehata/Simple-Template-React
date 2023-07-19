import styled from "@emotion/styled";
import { theme } from "../../Config";

export const OverviewWrapper = styled("div")`
    label: OverviewWrapper;
    width: 300px;
    text-align: center;
`
export const Title = styled("h2")`
    label: Title;
    color: #d4d4d4;
`
export const Description = styled("p")`
    label: Description;
    line-height: 1.8rem;
    color: ${theme.gray};
`