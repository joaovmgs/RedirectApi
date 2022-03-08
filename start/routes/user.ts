/*
|--------------------------------------------------------------------------
| Routes User
|--------------------------------------------------------------------------
*/

import Route from '@ioc:Adonis/Core/Route'

Route.resource('/users', 'UsersController')
  .apiOnly()
  .middleware({
    update: ['auth'],
    destroy: ['auth'],
    index: ['auth'],
  })

Route.group(() => {
  Route.post('/', 'AuthController.store')
  Route.delete('/', 'AuthController.destroy')
}).prefix('auth')
