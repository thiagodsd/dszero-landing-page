import React from 'react';
import NavLink from '../ui/NavLink';
import ContactButton from '../ui/ContactButton';

const Header = () => (
    <header className="bg-gray-500 text-white">
        <nav className="container">
            <ul className="flex gap-4 p-4">
                <li>
                    <NavLink href="/">Home</NavLink>
                </li>
                <li>
                    <NavLink href="/about">About</NavLink>
                </li>
                <li>
                    <NavLink href="/posts">Posts</NavLink>
                </li>
                <ContactButton />
            </ul>
        </nav>
    </header>
);

export default Header;