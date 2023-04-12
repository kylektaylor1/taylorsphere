import Link from 'next/link';
import {
    GithubProfileLink,
    InstagramLink,
    TwitterLink,
} from '../common/SocialLinks';

export default function Footer() {
    return (
        <div className="container flex flex-row justify-between gap-8 py-16">
            <div className="flex flex-col gap-4">
                <Link
                    href={`/`}
                    className={`font-body text-sm text-brand-mid underline hover:text-brand-pink`}
                >
                    {`Developed openly - view this website's code here.`}
                </Link>
                <p className="font-body text-xs text-brand-mid">
                    © 2023 Kyle Taylor. All rights reserved.
                </p>
            </div>
            <div className="flex flex-row items-center gap-4">
                <TwitterLink />
                <InstagramLink />
                <GithubProfileLink />
            </div>
        </div>
    );
}
