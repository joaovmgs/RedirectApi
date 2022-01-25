import { DateTime } from 'luxon';
import Link from 'App/Models/Link';
import { BaseModel, column,hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';

export default class MultipleUrl extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public slug: string

  @column.dateTime({ autoCreate: true, serializeAs: 'createdAt' })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true,serializeAs: 'updatedAt' })
  public updatedAt: DateTime

  @hasMany(() => Link, {foreignKey: 'multipleUrlsId'})
  public links: HasMany<typeof Link>


}
