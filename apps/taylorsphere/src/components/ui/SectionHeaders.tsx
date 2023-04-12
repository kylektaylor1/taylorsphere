import React from 'react';

export default function PrimarySectionHeader({ content }: { content: string }) {
    return (
        <h2
            className={`font-display text-6xl font-medium tracking-wider text-brand-pink`}
        >
            {content}
        </h2>
    );
}
