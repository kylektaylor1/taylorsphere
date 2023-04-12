export type SkillDescriptionT = {
    label: string;
    description: string;
    icon: JSX.Element;
};

export default function SkillAndDescription({
    label,
    description,
    icon,
}: SkillDescriptionT) {
    return (
        <div className="flex flex-row gap-4">
            <div>{icon}</div>
            <div className="flex flex-col gap-2">
                <h3 className="font-body text-2xl font-semibold text-white">
                    {label}
                </h3>
                <p className="font-body text-lg font-light text-brand-light">
                    {description}
                </p>
            </div>
        </div>
    );
}
