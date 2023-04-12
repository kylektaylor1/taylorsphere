import React from 'react';

export default function CodeIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className ? className : `h-6 w-6`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
            ></path>
            <path d="M7 8l-4 4l4 4"></path>
            <path d="M17 8l4 4l-4 4"></path>
            <path d="M14 4l-4 16"></path>
        </svg>
    );
}
