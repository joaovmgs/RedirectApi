/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/
import Route from '@ioc:Adonis/Core/Route'
import Env from '@ioc:Adonis/Core/Env'
import './routes/user'
import './routes/url'

Route.get('/', async () => {
  return { Api: 'Api 1.0 | ' + Env.get('APPLICATION_NAME') }
})

Route.get('/:id', 'UrlSinglesController.redirect')
