CREATE TABLE `project` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(50) NOT NULL,
	`slug` varchar(60) NOT NULL,
	`description` text NOT NULL,
	`github_url` varchar(255) NOT NULL,
	`live_url` varchar(255) NOT NULL
);

CREATE TABLE `project_skill` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`project_id` int NOT NULL,
	`skill_id` int NOT NULL
);

CREATE TABLE `skill` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`skill_value` enum('typescript','sql','nextjs') NOT NULL,
	`name` varchar(50) NOT NULL
);

CREATE UNIQUE INDEX `unique_slug` ON `project` (`slug`);
CREATE UNIQUE INDEX `unique_value` ON `skill` (`skill_value`);