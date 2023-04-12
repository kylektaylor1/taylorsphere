import Link from 'next/link';
import React from 'react';
import GithubIcon from '../svg/socials/GithubIcon';
import { InstagramIcon } from '../svg/socials/InstagramIcon';
import { TwitterIcon } from '../svg/socials/TwitterIcon';

export function TwitterLink() {
    return (
        <Link
            href={`https://twitter.com/taylsspin`}
            target={`_blank`}
        >
            <TwitterIcon className="h-6 w-auto fill-white transition-all hover:fill-brand-pink" />
        </Link>
    );
}

export function InstagramLink() {
    return (
        <Link
            href={`https://www.instagram.com/kyle_taylor9`}
            target={`_blank`}
        >
            <InstagramIcon className="h-6 w-auto fill-white transition-all hover:fill-brand-pink" />
        </Link>
    );
}

export function GithubProfileLink() {
    return (
        <Link
            href={`https://github.com/kylektaylor1`}
            target={`_blank`}
        >
            <GithubIcon className="h-6 w-auto fill-white transition-all hover:fill-brand-pink" />
        </Link>
    );
}
