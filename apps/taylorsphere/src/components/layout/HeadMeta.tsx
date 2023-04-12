import Head from 'next/head';

export const HeadMeta = () => {
    return (
        <Head>
            <title>{`Kyle's Personal Website`}</title>
            <meta
                name="description"
                content="Kyle's Personal Website"
            />
            <meta
                property="og:title"
                content={`Kyle's Personal Website`}
                key={`title`}
            />
            <link
                rel="icon"
                href="/favicon.ico"
            />
        </Head>
    );
};
