import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UrlSingles extends BaseSchema {
  protected tableName = 'url_singles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('url')
      table.string('slug',24)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
