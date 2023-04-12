# Taylorsphere

## Requirements

1. Node, pnpm, the usual.
2. Planetscale CLI (`pscale`)
3. MySQL Client
4. Turbo (turborepo)

## Tech Stack

1. NextJS Fullstack
2. Planetscale DB
3. Drizzle ORM

## Connecting to Planetscale (db)

_This is for development purposes only._

1. First, create a branch named `local_<insert_branch_name>`
   a. Use this command: `pscale branch create <branch_name>`

2. Connect to the database / branch locally.
   a. Do this by using this command: `pscale connect <DATABASE_NAME> <BRANCH_NAME>`
   b. This will generate a "proxy" to connect to your app while developing locally.
   c. This will allow us to create changes, test & iterate as needed before merging into the production database.
   d. Find the [docs here](https://planetscale.com/docs/tutorials/connect-any-application#option-2-connect-using-the-planetscale-proxy)

3./

### Helpful Planetscale commands

-   List all branches for your database `pscale branch list <database_name>`
-

## Using Drizzle ORM

1. We use the [Drizzle Orm](https://github.com/drizzle-team/drizzle-orm) to manage our migrations and general data typing, etc.

### Using drizzle orm

1. You will create your schema changes all within the "schema.ts" file within the "db" package.
2. You have the following commands to manage migrations:
   a. `pnpm check:migrations`: This will list the migrations you have applied to the DB so far and other info.
   b. `pnpm gen:migrations`: This will generate any new migrations from any changes to the `schema.ts` file. Please verify that it generated the migrations correctly! This tool is pretty good, it covers 99% of things easily.
   c. Need to create a custom migration file to write your own SQL? Use the command `gen:custom:migration`, which will auto-generate a blank file in the `/migrations` folder.
3. Once you have completed the db work at hand, you can do a few of the following:
   a. \*\* prefer to do `db push` in drizzle-kit once ready :)
   b. For now, you need to connect to the db shell through the command and apply the migrations manually.
   c. Do so by: `pscale shell <database_name> <branch_name>`
   d. Then copy paste the migrations into the shell and run them. You can copy paste all, it will only apply what is needed.
