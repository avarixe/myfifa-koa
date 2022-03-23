import * as Koa from 'koa'
import { StatusCodes } from 'http-status-codes'
import * as bodyParser from 'koa-bodyparser'
import teamController from '../team/team.controller'

const app: Koa = new Koa()

// Generic error handling middleware
app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.statusCode || error.status || StatusCodes.INTERNAL_SERVER_ERROR
    error.status = ctx.status
    ctx.body = { error }
    ctx.app.emit('error', error, ctx)
  }
})

// Middleware
app.use(bodyParser())

// Route middleware
app.use(teamController.routes())
app.use(teamController.allowedMethods())

// Application error logging
app.on('error', console.error)

export default app
