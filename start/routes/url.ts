/*
|--------------------------------------------------------------------------
| Routes User
|--------------------------------------------------------------------------
*/

import Route from '@ioc:Adonis/Core/Route'

Route.resource('url', 'UrlSinglesController').apiOnly()
Route.get('urlsi/:slug', 'UrlSinglesController.redirect')

Route.resource('urls', 'MultipleUrlsController').apiOnly()
Route.resource('links', 'LinksController').apiOnly().except(['index', 'show'])

Route.get('m/:slug', 'MultipleUrlsController.sortUrl')
