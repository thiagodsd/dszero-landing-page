'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({href, ...props}) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    // console.log(pathname, href, isActive);
    return (
        <Link className={isActive ? 'font-black' : ''} href={href} {...props} />
    )
}

export default NavLink;