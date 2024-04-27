

import { DataRepositoryDb } from "../../Domains/MemoData/Infra/DataRepositorydB"
import { DbConnection } from "../db/DbConnection"
import { DatabaseConnectionPostgres } from "../db/Postgres/DatabaseConnectionPostgres"

export class RepostoryFactory {
    static async connection(): Promise<DbConnection> {
        return new DatabaseConnectionPostgres().open()
    }

    static async getRepository() {
        const conn = await this.connection()
        return new DataRepositoryDb(conn)
    }
}