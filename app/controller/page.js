'use strict'
const Controller = require('egg').Controller

function toInt(str) {
  if (typeof str === 'number') return str
  if (!str) return str
  return parseInt(str, 10) || 0
}

class PageController extends Controller {
  async index() {
    const ctx = this.ctx
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) }
    ctx.body = await ctx.model.Page.findAll(query)
  }

  async show() {
    const ctx = this.ctx
    ctx.body = await ctx.model.Page.findById(toInt(ctx.params.id))
  }

  async create() {
    const ctx = this.ctx
    const { name, age } = ctx.request.body
    const page = await ctx.model.Page.create({ name, age })
    ctx.status = 201
    ctx.body = page
  }

  async update() {
    const ctx = this.ctx
    const id = toInt(ctx.params.id)
    const page = await ctx.model.Page.findById(id)
    if (!page) {
      ctx.status = 404
      return
    }

    const { name, age } = ctx.request.body
    await page.update({ name, age })
    ctx.body = page
  }

  async destroy() {
    const ctx = this.ctx
    const id = toInt(ctx.params.id)
    const page = await ctx.model.Page.findById(id)
    if (!page) {
      ctx.status = 404
      return
    }

    await page.destroy()
    ctx.status = 200
  }
}

module.exports = PageController
