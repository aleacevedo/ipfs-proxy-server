import { RelationMappings, Model } from "objection";
import path from "path";

import AppModel from "./app-model";

export class User extends AppModel {
  id!: string;
  email!: string;
  username!: string;
  secure_password!: string;
  readonly createdAt!: Date;
  readonly updatedAt!: Date;

  static get tableName() {
    return "users";
  }

  async getApiKeys() {
    return await this.$relatedQuery("apiKeys");
  }

  static get relationMappings(): RelationMappings {
    return {
      apiKeys: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, "api-key"),
        join: {
          from: "users.id",
          to: "api-key.user_id",
        },
      },
    };
  }
}
