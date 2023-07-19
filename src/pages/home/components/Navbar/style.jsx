import styled from "@emotion/styled";
import { theme } from "../../../../Design-system/Config";

export const NavbarWrapper = styled("section")`
    label: NavbarWrapper;
    padding: 1.5rem 0;
    position: fixed;
    z-index: 2;
    width: 100%;
    color: ${theme.white};
    background-color: ${theme.secondary};
    `
    export const NavContainer = styled("div")`
        label: NavContainer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
    export const NavTitle = styled("span")`
        label: NavTitle;
        font-size: 1.7rem;
    `
    export const Event = styled("span")`
        label: Event;
        color: ${theme.primary};
    `
    export const LinkStyle = styled("a")`
        label: LinkStyle;
        text-decoration: none;
        font-size: 1rem;
        color: ${theme.white};
    `
    export const LinksWrapper = styled("div")`
        label: Linkswrapper;
        display: flex;
        gap: 2rem;
        align-items: center;
        
    `