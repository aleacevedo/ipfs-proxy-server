import { Knex } from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("users", (table) => {
    table
      .uuid("id")
      .primary()
      .notNullable()
      .defaultTo(knex.raw("uuid_generate_v4()")),
      table.string("email").notNullable().unique(),
      table.string("username").notNullable().unique(),
      table.string("secret_password").notNullable(),
      table.timestamp("created_at").notNullable(),
      table.timestamp("updated_at").notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("users");
}
