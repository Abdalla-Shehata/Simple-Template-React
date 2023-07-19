import styled from "@emotion/styled";
import { theme } from "../../Config";

export const OurProgramsWrapper = styled("div")`
    label: OurProgramsWrapper;
    display: flex;
    align-items: center;
    gap: 3rem;
`
export const Image = styled("img")`
    label: Image;
    border-radius: 50%;
    width: 100%;
`
export const ImageWrapper = styled("div")`
    label: ImageWrapper;
    padding: 2rem 0;
    
`
export const IconWrapper = styled("div")`
    label: IconWrapper;
    display: flex;
    gap: 2rem;
    color: ${theme.gray};
    
`
export const Title = styled("h2")`
    label: Title;
    color: ${theme.black};
    margin: 0.4rem 0;
    
`
export const Name = styled("span")`
    label: Name;
    font-size: 0.9rem;
    color: ${theme.gray};
    padding: 0.5rem 0;
    display: block;
`

export const Description = styled("span")`
    label: Description;
    display: block;
    color: ${theme.gray};
    line-height: 1.9;
`
export const RoomNo = styled("span")`
    label: RoomNo;
    padding-left: 0.4rem;
`