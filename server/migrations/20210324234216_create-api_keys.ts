import { Knex } from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("api_keys", (table) => {
    table
      .uuid("id")
      .primary()
      .notNullable()
      .defaultTo(knex.raw("uuid_generate_v4()")),
      table.boolean("active").notNullable().defaultTo(true),
      table.string("user_id").references("id").inTable("user"),
      table.timestamp("created_at").notNullable(),
      table.timestamp("updated_at").notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("api_keys");
}
