import React from 'react';

type Props = {
    className?: string;
};

export function YoutubeIcon({ className }: Props) {
    return (
        <svg
            className={`${className ? `${className}` : 'fill-white'}`}
            width="22"
            height="15"
            viewBox="0 0 22 15"
        >
            <path
                d="M380.858,74.044a3.173,3.173,0,0,0-3.2-3.125s-2.633-.261-7.513-.261-7.78.261-7.78.261a3.173,3.173,0,0,0-3.2,3.125,27.009,27.009,0,0,0-.191,4.208,22.5,22.5,0,0,0,.191,4.021,3.173,3.173,0,0,0,3.2,3.125,56.729,56.729,0,0,0,7.627.261,57.927,57.927,0,0,0,7.665-.261,3.173,3.173,0,0,0,3.2-3.125s.114-1.379.114-4.021S380.858,74.044,380.858,74.044Zm-13.269,7.111V74.939l5.91,2.978Z"
                transform="translate(-358.972 -70.659)"
            />
        </svg>
    );
}
