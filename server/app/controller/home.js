const { Controller } = require("egg");

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hellow";
  }
  async queryUser() {
    const { ctx, app } = this;
    const user = await app.mysql.get("user");

    ctx.body = user;
  }
}

module.exports = HomeController;
