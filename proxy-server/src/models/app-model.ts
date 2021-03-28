import { Model, QueryContext } from "objection";

class AppModel extends Model {
  createdAt!: Date;
  updatedAt!: Date;

  async $beforeInsert(queryContext: QueryContext) {
    await super.$beforeInsert(queryContext);
    this.createdAt = new Date();
    this.updatedAt = this.createdAt;
  }

  $beforeUpdate() {
    this.updatedAt = new Date();
  }
}

export default AppModel;
