import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BrandWordmark from '../svg/brand/BrandWordmark';

type NavItemProps = {
    href: string;
    label: string;
};

function NavItem({ href, label }: NavItemProps) {
    return (
        <Link
            className={`font-display text-3xl font-light tracking-wider text-white transition-all hover:text-brand-pink`}
            href={href}
        >
            {label}
        </Link>
    );
}

export default function NavigationBar() {
    const [scroll, setScroll] = useState<boolean>(false);

    const listenScrollEvent = () => {
        return setScroll(window.scrollY > 80);
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    const bgColor = scroll ? 'bg-black' : 'bg-transparent';

    console.log(scroll);

    const navItems: NavItemProps[] = [
        { href: `/projects`, label: `Projects` },
        { href: `/about`, label: `About` },
        { href: `/contact`, label: `Contact` },
    ];
    return (
        <nav
            className={`fixed top-0 z-[1000000] flex h-20 w-full flex-row items-center ${bgColor} transition-all`}
        >
            <div className="container flex h-full flex-row items-center justify-between">
                <BrandWordmark className="relative flex h-1/2 w-auto" />
                <div className="flex flex-row gap-8 justify-self-end">
                    {navItems.map((item, idx) => (
                        <NavItem
                            key={idx}
                            href={item.href}
                            label={item.label}
                        />
                    ))}
                </div>
            </div>
        </nav>
    );
}
