import { skillSchema, SkillSchema } from 'src/utils/zod-schema';
import { NextjsIcon, TypescriptIcon } from 'ui';

export default function Skill({ skill }: { skill: SkillSchema }) {
    const result = skillSchema.safeParse(skill);

    if (!result.success) {
        return <div>{`Loading...`}</div>;
    }

    const skillIcon = () => {
        switch (result.data.value) {
            case skillSchema.shape.value.enum.nextjs:
                return <NextjsIcon className="h-6 w-6" />;
            case skillSchema.shape.value.enum.typescript:
                return <TypescriptIcon className="h-6 w-6" />;
            default:
                return <></>;
        }
    };

    return (
        <div className="flex flex-row items-center gap-2 rounded-lg bg-brand-darkest px-4 py-2">
            {skillIcon()}
            <p className="font-body text-base font-medium text-brand-light md:text-lg">
                {result.data.display}
            </p>
        </div>
    );
}
