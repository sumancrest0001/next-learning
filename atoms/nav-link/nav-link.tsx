'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import classes from './nav-link.module.css';

interface NavLinkProps {
    href: string;
    children: ReactNode
}
function NavLink({href, children}:NavLinkProps): React.ReactElement {
    const path = usePathname()
    return (
        <li className={classes['nav-link']}>
                        <Link
                        className={path.startsWith(href) ? classes.active: ''}
                        href={href}
                        >
                            {children}
                        </Link>
                    </li>
    );
}

export default NavLink;