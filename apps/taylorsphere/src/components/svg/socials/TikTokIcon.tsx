import React from 'react';

type Props = {
    className?: string;
};

export function TikTokIcon({ className }: Props) {
    return (
        <svg
            className={`${className ? `${className}` : 'fill-white'}`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
        >
            <path
                d="M16.1,4C15,3.3,14.3,2.2,14,0.9C14,0.6,13.9,0.3,13.9,0h-3.4l0,13.8c-0.1,1.5-1.3,2.8-2.9,2.8c-0.5,0-0.9-0.1-1.3-0.3
                c-0.9-0.5-1.5-1.4-1.5-2.6c0-1.6,1.3-2.9,2.9-2.9c0.3,0,0.6,0,0.9,0.1V8.2V7.4c-0.3,0-0.6-0.1-0.9-0.1c-3.5,0-6.3,2.8-6.3,6.3
                c0,2.1,1.1,4,2.7,5.2C5,19.6,6.3,20,7.6,20c3.5,0,6.3-2.8,6.3-6.3v-7c1.3,1,3,1.5,4.8,1.5V5.5V4.8C17.8,4.8,16.9,4.5,16.1,4z"
            />
        </svg>
    );
}
