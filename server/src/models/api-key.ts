import { RelationMappings, Model } from "objection";
import path from "path";

import AppModel from "./app-model";

export class ApiKey extends AppModel {
  id!: string;
  userId!: string;
  active?: boolean;
  readonly createdAt!: Date;
  readonly updatedAt!: Date;

  static get tableName() {
    return "api_keys";
  }

  async getUser() {
    return await this.$relatedQuery("user");
  }

  static get relationMappings(): RelationMappings {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, "user"),
        join: {
          from: "api-key.user_id",
          to: "user.id",
        },
      },
    };
  }
}
