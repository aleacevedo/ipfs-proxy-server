import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.raw(
    `CREATE UNIQUE INDEX "unique_partial_api_keys_user_id" ON "api_keys" ("user_id") WHERE "active" IS TRUE`
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.raw(`DROP INDEX "unique_partial_api_keys_user_id"`);
}
