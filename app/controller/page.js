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
    const Op = ctx.app.Sequelize.Op
    const { limit, offset, name } = ctx.query
    const filterObj = name ? { name: { [Op.substring]: name } } : {}
    const query = {
      limit: toInt(limit),
      offset: toInt(offset),
      where: filterObj,
      order: [['id', 'DESC']],
    }
    ctx.body = await ctx.model.Page.findAndCountAll(query)
  }

  async show() {
    const ctx = this.ctx
    ctx.body = await ctx.model.Page.findByPk(ctx.params.id)
  }

  async create() {
    const ctx = this.ctx
    const { name, description } = ctx.request.body
    const page = await ctx.model.Page.create({ name, description, data: [] })
    ctx.status = 201
    ctx.body = page
  }

  async update() {
    const ctx = this.ctx
    const id = ctx.params.id
    const page = await ctx.model.Page.findByPk(id)
    if (!page) {
      ctx.status = 404
      return
    }
    const { name, description } = ctx.request.body
    await page.update({ name, description })
    ctx.body = page
  }

  async updatePageData() {
    const ctx = this.ctx
    const id = ctx.params.id
    const page = await ctx.model.Page.findByPk(id)
    if (!page) {
      ctx.status = 404
      return
    }
    const { data } = ctx.request.body
    await page.update({ data })
    ctx.body = page
  }

  async destroy() {
    const ctx = this.ctx
    const id = ctx.params.id
    const page = await ctx.model.Page.findByPk(id)
    if (!page) {
      ctx.status = 404
      return
    }

    await page.destroy()
    ctx.status = 200
  }
}

module.exports = PageController
