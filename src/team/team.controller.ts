import * as Koa from 'koa'
import * as Router from 'koa-router'
import AppDataSource from '../database/database.source'
import Team from './team.entity'

const routerOptions: Router.IRouterOptions = {
  prefix: '/teams'
}

const router: Router = new Router(routerOptions)

router.get('/', async (ctx: Koa.Context) => {
  const teams = await AppDataSource.manager.find(Team)

  ctx.body = teams
})

router.get('/:teamId', async (ctx: Koa.Context) => {
  ctx.body = 'TEAMS SHOW'
})

router.post('/', async (ctx: Koa.Context) => {
  ctx.body = 'TEAMS POST'
})

router.patch('/:teamId', async (ctx: Koa.Context) => {
  ctx.body = 'TEAMS UPDATE'
})

router.delete('/:teamId', async (ctx: Koa.Context) => {
  ctx.body = 'TEAMS DESTROY'
})

export default router
