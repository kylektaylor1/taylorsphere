import { type NextPage } from 'next';
import {
    GithubProfileLink,
    InstagramLink,
    TwitterLink,
} from 'src/components/common/SocialLinks';
import ProfileImage from 'src/components/home/ProfileImage';
import WhatIDo from 'src/components/home/WhatIDo';
import Skill from 'src/components/skill/Skill';
import { trpc } from 'src/utils/trpc';
import { Layout } from '../components/layout/Layout';
import z from 'zod';
import { skillSchema } from 'src/utils/zod-schema';

const Home: NextPage = () => {
    const description = `Graduate from the University of North Carolina at Chapel Hill, I incorporate talent and technology to create experiences that tap into the culture of the modern digital ecosystem.`;

    const skills = trpc.skill.all.useQuery();
    console.log(skills.data);

    return (
        <Layout>
            <header className="flex h-screen flex-col items-center justify-center">
                <div className="container flex flex-row gap-8">
                    <div className="flex w-1/2 flex-col justify-center gap-4">
                        <h1 className="font-display text-8xl font-medium leading-none tracking-wide text-white">
                            <span className="text-brand-pink">{`Founder, `}</span>
                            {`Gamer & Software Developer`}
                        </h1>
                        <p className="font-body text-xl text-brand-light">
                            {description}
                        </p>
                        <div className="flex flex-row gap-4">
                            {skills.data?.map((skill, idx) => (
                                <Skill
                                    skill={skill}
                                    key={idx}
                                />
                            ))}
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <TwitterLink />
                            <InstagramLink />
                            <GithubProfileLink />
                        </div>
                    </div>
                    <div className="flex flex-grow items-center justify-center">
                        <ProfileImage />
                    </div>
                </div>
            </header>
            <WhatIDo />
        </Layout>
    );
};

export default Home;
