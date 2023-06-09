import React from 'react';

type Props = {
    className?: string;
};

export function TwitterIcon({ className }: Props) {
    return (
        <svg
            className={`${className ? `${className}` : 'fill-white'}`}
            width="22"
            height="18"
            viewBox="0 0 22 18"
        >
            <path
                id="Path_131"
                data-name="Path 131"
                d="M22,2.953a8.979,8.979,0,0,1-2.592.716,4.552,4.552,0,0,0,1.985-2.514,9,9,0,0,1-2.866,1.1,4.509,4.509,0,0,0-7.808,3.109A4.587,4.587,0,0,0,10.835,6.4a12.786,12.786,0,0,1-9.3-4.748,4.569,4.569,0,0,0,1.4,6.067A4.473,4.473,0,0,1,.884,7.152c0,.019,0,.038,0,.057A4.539,4.539,0,0,0,4.5,11.665a4.495,4.495,0,0,1-2.038.078A4.522,4.522,0,0,0,6.682,14.9a9.018,9.018,0,0,1-5.606,1.945A9.122,9.122,0,0,1,0,16.78a12.713,12.713,0,0,0,6.919,2.042A12.8,12.8,0,0,0,19.761,5.893q0-.3-.013-.588A9.208,9.208,0,0,0,22,2.953"
                transform="translate(0 -0.822)"
            />
        </svg>
    );
}
