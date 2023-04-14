import { NextApiRequest, NextApiResponse } from 'next';
import { db, Skill, skill } from 'db';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const skills: Skill[] = await db.select().from(skill);
    return res.status(200).json({ skills });
}
