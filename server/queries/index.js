// queries/index.js

import db from '../config/db'

export default class Query {

  constructor(table) {
    this.TABLE = table
  }

  create_or_update = async (conditions, obj) => {
    const exists = await this.find(conditions)
    if (exists) {
      return this.update(conditions, obj)
    } else {
      return this.create(obj)
    }
  }

  first = async (conditions) => {
    const record = await db.table(this.TABLE).where(conditions).first()
    return record !== undefined ? record : null
  }

  find = async (conditions) => {
    const record = await db.table(this.TABLE).where(conditions)
    return record !== undefined ? record : null
  }

  find_by_id = async (id) => {
    const record = await db.table(this.TABLE).where({ id }).first()
    return record !== undefined ? record : null
  }

  create = async (obj) => {
    const rows = await db.table(this.TABLE).insert(obj)
    const record = await this.first(obj)
    return record !== undefined ? record : null
  }

  update = async (conditions, obj) => {
    const rows = await db.table(this.TABLE).where(conditions).update(obj)
    const record = await this.first(conditions)
    return record !== undefined ? record : null
  }

  get = async () => {
    const record = await db.table(this.TABLE).select()
    return record !== undefined ? record : null
  }

}

