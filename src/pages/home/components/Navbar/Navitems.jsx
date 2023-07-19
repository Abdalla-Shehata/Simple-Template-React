import React from 'react'
import links from './Links'
import NavLinks from './NavLinks';
import { useLocation } from 'react-router-dom';
import { theme } from '../../../../Design-system/Config';

export default function NavItems() {

    const items = links();
    const route = useLocation();
    // console.log(route.pathname);

    return (
        <>
            {items.map((link, index) => {
                return (
                    <NavLinks colorSend={route.pathname === link.navLink ? theme.active : theme.white}
                        key={index} navLink={link.navLink} navText={link.navText}
                    />
                )
            })}
        </>
    )
}
