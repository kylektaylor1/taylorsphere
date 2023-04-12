import { InferModel } from 'drizzle-orm';
import { int, mysqlEnum, mysqlTable, serial, text, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';

export const skill = mysqlTable(
	'skill',
	{
		id: serial('id').primaryKey(),
		value: mysqlEnum('skill_value', ['typescript', 'sql', 'nextjs']).notNull(),
		display: varchar('name', { length: 50 }).notNull(),
	},
	(table) => ({
		uniqueIdx: uniqueIndex('unique_value').on(table.value),
	}),
);
export type Skill = InferModel<typeof skill>;

export const project = mysqlTable(
	'project',
	{
		id: serial('id').primaryKey(),
		name: varchar('name', { length: 50 }).notNull(),
		slug: varchar('slug', { length: 60 }).notNull(),
		description: text('description').notNull(),
		github_url: varchar('github_url', { length: 255 }).notNull(),
		live_url: varchar('live_url', { length: 255 }).notNull(),
	},
	(table) => ({
		uniqueIdx: uniqueIndex('unique_slug').on(table.slug),
	}),
);
export type Project = InferModel<typeof project>;

export const projectSkill = mysqlTable('project_skill', {
	id: serial('id').primaryKey(),
	project_id: int('project_id').notNull(),
	skill_id: int('skill_id').notNull(),
});
export type ProjectSkill = InferModel<typeof projectSkill>;
