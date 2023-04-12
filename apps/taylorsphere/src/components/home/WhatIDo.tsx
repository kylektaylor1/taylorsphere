import CodeIcon from '../svg/common/CodeIcon';
import GamepadIcon from '../svg/common/GamepadIcon';
import HammerIcon from '../svg/common/HammerIcon';
import RocketIcon from '../svg/common/RocketIcon';
import PrimarySectionHeader from '../ui/SectionHeaders';
import SkillAndDescription, {
    type SkillDescriptionT,
} from './SkillAndDescription';

export default function WhatIDo() {
    const skillItems: SkillDescriptionT[] = [
        {
            label: `Developer`,
            description: `As a skilled full-stack developer, I specialize in building robust web applications. I have hands-on experience working with popular modern technologies like NextJS, Supabase, Hasura & Prisma, allowing me to develop cutting-edge solutions that are both efficient and scalable.`,
            icon: <CodeIcon className="h-8 w-8 stroke-brand-lightest" />,
        },
        {
            label: `Entrepreneur`,
            description: `I consider myself fortunate to be an entrepreneur, and I am grateful for the opportunities that have come my way. Through hard work, perseverance, and a passion for innovation, I have been able to build successful businesses and make a positive impact in the world.`,
            icon: <RocketIcon className="h-8 w-8 stroke-brand-lightest" />,
        },
        {
            label: `Gamer`,
            description: `Gaming has been a long-standing personal hobby of mine, providing a way to unwind and exercise my mind outside of work. While it may seem like a purely recreational activity, the strategic and problem-solving skills I've developed through gaming have also proven valuable in my professional life.`,
            icon: <GamepadIcon className="h-8 w-8 stroke-brand-lightest" />,
        },
        {
            label: `Builder`,
            description: `From designing and developing apps and websites to building businesses and even intricate LEGO sets, my passion for creating and problem-solving is evident in all aspects of my life. I thrive on taking on new challenges and bringing ideas to life.`,
            icon: <HammerIcon className="h-8 w-8 stroke-brand-lightest" />,
        },
    ];

    const sectionDescription =
        `In addition to my professional pursuits, I maintain a variety of hobbies and skills that complement my work ethic. By engaging in diverse activities and pursuing personal growth, I am able to maintain a healthy work-life balance that enhances my overall productivity and performance.` as const;

    return (
        <div className="container flex flex-col items-center py-16">
            <PrimarySectionHeader content={`What I do`} />
            <p
                className={`mb-8 mt-4 w-full text-center font-body text-xl font-medium text-brand-lightest md:w-4/5 lg:w-3/4`}
            >
                {sectionDescription}
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {skillItems.map((item, index) => (
                    <SkillAndDescription
                        key={index}
                        label={item.label}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
}
