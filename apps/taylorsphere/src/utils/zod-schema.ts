import z from 'zod';

export const skillSchema = z.object({
    id: z.number(),
    value: z.enum(['typescript', 'sql', 'nextjs']),
    display: z.string(),
});

export type SkillSchema = z.infer<typeof skillSchema>;
